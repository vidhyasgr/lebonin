webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Services/SellService/sell-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SellService = /** @class */ (function () {
    function SellService(_http) {
        this._http = _http;
    }
    /**
     *
     * @returns {Observable<any[]>}
     */
    SellService.prototype.getTags = function (title, categoryId) {
        return this._http.get("http://localhost:5000/get_data?categoryId="
            + categoryId + "&title=" + title);
        // return this._http.get<SellerSuggestionData[]>("./assets/data/sell-suggestion-data.ts");
    };
    SellService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SellService);
    return SellService;
}());



/***/ }),

/***/ "./src/app/analysis/analysis.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/analysis/analysis.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  analysis works!\n</p>\n"

/***/ }),

/***/ "./src/app/analysis/analysis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalysisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnalysisComponent = /** @class */ (function () {
    function AnalysisComponent() {
    }
    AnalysisComponent.prototype.ngOnInit = function () {
    };
    AnalysisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-analysis',
            template: __webpack_require__("./src/app/analysis/analysis.component.html"),
            styles: [__webpack_require__("./src/app/analysis/analysis.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnalysisComponent);
    return AnalysisComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#mainContainer{\n  background: rgba(0, 0, 0, 4);\n}\n\n.main-background{\n  height: 100%;\n}\n\n.container-fluid {\n  height: 100%;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\nh1 {\n  font-family: Pacifico;\n  font-size: 35px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 500;\n  line-height: 26.4px;\n  color: whitesmoke;\n}\n\nh3 {\n  font-family: Pacifico;\n  font-size: 14px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 500;\n  line-height: 15.4px;\n}\n\np {\n  font-family: Pacifico;\n  font-size: 14px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 20px;\n}\n\nblockquote {\n  font-family: Pacifico;\n  font-size: 21px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 30px;\n}\n\npre {\n  font-family: Pacifico;\n  font-size: 13px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 18.5714px;\n}\n\n/* Overriding styles */\n\n::-webkit-input-placeholder {\n  font-family: Pacifico!important;\n}\n\n:-moz-placeholder { /* Firefox 18- */\n  font-family: Pacifico!important;\n}\n\n::-moz-placeholder {  /* Firefox 19+ */\n  font-family: Pacifico!important;\n}\n\n.logout-button{\n  position: fixed;\n  margin-top: -2.5%;\n}\n\n.nav-text{\n  color: white!important;\n\n}\n\n.menu-text>a{\n  font-size: larger!important;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!--<div class=\"snap-drawers\">-->\n  <!--<div class=\"snap-drawer snap-drawer-left\">-->\n    <!--<div>-->\n      <!--<div class=\"demo-social\">-->\n      <!--</div>-->\n      <!--<ul>-->\n\n        <!--<li><a routerLink=\"personCounter\" routerLinkActive=\"active\">Person Counter</a> </li>-->\n\n      <!--</ul>-->\n\n\n    <!--</div>-->\n  <!--</div>-->\n  <!--<div class=\"snap-drawer snap-drawer-right\"></div>-->\n<!--</div>-->\n\n\n  <!--<div id=\"content\" class=\"snap-content\" style=\"background-image: url('./assets/images/Background_dime_analytics.jpg');background-size: cover;\">-->\n\n  <!--&lt;!&ndash;<div id=\"toolbar\"  class=\"row\">&ndash;&gt;-->\n    <!--<div id=\"open-left\"></div>-->\n\n\n  <!--<div id=\"main-content\">-->\n\n    <!--<router-outlet></router-outlet>-->\n\n  <!--</div>-->\n\n<!--</div>-->\n\n\n<div class=\"main-background\">\n\n  <nav class=\"navbar navbar-inverse\" style=\"background: #ec6a33\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <!--<a class=\"navbar-brand\" href=\"#\">WebSiteName</a>-->\n      </div>\n\n\n    <div class=\"col-lg-offset-1\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <a class=\"nav-text\" routerLink=\"sell\"\n             routerLinkActive=\"active\" style=\"font-size: xx-large;\">leboncoin</a>\n        </li>\n        <!--<li>-->\n          <!--<a routerLink=\"personCounter\"-->\n             <!--routerLinkActive=\"active\">AI Analysis</a>-->\n        <!--</li>-->\n\n        <li>\n        <a class=\"nav-text\" routerLink=\"sell\"\n           routerLinkActive=\"active\">Sell</a>\n      </li><li>\n        <a class=\"nav-text\" routerLink=\"buyer\"\n           routerLinkActive=\"active\">Offers</a>\n      </li><li>\n        <a class=\"nav-text\" routerLink=\"buyer\"\n           routerLinkActive=\"active\">Discover</a>\n      </li><li>\n        <a class=\"nav-text\" routerLink=\"buyer\"\n           routerLinkActive=\"active\">Favorites</a>\n      </li><li>\n        <a class=\"nav-text\" routerLink=\"buyer\"\n           routerLinkActive=\"active\">Stores</a>\n      </li><li>\n        <a class=\"nav-text\" routerLink=\"buyer\"\n           routerLinkActive=\"active\">Messages</a>\n      </li>\n\n\n    </ul>\n\n    </div>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\"><span class=\"nav-text glyphicon glyphicon-user\"></span>Profile</a></li>\n        <!--<li><a (click)=\"logOut()\"><span class=\"glyphicon glyphicon-log-in\"></span> Log-Out</a></li>-->\n      </ul>\n    </div>\n  </nav>\n\n\n  <div id=\"main-content\">\n\n    <router-outlet></router-outlet>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_router__ = __webpack_require__("./src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sell_sell_component__ = __webpack_require__("./src/app/sell/sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Services_SellService_sell_service__ = __webpack_require__("./src/app/Services/SellService/sell-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__buyer_buyer_component__ = __webpack_require__("./src/app/buyer/buyer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__analysis_analysis_component__ = __webpack_require__("./src/app/analysis/analysis.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__sell_sell_component__["a" /* SellComponent */],
                __WEBPACK_IMPORTED_MODULE_9__buyer_buyer_component__["a" /* BuyerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__analysis_analysis_component__["a" /* AnalysisComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
                // CountryPickerModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__app_router__["a" /* routes */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__Services_SellService_sell_service__["a" /* SellService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sell_sell_component__ = __webpack_require__("./src/app/sell/sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyer_buyer_component__ = __webpack_require__("./src/app/buyer/buyer.component.ts");



var router = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__sell_sell_component__["a" /* SellComponent */] },
    { path: "sell", component: __WEBPACK_IMPORTED_MODULE_1__sell_sell_component__["a" /* SellComponent */] },
    { path: "buyer", component: __WEBPACK_IMPORTED_MODULE_2__buyer_buyer_component__["a" /* BuyerComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(router);


/***/ }),

/***/ "./src/app/buyer/buyer.component.css":
/***/ (function(module, exports) {

module.exports = ".center-div-buyer{\n  margin: auto;\n  width: 84%;\n  padding: 10px;\n}\n\n\n.normal-text{\n  font-size: 17px;\n  font-style: normal;\n  margin-left: 1%;\n}\n"

/***/ }),

/***/ "./src/app/buyer/buyer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"    height: 30%;\n    background-color: #e6e6e6;\">\n\n  <div class=\"center-div-buyer\">\n\n      <input type=\"text\" class=\"form-control col-lg-3\" aria-label=\"\" (keyup.enter)=\"suggestTags($event)\" style=\"width: 40%!important;\">\n\n      <div class=\"col-lg-6\" style=\"display: inline-flex\">\n      <select class=\"form-control col-lg-3\" id=\"exampleFormControlSelect1\" (change)=\"setCategory($event.target.value)\">\n        <option value=\"0\">«Choisissez une catégorie»</option>\n        <option value=\"71\" style=\"background-color:#E6E6E6\" disabled=\"\" id=\"cat71\">-- EMPLOI --</option>\n        <option value=\"33\" id=\"cat33\">Offres d'emploi</option>\n        <option value=\"1\" style=\"background-color:#E6E6E6\" disabled=\"\" id=\"cat1\">-- VEHICULES --</option>\n        <option value=\"2\" id=\"cat2\">Voitures</option>\n        <option value=\"3\" id=\"cat3\">Motos</option>\n        <option value=\"4\" id=\"cat4\">Caravaning</option>\n        <option value=\"5\" id=\"cat5\">Utilitaires</option>\n        <option value=\"6\" id=\"cat6\">Equipement Auto</option>\n        <option value=\"44\" id=\"cat44\">Equipement Moto</option>\n        <option value=\"50\" id=\"cat50\">Equipement Caravaning</option>\n        <option value=\"7\" id=\"cat7\">Nautisme</option>\n        <option value=\"51\" id=\"cat51\">Equipement Nautisme</option>\n        <option value=\"8\" style=\"background-color:#E6E6E6\" disabled=\"\" id=\"cat8\">-- IMMOBILIER --</option>\n        <option value=\"9\" id=\"cat9\">Ventes immobilières</option>\n        <option value=\"10\" id=\"cat10\">Locations</option>\n        <option value=\"11\" id=\"cat11\">Colocations</option>\n        <option value=\"13\" id=\"cat13\">Bureaux &amp; Commerces</option>\n        <option value=\"66\" style=\"background-color:#E6E6E6\" disabled=\"\" id=\"cat66\">-- VACANCES --</option>\n        <option value=\"12\" id=\"cat12\">Locations &amp; Gîtes</option>\n        <option value=\"67\" id=\"cat67\">Chambres d'hôtes</option>\n        <option value=\"68\" id=\"cat68\">Campings</option>\n        <option value=\"69\" id=\"cat69\">Hôtels</option>\n        <option value=\"70\" id=\"cat70\">Hébergements insolites</option>\n        <option value=\"14\" style=\"background-color:#E6E6E6\" disabled=\"\" id=\"cat14\">-- MULTIMEDIA --</option>\n        <option value=\"15\" id=\"cat15\">Informatique</option>\n        <option value=\"43\" id=\"cat43\">Consoles &amp; Jeux vidéo</option>\n        <option value=\"16\" id=\"cat16\">Image &amp; Son</option>\n        <option value=\"17\" id=\"cat17\">Téléphonie</option>\n        <option value=\"39\" id=\"cat39\">Décoration</option>\n        <option value=\"53\" id=\"cat53\">Chaussures</option>\n        <option value=\"23\" id=\"cat23\">Equipement bébé</option>\n        <option value=\"54\" id=\"cat54\">Vêtements bébé</option>\n\n      </select>\n\n      <button class=\"btn btn-primary col-lg-3\" style=\"width: 85%; margin-left: 1%\">Search</button>\n\n    </div>\n\n\n    <!--<div class=\"row\">-->\n\n      <!--<label class=\"normal-text\">Suggested keywords</label>-->\n      <div style=\"display: inline-flex\">\n        <div *ngFor=\"let tag of suggestionKeywordTags;let i = index\">\n          <button type=\"button\" class=\"btn btn-primary\" style=\"margin-left: 2px\">\n            {{tag}} <span class=\"badge glyphicon glyphicon-remove\"></span>\n          </button>\n        </div>\n      </div>\n\n    <!--</div>-->\n\n\n  </div>\n\n  <!-- main content -->\n\n  <div class=\"center-div\">\n\n    \n\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/buyer/buyer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuyerComponent = /** @class */ (function () {
    function BuyerComponent() {
        this.suggestionKeywordTags = [];
    }
    BuyerComponent.prototype.ngOnInit = function () {
        this.suggestionKeywordTags[0] = "iphone";
        this.suggestionKeywordTags[1] = "2018";
        this.suggestionKeywordTags[2] = "one year old";
        this.suggestionKeywordTags[3] = "super condition";
        this.suggestionKeywordTags[3] = "second hand";
    };
    /**
     *
     * @param event
     */
    BuyerComponent.prototype.suggestTags = function (event) {
    };
    BuyerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-buyer',
            template: __webpack_require__("./src/app/buyer/buyer.component.html"),
            styles: [__webpack_require__("./src/app/buyer/buyer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BuyerComponent);
    return BuyerComponent;
}());



/***/ }),

