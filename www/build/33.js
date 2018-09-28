webpackJsonp([33],{

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupFabPageModule", function() { return PopupFabPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popup_fab__ = __webpack_require__(594);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopupFabPageModule = (function () {
    function PopupFabPageModule() {
    }
    PopupFabPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popup_fab__["a" /* PopupFabPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popup_fab__["a" /* PopupFabPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__popup_fab__["a" /* PopupFabPage */]
            ]
        })
    ], PopupFabPageModule);
    return PopupFabPageModule;
}());

//# sourceMappingURL=popup-fab.module.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupFabPage; });
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


var PopupFabPage = (function () {
    function PopupFabPage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.showIcon = true;
        this.preload = true;
    }
    PopupFabPage.prototype.expand = function () {
        var _this = this;
        this.expanded = true;
        this.contracted = !this.expanded;
        this.showIcon = false;
        setTimeout(function () {
            var modal = _this.modalCtrl.create('PopupFabModalPage');
            modal.onDidDismiss(function (data) {
                _this.expanded = false;
                _this.contracted = !_this.expanded;
                setTimeout(function () { return _this.showIcon = true; }, 330);
            });
            modal.present();
        }, 200);
    };
    PopupFabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-popup-fab',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/popup-fab/popup-fab.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Popup Fab</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card padding>\n    <img src="assets/img/lists/wishlist-4.jpg">\n    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>\n    <h4>Let\'s take a look</h4>\n  </ion-card>\n  <ion-fab right bottom middle>\n    <button class="pop-in"\n            [ngClass]="{ \'expand\' : expanded, \'contract\': contracted }"\n            ion-fab mini\n            (click)="expand()">\n      <ion-icon [hidden]="!showIcon" name="ios-arrow-forward"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/popup-fab/popup-fab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], PopupFabPage);
    return PopupFabPage;
}());

//# sourceMappingURL=popup-fab.js.map

/***/ })

});
//# sourceMappingURL=33.js.map