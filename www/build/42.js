webpackJsonp([42],{

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRibbonPageModule", function() { return ItemRibbonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_ribbon__ = __webpack_require__(585);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemRibbonPageModule = (function () {
    function ItemRibbonPageModule() {
    }
    ItemRibbonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_ribbon__["a" /* ItemRibbonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_ribbon__["a" /* ItemRibbonPage */]),
            ],
        })
    ], ItemRibbonPageModule);
    return ItemRibbonPageModule;
}());

//# sourceMappingURL=item-ribbon.module.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemRibbonPage; });
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


var ItemRibbonPage = (function () {
    function ItemRibbonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.thumbnails = [
            { title: 'Awesome Shoes - $9', image: 'assets/img/ribbon/shoes.jpg', ribbonText: 'sale', class: 'sale' },
            { title: 'Awesome Team', image: 'assets/img/ribbon/cruzeiro.jpg', ribbonText: 'awesome', class: 'cruzeiro' },
            { title: 'Bad team', image: 'assets/img/ribbon/atletico.jpg', ribbonText: 'bad', class: 'atletico' }
        ];
    }
    ItemRibbonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-item-ribbon',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/miscellaneous/item-ribbon/item-ribbon.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Item Ribbon</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of thumbnails">\n      <ion-thumbnail item-left class="item-ribbon">\n        <span class="ribbon {{ item.class }}">\n          <span>{{ item.ribbonText }}</span>\n        </span>\n        <img [src]="item.image">\n      </ion-thumbnail>\n      <div>\n        <p>{{ item.title }}</p>\n      </div>\n    </ion-item>\n\n    <ion-item class="item-ribbon">\n        <span class="ribbon cruzeiro">\n          <span>Ionic</span>\n        </span>\n      <ion-thumbnail item-left>\n        <img src="assets/img/ribbon/ionic.png" alt="">\n      </ion-thumbnail>\n      <div>\n        <p>Awesome framework</p>\n      </div>\n    </ion-item>\n\n    <ion-item class="item-ribbon">\n        <span class="ribbon javascript">\n          <span>JS</span>\n        </span>\n      <ion-thumbnail item-left>\n        <img src="assets/img/ribbon/js.png" alt="">\n      </ion-thumbnail>\n      <div>\n        <p>Awesome language</p>\n      </div>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/miscellaneous/item-ribbon/item-ribbon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ItemRibbonPage);
    return ItemRibbonPage;
}());

//# sourceMappingURL=item-ribbon.js.map

/***/ })

});
//# sourceMappingURL=42.js.map