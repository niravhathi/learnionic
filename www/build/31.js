webpackJsonp([31],{

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMenuTwoPageModule", function() { return PopupMenuTwoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popup_menu_two__ = __webpack_require__(597);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopupMenuTwoPageModule = (function () {
    function PopupMenuTwoPageModule() {
    }
    PopupMenuTwoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popup_menu_two__["a" /* PopupMenuTwoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popup_menu_two__["a" /* PopupMenuTwoPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__popup_menu_two__["a" /* PopupMenuTwoPage */]
            ]
        })
    ], PopupMenuTwoPageModule);
    return PopupMenuTwoPageModule;
}());

//# sourceMappingURL=popup-menu-two.module.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupMenuTwoPage; });
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


var PopupMenuTwoPage = (function () {
    function PopupMenuTwoPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.openMenu = false;
    }
    PopupMenuTwoPage.prototype.togglePopupMenu = function () {
        return this.openMenu = !this.openMenu;
    };
    PopupMenuTwoPage.prototype.goToAccount = function () {
        alert('Account clicked.');
        this.togglePopupMenu();
    };
    PopupMenuTwoPage.prototype.goToHome = function () {
        alert('Home clicked.');
        this.togglePopupMenu();
    };
    PopupMenuTwoPage.prototype.goToCups = function () {
        alert('Cups clicked.');
        this.togglePopupMenu();
    };
    PopupMenuTwoPage.prototype.goToLeaderboard = function () {
        alert('Leaderboard clicked.');
        this.togglePopupMenu();
    };
    PopupMenuTwoPage.prototype.goToHelp = function () {
        alert('Help clicked.');
        this.togglePopupMenu();
    };
    PopupMenuTwoPage.prototype.goToShop = function () {
        alert('Shop clicked.');
        this.togglePopupMenu();
    };
    PopupMenuTwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-popup-menu-two',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/popup-menu/popup-menu-two/popup-menu-two.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Popup Menu Two</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="popup-menu">\n		<div class="popup-menu-overlay" [ngClass]="{\'in\': openMenu}" (click)="togglePopupMenu()"></div>\n		<div class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu}"></div>\n		<div class="popup-menu-panel" [ngClass]="{\'in\': openMenu}">\n			<div class="popup-menu-item" (click)="goToHome()">\n				<ion-icon name="home"></ion-icon>\n				<ion-badge>25</ion-badge>\n				<span>HOME</span>\n			</div>\n			<div class="popup-menu-item" (click)="goToCups()">\n				<ion-icon name="trophy"></ion-icon>\n				<span>CUPS</span>\n			</div>\n			<div class="popup-menu-item" (click)="goToLeaderboard()">\n				<ion-icon name="podium"></ion-icon>\n				<ion-badge>10</ion-badge>\n				<span>LEADERBOARD</span>\n			</div>\n			<div class="popup-menu-item" (click)="goToHelp()">\n				<ion-icon name="help"></ion-icon>\n				<span>HELP</span>\n			</div>\n			<div class="popup-menu-item" (click)="goToAccount()">\n				<ion-icon name="person"></ion-icon>\n				<ion-badge>5</ion-badge>\n				<span>ACCOUNT</span>\n			</div>\n			<div class="popup-menu-item" (click)="goToShop()">\n				<ion-icon name="cart"></ion-icon>\n				<ion-badge>25</ion-badge>\n				<span>SHOP</span>\n			</div>\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/popup-menu/popup-menu-two/popup-menu-two.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], PopupMenuTwoPage);
    return PopupMenuTwoPage;
}());

//# sourceMappingURL=popup-menu-two.js.map

/***/ })

});
//# sourceMappingURL=31.js.map