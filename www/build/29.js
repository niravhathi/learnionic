webpackJsonp([29],{

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintModalPageModule", function() { return HintModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hint_modal__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HintModalPageModule = (function () {
    function HintModalPageModule() {
    }
    HintModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__hint_modal__["a" /* HintModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__hint_modal__["a" /* HintModalPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__hint_modal__["a" /* HintModalPage */]
            ]
        })
    ], HintModalPageModule);
    return HintModalPageModule;
}());

//# sourceMappingURL=hint-modal.module.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HintModalPage; });
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


var HintModalPage = (function () {
    function HintModalPage(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.myParam = params.get('myParam');
    }
    HintModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    HintModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hint-modal',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/popup-modal/hint-modal/hint-modal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Tip for you</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name=\'bulb\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <h1>Modal</h1>\n  <h3>This modal is pretty nice.</h3>\n  <p>EXAMPLES</p>\n  <ul>\n    <li> First thing to do\n    </li>\n    <li> Second thing to do\n    </li>\n    <li> Third thing to do\n    </li>\n  </ul>\n  <p>Selfies normcore four dollar toast four loko listicle artisan. Hoodie Marfa authentic, wayfarers church-key tofu Banksy\n    pop-up Kickstarter Brooklyn heirloom swag synth. Echo Park cray synth mixtape. Tofu gastropub squid readymade, trust\n    fund Wes Anderson DIY PBR 8-bit try-hard +1 Shoreditch lo-fi tote bag.</p>\n  <p>\n    <img src="https://unsplash.it/600/300" alt="" />\n  </p>\n  <p>Mumblecore cred selfies fingerstache. Tousled skateboard plaid lo-fi shabby chic salvia, swag Odd Future Etsy art party\n    Austin cronut. Crucifix whatever Pinterest food truck, pickled viral cray 90\'s DIY chambray keffiyeh biodiesel Vice blog.\n    Cred meh yr tofu.</p>\n  <p>Mumblecore cred selfies fingerstache. Tousled skateboard plaid lo-fi shabby chic salvia, swag Odd Future Etsy art party\n    Austin cronut. Crucifix whatever Pinterest food truck, pickled viral cray 90\'s DIY chambray keffiyeh biodiesel Vice blog.\n    Cred meh yr tofu.</p>\n</ion-content>\n<ion-footer>\n  <button ion-button full color="danger" (click)="dismiss()">Okay\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/popup-modal/hint-modal/hint-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], HintModalPage);
    return HintModalPage;
}());

//# sourceMappingURL=hint-modal.js.map

/***/ })

});
//# sourceMappingURL=29.js.map