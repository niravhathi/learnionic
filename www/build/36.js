webpackJsonp([36],{

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalNavPageModule", function() { return ModalNavPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_nav__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalNavPageModule = (function () {
    function ModalNavPageModule() {
    }
    ModalNavPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__modal_nav__["a" /* ModalNavPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__modal_nav__["a" /* ModalNavPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__modal_nav__["a" /* ModalNavPage */]
            ]
        })
    ], ModalNavPageModule);
    return ModalNavPageModule;
}());

//# sourceMappingURL=modal-nav.module.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalNavPage; });
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


var ModalNavPage = (function () {
    function ModalNavPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalParams = {};
    }
    ModalNavPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalNavPage');
        this.modalPage = this.navParams.get('page');
    };
    ModalNavPage.prototype.dismissModal = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ModalNavPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-nav',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/modal-with-navigation/modal-nav/modal-nav.html"*/'<ion-nav [root]="modalPage" [(rootParams)]="modalParams" #content></ion-nav>'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/modal-with-navigation/modal-nav/modal-nav.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], ModalNavPage);
    return ModalNavPage;
}());

//# sourceMappingURL=modal-nav.js.map

/***/ })

});
//# sourceMappingURL=36.js.map