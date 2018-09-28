webpackJsonp([30],{

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMenuListPageModule", function() { return PopupMenuListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup_menu__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopupMenuListPageModule = (function () {
    function PopupMenuListPageModule() {
    }
    PopupMenuListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__popup_menu__["a" /* PopupMenuListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__popup_menu__["a" /* PopupMenuListPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__popup_menu__["a" /* PopupMenuListPage */]
            ]
        })
    ], PopupMenuListPageModule);
    return PopupMenuListPageModule;
}());

//# sourceMappingURL=popup-menu.module.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupMenuListPage; });
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


var PopupMenuListPage = (function () {
    function PopupMenuListPage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.items = [];
        this.rootPage = PopupMenuListPage_1;
        this.items = [
            {
                title: 'Type One',
                page: 'PopupMenuOnePage'
            },
            {
                title: 'Type Two',
                page: 'PopupMenuTwoPage'
            },
        ];
    }
    PopupMenuListPage_1 = PopupMenuListPage;
    PopupMenuListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    PopupMenuListPage = PopupMenuListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-popup-menu',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/popup-menu/popup-menu.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Popup Menu</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n		<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      {{item.title}}\n    </button>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/popup-menu/popup-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */]])
    ], PopupMenuListPage);
    return PopupMenuListPage;
    var PopupMenuListPage_1;
}());

//# sourceMappingURL=popup-menu.js.map

/***/ })

});
//# sourceMappingURL=30.js.map