/***/ "./src/app/sell/sell.component.css":
/***/ (function(module, exports) {

module.exports = "label{\ncolor: black!important;\n\n}\n\n.normal-text{\n  font-size: 17px;\n  font-style: normal;\n  margin-left: 1%;\n}\n\n.scrollable{\n  padding: 25px;\n  height: 90% !important;\n  overflow-y: scroll;\n\n}\n"

/***/ }),

/***/ "./src/app/sell/sell.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center-div scrollable\" style=\"background-color: white!important; color: black!important;\">\n\n  <div class=\"row\">\n    <label for=\"exampleFormControlSelect1\">Category</label>\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-8\">\n      <select class=\"form-control\" id=\"exampleFormControlSelect1\" (change)=\"setCategory($event.target.value)\">\n        <option value=\"0\">«Choisissez une catégorie»</option>\n        <option value=\"71\" style=\"background-color:#E6E6E6\" disabled=\"\" id=\"cat71\">-- EMPLOI --</option>\n        <option value=\"33\" id=\"cat33\">Offres d'emploi</option>\n        <option value=\"1\" style=\"background-color:#E6E6E6\" disabled=\"\" id=\"cat1\">-- VEHICULES --</option>\n        <option value=\"2\" id=\"cat2\">Voitures</option>\n        <option value=\"3\" id=\"cat3\">Motos</option>\n        <option value=\"4\" id=\"cat4\">Caravaning</option>\n        <option value=\"5\" id=\"cat5\">Utilitaires</option>\n        <option value=\"6\" id=\"cat6\">Equipement Auto</option>\n        <option value=\"44\" id=\"cat44\">Equipement Moto</option>\n        <option value=\"50\" id=\"cat50\">Equipement Caravaning</option>\n        <option value=\"7\" id=\"cat7\">Nautisme</option>\n        <option value=\"51\" id=\"cat51\">Equipement Nautisme</option>\n        <option value=\"8\" style=\"background-color:#E6E6E6\" disabled=\"\" id=\"cat8\">-- IMMOBILIER --</option>\n        <option value=\"9\" id=\"cat9\">Ventes immobilières</option>\n        <option value=\"10\" id=\"cat10\">Locations</option>\n        <option value=\"11\" id=\"cat11\">Colocations</option>\n        <option value=\"13\" id=\"cat13\">Bureaux &amp; Commerces</option>\n        <option value=\"66\" style=\"background-color:#E6E6E6\" disabled=\"\" id=\"cat66\">-- VACANCES --</option>\n        <option value=\"12\" id=\"cat12\">Locations &amp; Gîtes</option>\n        <option value=\"67\" id=\"cat67\">Chambres d'hôtes</option>\n        <option value=\"68\" id=\"cat68\">Campings</option>\n        <option value=\"69\" id=\"cat69\">Hôtels</option>\n        <option value=\"70\" id=\"cat70\">Hébergements insolites</option>\n        <option value=\"14\" style=\"background-color:#E6E6E6\" disabled=\"\" id=\"cat14\">-- MULTIMEDIA --</option>\n        <option value=\"15\" id=\"cat15\">Informatique</option>\n        <option value=\"43\" id=\"cat43\">Consoles &amp; Jeux vidéo</option>\n        <option value=\"16\" id=\"cat16\">Image &amp; Son</option>\n        <option value=\"17\" id=\"cat17\">Téléphonie</option>\n        <option value=\"39\" id=\"cat39\">Décoration</option>\n        <option value=\"53\" id=\"cat53\">Chaussures</option>\n        <option value=\"23\" id=\"cat23\">Equipement bébé</option>\n        <option value=\"54\" id=\"cat54\">Vêtements bébé</option>\n\n      </select>\n\n    </div>\n\n  </div>\n  <!-- second row ends -->\n\n\n  <div *ngIf=\"chooseCategoryAlert\">\n    <div class=\"alert alert-danger col-lg-8\" role=\"alert\">Please choose the category</div>\n  </div>\n\n\n  <div class=\"row\">\n\n    <input type=\"radio\" name=\"gender\" value=\"Particular\">\n    <label class=\"normal-text\">Particular</label>\n\n    <input type=\"radio\" name=\"gender\" value=\"Professional\">\n    <label class=\"normal-text\">Professional</label>\n\n\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"alert alert-warning col-lg-8\" role=\"alert\">\n      Si vous agissez à titre professionnel, vous devez créer un Compte professionnel. A défaut, en application de\n      l’article L 132-2 du Code de la consommation qui sanctionne les pratiques commerciales trompeuses, vous encourez\n      notamment une peine d’emprisonnement de 2 ans et une amende de 300 000 euros. Pour plus d'informations, consultez\n      vos droits et obligations.\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <label for=\"exampleFormControlSelect1\">Type</label>\n  </div>\n\n\n  <div class=\"row\">\n\n    <input type=\"radio\" name=\"gender\" value=\"Particular\">\n    <label class=\"normal-text\">Offers</label>\n\n    <input type=\"radio\" name=\"gender\" value=\"Professional\">\n    <label class=\"normal-text\">Demands</label>\n  </div>\n\n\n  <div class=\"row\">\n    <label for=\"exampleFormControlSelect1\">Title</label>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-lg-8\">\n      <textarea class=\"form-control\" aria-label=\"With textarea\" [(ngModel)]=\"title\"></textarea>\n    </div>\n  </div>\n\n  <div *ngIf=\"chooseTitleAlert\">\n    <div class=\"alert alert-danger col-lg-8\" role=\"alert\">Please choose the title</div>\n  </div>\n\n  <div class=\"row\">\n    <button class=\"darkButton\" (click)=\"validate()\">Validate</button>\n  </div>\n\n\n  <div class=\"row\" style=\"margin-top: 1%\">\n    <div class=\"row\">\n      <label class=\"normal-text\">Suggested keywords</label>\n    </div>\n    <div class=\"col-lg-8\">\n      <ng-container *ngFor=\"let tag of suggestionKeywords;let i = index\">\n        <button type=\"button\" class=\"btn btn-warning\" style=\"margin-top: 1%;\" (click)=\"addSuggestedTag(tag, i)\">\n          {{tag}} <span class=\"badge glyphicon glyphicon-remove\"></span>\n        </button>\n      </ng-container>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <label>Add keywords to promote your item</label>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-5\">\n      <input type=\"text\" class=\"form-control\" aria-label=\"\" (keyup.enter)=\"addTag($event)\">\n    </div>\n  </div>\n\n  <div class=\"row\" style=\"margin-top: 1%\">\n    <div class=\"col-lg-8\">\n      <ng-container *ngFor=\"let tag of tags\">\n        <button type=\"button\" class=\"btn btn-primary\" style=\"margin-top: 1%;\">\n          {{tag}} <span class=\"badge glyphicon glyphicon-remove\"></span>\n        </button>\n      </ng-container>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <label for=\"exampleFormControlSelect1\">Description</label>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-8\">\n      <textarea class=\"form-control\" aria-label=\"With textarea\" style=\"height: 100px\"></textarea>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <label for=\"exampleFormControlSelect1\">Price</label>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-5\">\n      <input type=\"text\" class=\"form-control\" aria-label=\"\" value=\"{{suggestionPriceRange[1]}}\" (keyup.enter)=\"getPriceSuggestion()\">\n    </div>\n  </div>\n\n\n  <!--<div class=\"row\">-->\n\n\n    <!--<div class=\"col-lg-5\">-->\n\n      <!--<input type=\"range\" min=\"{{priceRange[0]}}\" max=\"{{priceRange[4]}}\" value=\"{{selectedPriceInSlider}}\"-->\n             <!--class=\"slider\" #ref (change)=\"actOnSelectedPriceValue(ref.value)\">-->\n\n    <!--</div>-->\n\n    <!--<b>€ {{selectedPriceInSlider}}</b>-->\n\n  <!--</div>-->\n\n\n  <!--&lt;!&ndash; percent of getting  &ndash;&gt;-->\n  <!--<div class=\"row\" style=\"margin-top: 1%\">-->\n    <!--<div class=\"col-lg-8\">-->\n      <!--<div class=\"progress\">-->\n        <!--<div class=\"progress-bar progress-bar-info progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"20\"-->\n             <!--aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"this.percentageOfSelling + '%'\">-->\n          <!--<span class=\"sr-only\" style=\"position: inherit!important;\">{{this.percentageOfSelling}}% Possible</span>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n\n\n\n  <div class=\"row\">\n    <label for=\"exampleFormControlSelect1\">Photos:\n      <span class=\"badge badge-pill badge-light\">Une annonce avec photo est 7 fois plus consultée qu'une annonce sans photo</span>\n    </label>\n  </div>\n\n\n  <div class=\"row\">\n\n    <div style=\"display: inline-flex\">\n\n      <label class=\"btn-default\">\n        <input type=\"file\" (change)=\"selectImage($event)\">\n      </label>\n\n      <!--  button to upload-image  -->\n\n      <button class=\"darkButton\"\n              (click)=\"upload()\">Upload\n      </button>\n\n    </div>\n\n    <!-- image box, where all images exist -->\n\n    <div class=\"image-box\">\n\n      <div class=\"responsive\">\n        <div class=\"gallery\">\n          <img src={{this.image}} class=\"thumbnail\" alt=\"Trolltunga Norway\" width=\"300\" height=\"200\">\n          <div class=\"desc\">Add a description of the image here</div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <!-- send rest and validate -->\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/sell/sell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_SellService_sell_service__ = __webpack_require__("./src/app/Services/SellService/sell-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SellComponent = /** @class */ (function () {
    function SellComponent(_sellService) {
        this._sellService = _sellService;
        this.percentageOfSelling = 30;
        this.priceRange = [0, 10];
        this.selectedPriceInSlider = 50;
        this.chooseTitleAlert = false;
        this.chooseCategoryAlert = false;
        this.tags = [];
        this.suggestionKeywords = [];
        this.suggestionPriceRange = [];
    }
    SellComponent.prototype.ngOnInit = function () {
    };
    /**
     *
     * @param {number} selectedPrice
     */
    SellComponent.prototype.calculatePercentage = function (selectedPrice) {
        if (selectedPrice < this.suggestionPriceRange[0]) {
            this.percentageOfSelling = 100;
        }
        else if (selectedPrice < this.suggestionPriceRange[0]) {
            this.percentageOfSelling = 75;
        }
        else if (selectedPrice < this.suggestionPriceRange[0]) {
            this.percentageOfSelling = 50;
        }
        else if (selectedPrice < this.suggestionPriceRange[0]) {
            this.percentageOfSelling = 25;
        }
        else {
            this.percentageOfSelling = 1;
        }
    };
    /**
     *
     * @param {number} selectedPrice
     */
    SellComponent.prototype.actOnSelectedPriceValue = function (selectedPrice) {
        // set the value in slider
        this.selectedPriceInSlider = selectedPrice;
        // calculate the percentage
        this.calculatePercentage(selectedPrice);
    };
    /**
     *
     */
    SellComponent.prototype.getPriceSuggestion = function () {
        if (this.price != 0 && this.price != null) {
            if (this.price > 700) {
                this.percentageOfSelling = 30;
            }
            else if (this.price > 600) {
                this.percentageOfSelling = 45;
            }
            else if (this.price > 400) {
                this.percentageOfSelling = 75;
            }
            else if (this.price > 200) {
                this.percentageOfSelling = 100;
            }
        }
    };
    /**
     *
     * @param event
     */
    SellComponent.prototype.selectImage = function (event) {
        var _this = this;
        var file = event.target.files.item(0);
        if (file.type.match('image.*')) {
            if (event.target.files && event.target.files[0]) {
                var reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]); // read file as data url
                reader.onload = function (event) {
                    _this.image = event.target;
                };
            }
        }
        else {
            alert('invalid format!');
        }
    };
    /**
     *
     * @param tag
     */
    SellComponent.prototype.addSuggestedTag = function (tagValue, i) {
        var isAlreadyThere = false;
        this.tags.forEach(function (tag) {
            if (tag == tagValue) {
                isAlreadyThere = true;
            }
        });
        console.log("tagValue " + tagValue);
        if (tagValue != "" && isAlreadyThere == false) {
            // push the text
            this.tags.push(tagValue);
            // this.tags.splice(i);
        }
    };
    /**
     *
     * @param {string} tag
     */
    SellComponent.prototype.addTag = function (tag) {
        if (tag.target.value != "") {
            // push the text
            this.tags.push(tag.target.value);
            //clear the text
            tag.target.value = "";
        }
    };
    /**
     *
     * @param categoryId
     */
    SellComponent.prototype.setCategory = function (categoryId) {
        console.log("categoryId id " + categoryId);
        if (categoryId != "") {
            this.categoryId = categoryId;
        }
    };
    /**
     *
     */
    SellComponent.prototype.validate = function () {
        var _this = this;
        this.tags = [];
        // set the price
        // check all datas are entered.
        console.log("title and categoryId " + this.title +
            this.categoryId);
        if (this.categoryId != "" && this.categoryId != null && this.title != "" && this.title != null) {
            // send rest
            this._sellService.getTags(this.title, this.categoryId).subscribe(function (data) {
                _this.suggestionKeywords = data[0].keywords;
                _this.suggestionPriceRange = data[0].price_range;
                _this.price = data[0].price_range[1];
                _this.priceRange[0] = data[0].price_range[0];
                _this.priceRange[1] = data[0].price_range[1];
            });
            //set alert box view
            this.setAlertBoxView(false);
            console.log("yes");
        }
        else {
            console.log("no");
            if (this.title != "" && this.title != null) {
                this.chooseTitleAlert = true;
            }
            if (this.categoryId != "") {
                this.chooseCategoryAlert = true;
            }
            // alert in front end that it is not fulfilled.
            this.setAlertBoxView(true);
        }
    };
    /**
     *
     */
    SellComponent.prototype.setAlertBoxView = function (canShow) {
        this.chooseTitleAlert = canShow;
        this.chooseCategoryAlert = canShow;
    };
    SellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sell',
            template: __webpack_require__("./src/app/sell/sell.component.html"),
            styles: [__webpack_require__("./src/app/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_SellService_sell_service__["a" /* SellService */]])
    ], SellComponent);
    return SellComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDnEMtuItL48n5Iy7bFUocVQdKg6uIX2lk",
        authDomain: "hobbymatecentral.firebaseapp.com",
        databaseURL: "https://hobbymatecentral.firebaseio.com",
        projectId: "hobbymatecentral",
        storageBucket: "hobbymatecentral.appspot.com",
        messagingSenderId: "664234614690"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
// .then(() => {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/ngsw-worker.js') ;
//   }
// })
// .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map