from flask_api import FlaskAPI
import http.client
import json
from flask import request,send_from_directory
from sklearn.feature_extraction.text import CountVectorizer
import operator
#from pprint import pprint
import string
import textacy
from nltk import pos_tag
import numpy as np

app = FlaskAPI(__name__, static_folder='lebonin-master')

@app.route('/<path:filename>')  
def send_file(filename):  
    return send_from_directory(app.static_folder, filename)

def reject_outliers(prix):
    m = 2
    u = np.mean(prix)
    s = np.std(prix)
    filtered = [e for e in prix if (u - (2/3)*s < e < u + (2/3)*s)]
    return (filtered)

def tokenize_sentence(separe,description,price):
    stop_wo=['euro','total','1','d','x','ne','number*%','an','number*/*number','l','=','le','de','d','s','de','un', 'une','alors','au','aucuns','aussi','autre','avant','avec','avoir','bon','car','ce','cela','ces','ceux','chaque','ci','comme','comment','dans','des','du','dedans','dehors'
    ,'depuis','devrait','doit','donc','dos','début','elle','elles','en','encore','essai','est','et','eu','fait','faites','fois','font','hors','ici','il','ils','je','juste'
    ,'la','le','les','leur','là','ma','maintenant','mais','mes','mine','moins','mon','mot','même','ni','nommés','notre','nous','ou','où','par','parce','pas','peut','peu','plupart','pour','pourquoi','quand','que','quel','quelle','quelles','quels','qui','sa','sans','ses','seulement'
    ,'si','sien','son','sont','sous','soyez','sujet','sur','ta','tandis','tellement','tels','tes','ton','tous','tout','trop','très','tu','voient','vont','votre','vous','vu','ça','étaient','état','étions','été','être']
    text=str(description)
    text=textacy.preprocess.normalize_whitespace(text)
    text=textacy.preprocess.fix_bad_unicode(text, normalization=u'NFKC')
    text=textacy.preprocess.preprocess_text(text, fix_unicode=True, lowercase=True,transliterate=True, no_urls=True,
    no_phone_numbers=True,
    no_currency_symbols=True,
    no_emails=True, no_numbers=False, no_punct=False,
    no_contractions=False, no_accents=True)
    text=textacy.preprocess.unpack_contractions(text)
    doc = textacy.Doc(text,lang='fr')        
    text=doc.to_bag_of_terms(ngrams=3,lemmatize=False, as_strings=True,stop_words=stop_wo)
    for x in stop_wo:
        if x in text:
            del text[x]
    text = dict(sorted(text.items(), key=operator.itemgetter(1),reverse=True))   
    #text = pos_tag(dict([value for (key, value) in sorted(text.items(), reverse=True)]))
    #print(text)
    #sents_list
    if(separe):
        list_key_words=[]
        list_digit=[]
        list_adj=[]
        for value, key in enumerate (text):
            if(key[0].isdigit()):
                list_digit.append(key[0])
            elif(key[1]=='JJ'):
                list_adj.append(key[0])
            else:
                list_key_words.append(key[0])
        mot_cles={}
        mot_cles['digit']=list_digit
        mot_cles['adjective']=list_adj
        mot_cles['verb']=list_key_words
    else:
        list_key_words=[]
        for value, key in enumerate (text):
            
                list_key_words.append(key)
        mot_cles={}
        mot_cles['verb']=list_key_words
    prix=np.hstack(price)
    prix=reject_outliers(prix)
    mean=int(np.mean(prix))
    p_25 = np.percentile(prix, 25)
    p_75 =np.percentile(prix, 75)
    p_min=np.min(prix)
    p_max=np.max(prix)
    info_prix=np.array([p_min,p_25,mean,p_75,p_max])
    print(p_max)
    return(mot_cles,info_prix)

#mot_cles,info_prix=tokenize_sentence(0,description.replace('\n',"").replace('•',""),price)

@app.route('/example/')
def example():
    return {'request data': request.args.get("test")}
    #return {'request data': str(request.data.get("test",''))}

@app.route('/get_data')
def get_data():   
    try:
        category_id = request.args.get("categoryId")
        keywords = request.args.get("title") 
        conn = http.client.HTTPSConnection("vivatech.leboncoin.io")
        payload = "{\"filters\":{\"category\":{\"id\":\"%s\"},\"keywords\":{\"text\":\"%s\",\"type\": \"subject\"}},\"sort_by\":\"date\",\"sort_order\":\"desc\",\"limit\":100}"%(category_id,keywords)
        #,\"type\":\"subject\"
        #, \"category\":{\"id\":\"17\"}
        headers = {
            'api_key': "team15-b2362",
            'cache-control': "no-cache",
            'postman-token': "0632b205-01a4-60e3-3541-1779f164162e"
            }
        conn.request("POST", "/search", payload, headers)
        res = conn.getresponse()
        #print('%s\n'%(res.read()))
        res_dict = json.loads(res.read().decode('utf-8'))
        data = dict()
        price = list()
        description = ''
        titre = ''
        publication_date = list()
        for elem in res_dict["ads"]:
            #print(elem)
            #data = dict()
            if "price" in elem.keys():
                price.append(elem["price"])
            #data["id"] = elem["list_id"]
            #data["location"] = elem["location"]
            description = description + ' ' + elem["body"]
            #publication_date.append(elem["first_publication_date"])
            #titre = titre + ' ' + elem["subject"]
            #data["owner"] = elem["owner"]
            #data["booster"] = elem["options"]["booster"]
            #data["urgent"] = elem["options"]["urgent"]
            #data["photosup"] = elem["options"]["photosup"]
        #data["titre"] = titre
        #data["publication_date"] = publication_date
        #data["description"] = description
        #data["price"] = price
        print(price)
        mot_cles,info_prix=tokenize_sentence(0,description.replace('\n',"").replace('•',""),price)
        print("info_prix\n")
        print(info_prix)
        return [{"keywords":mot_cles["verb"][:10],"price_range":info_prix.tolist()}]
    except Exception as e:
        return("no result found")
        #print(e)

if __name__ == "__main__":
    app.run(debug=True,  port=5000)
