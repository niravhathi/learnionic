webpackJsonp([28],{

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupModalPageModule", function() { return PopupModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup_modal__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopupModalPageModule = (function () {
    function PopupModalPageModule() {
    }
    PopupModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__popup_modal__["a" /* PopupModalsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__popup_modal__["a" /* PopupModalsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__popup_modal__["a" /* PopupModalsPage */]
            ]
        })
    ], PopupModalPageModule);
    return PopupModalPageModule;
}());

//# sourceMappingURL=popup-modal.module.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupModalsPage; });
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


var PopupModalsPage = (function () {
    function PopupModalsPage(navCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
    }
    PopupModalsPage.prototype.openHintModal = function () {
        this.openModal('HintModalPage');
    };
    PopupModalsPage.prototype.openWalkthroughModal = function () {
        this.openModal('WalkthroughModalPage');
    };
    PopupModalsPage.prototype.openSignupModal = function () {
        this.openModal('SignupModalPage');
    };
    PopupModalsPage.prototype.openModal = function (pageName) {
        this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' })
            .present();
    };
    PopupModalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-popup-modal',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/popup-modal/popup-modal.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Popup Modal</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div padding>\n        <button ion-button block (click)="openHintModal()">Hint Modal</button>\n        <button ion-button color="danger" block (click)="openSignupModal()">Signup with slider</button>\n        <button ion-button color="secondary" block (click)="openWalkthroughModal()">Walkthrough modal</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/popup-modal/popup-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PopupModalsPage);
    return PopupModalsPage;
}());

//# sourceMappingURL=popup-modal.js.map

/***/ })

});
//# sourceMappingURL=28.js.map