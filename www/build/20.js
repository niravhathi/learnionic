webpackJsonp([20],{

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileListPageModule", function() { return ProfileListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileListPageModule = (function () {
    function ProfileListPageModule() {
    }
    ProfileListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__profile__["a" /* ProfileListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__profile__["a" /* ProfileListPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__profile__["a" /* ProfileListPage */]
            ]
        })
    ], ProfileListPageModule);
    return ProfileListPageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileListPage; });
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


var ProfileListPage = (function () {
    function ProfileListPage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.rootPage = 'ProfileListPage';
        this.menu.enable(true, 'menu-profile');
        this.items = [
            {
                title: 'Type One',
                page: 'ProfileOnePage'
            },
            // {
            //   title: 'Type Two',
            //   page: ProfileTwoPage
            // },
            {
                title: 'Type Three',
                page: 'ProfileThreePage'
            },
            {
                title: 'Type Four',
                page: 'ProfileFourPage'
            },
            {
                title: 'Type Five',
                page: 'ProfileFivePage'
            },
            {
                title: 'Profile Settings',
                page: 'ProfileSettingsPage'
            },
        ];
    }
    ProfileListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    ProfileListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/profile/profile.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Profiles</ion-title>\n	</ion-navbar>\n</ion-header>\n<!--<ion-menu [content]="profilecontent" id="menu-profile">\n\n	<ion-content>\n		<ion-list>\n			<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n        {{item.title}}\n      </button>\n		</ion-list>\n	</ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="root" #profilecontent swipeBackEnabled="false"></ion-nav>-->\n\n<ion-content>\n	<ion-list>\n		<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      {{item.title}}\n    </button>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */]])
    ], ProfileListPage);
    return ProfileListPage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=20.js.map