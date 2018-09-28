webpackJsonp([62],{

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoListPageModule", function() { return CryptoListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crypto_list__ = __webpack_require__(561);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CryptoListPageModule = (function () {
    function CryptoListPageModule() {
    }
    CryptoListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__crypto_list__["a" /* CryptoListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__crypto_list__["a" /* CryptoListPage */])
            ],
        })
    ], CryptoListPageModule);
    return CryptoListPageModule;
}());

//# sourceMappingURL=crypto-list.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CryptoListPage = (function () {
    function CryptoListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [
            {
                id: 'bitcoin',
                name: 'Bitcoin',
                symbol: 'btc',
                rank: '1',
                price_usd: '13208.8',
                percent_change_1h: '1.54'
            },
            {
                id: 'ethereum',
                name: 'Ethereum',
                symbol: 'eth',
                rank: '2',
                price_usd: '658.926',
                percent_change_1h: '2.42'
            },
            {
                id: 'bitcoin-cash',
                name: 'Bitcoin Cash',
                symbol: 'bch',
                rank: '3',
                price_usd: '2758.51',
                percent_change_1h: '2.65'
            },
            {
                id: 'ripple',
                name: 'Ripple',
                symbol: 'xrp',
                rank: '4',
                price_usd: '1.01963',
                percent_change_1h: '0.98'
            },
            {
                id: 'litecoin',
                name: 'Litecoin',
                symbol: 'ltc',
                rank: '5',
                price_usd: '263.913',
                percent_change_1h: '2.21'
            }
        ];
    }
    CryptoListPage.prototype.precision = function (n, m) {
        return parseFloat(n).toFixed(m);
    };
    CryptoListPage.prototype.evolution = function (n) {
        return n > 0
            ? '<span>' + parseFloat(n).toFixed(2) + '&nbsp;<i class="fa fa-caret-up"></i></span>'
            : '<span class="red">' + parseFloat(n).toFixed(2) + '&nbsp;<i class="fa fa-caret-down"></i></span>';
    };
    CryptoListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-crypto-list',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/list/crypto-list/crypto-list.html"*/'<ion-content class="page-background transparent-header">\n  <ion-header>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n  <div class="welcome-header">\n    <div class="content">\n      <div class="title">Crypto Currencies</div>\n      <div class="subtitle">Find The latest info about Crypto currencies</div>\n    </div>\n    <button ion-fab color="dark" class="refresh"><ion-icon name="md-refresh"></ion-icon></button>\n  </div>\n  <div class="body" padding>\n    <div class="currencies">\n      <ion-row class="currency" *ngFor="let d of data">\n        <ion-col class="image">\n          <img src="{{\'assets/img/currencies/\'+d.symbol+\'.png\'}}" alt="">\n        </ion-col>\n        <ion-col col-4 class="text">\n          <p class="rank">Rank {{d.rank}}</p>\n          <p class="name">{{d.name}}</p>\n        </ion-col>\n        <ion-col col-4 class="text">\n          <p class="usd">{{ precision(d.price_usd,1) }} $</p>\n          <p class="evolution" [innerHtml]="evolution(d.percent_change_1h)"></p>\n        </ion-col>\n        <ion-col col-1>\n          <span class="indicator"><ion-icon icon="md-arrow-dropright"></ion-icon></span>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/list/crypto-list/crypto-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], CryptoListPage);
    return CryptoListPage;
}());

//# sourceMappingURL=crypto-list.js.map

/***/ })

});
//# sourceMappingURL=62.js.map