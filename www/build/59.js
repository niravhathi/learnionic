webpackJsonp([59],{

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsListPageModule", function() { return SettingsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsListPageModule = (function () {
    function SettingsListPageModule() {
    }
    SettingsListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* SettingsListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__settings__["a" /* SettingsListPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* SettingsListPage */]
            ]
        })
    ], SettingsListPageModule);
    return SettingsListPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsListPage; });
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


var SettingsListPage = (function () {
    function SettingsListPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/list/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Settings List</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      Settings\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name="plane" item-start color="danger"></ion-icon>\n      <ion-label>Airplane Mode</ion-label>\n      <ion-toggle color="secondary"></ion-toggle>\n    </ion-item>\n    <button ion-item>\n      <ion-icon name="wifi" item-start color="primary"></ion-icon>\n      <ion-label>Wi-Fi</ion-label>\n      <ion-note item-end>The Interwebz</ion-note>\n    </button>\n    <button ion-item>\n      <ion-icon name="bluetooth" item-start color="primary"></ion-icon>\n      <ion-label>Bluetooth</ion-label>\n      <ion-note item-end>Off</ion-note>\n    </button>\n    <button ion-item>\n      <ion-icon name="call" item-start color="secondary"></ion-icon>\n      <ion-label>Cellular</ion-label>\n    </button>\n    <button ion-item>\n      <ion-icon name="link" item-start color="secondary"></ion-icon>\n      <ion-label>Personal Hotspot</ion-label>\n      <ion-note item-end>Off</ion-note>\n    </button>\n  </ion-list>\n  <ion-list radio-group>\n    <ion-list-header>\n      Silence Phone\n    </ion-list-header>\n    <ion-item>\n      <ion-label color="dark">Always</ion-label>\n      <ion-radio value="always" checked></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark">Only while phone is locked</ion-label>\n      <ion-radio value="locked"></ion-radio>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Apps Installed\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start color="primary"></ion-icon>\n      <ion-label>Ionic View</ion-label>\n      <button ion-button outline item-end>Uninstall</button>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="brush" item-start color="primary"></ion-icon>\n      <ion-label>Ionic Creator</ion-label>\n      <button ion-button outline item-end>Uninstall</button>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="logo-octocat" item-start color="dark"></ion-icon>\n      <ion-label>Hubstruck</ion-label>\n      <button ion-button outline item-end>Uninstall</button>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="paw" item-start color="danger"></ion-icon>\n      <ion-label>Barkpark</ion-label>\n      <button ion-button outline item-end>Uninstall</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/list/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SettingsListPage);
    return SettingsListPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=59.js.map