webpackJsonp([40],{

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousListPageModule", function() { return MiscellaneousListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__miscellaneous__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MiscellaneousListPageModule = (function () {
    function MiscellaneousListPageModule() {
    }
    MiscellaneousListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__miscellaneous__["a" /* MiscellaneousListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__miscellaneous__["a" /* MiscellaneousListPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__miscellaneous__["a" /* MiscellaneousListPage */]
            ]
        })
    ], MiscellaneousListPageModule);
    return MiscellaneousListPageModule;
}());

//# sourceMappingURL=miscellaneous.module.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiscellaneousListPage; });
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


var MiscellaneousListPage = (function () {
    function MiscellaneousListPage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.items = [
            {
                title: 'Autosizing Textarea',
                page: 'AutosizingTextarea'
            },
            {
                title: 'Blog Post',
                page: 'BlogPostPage'
            },
            {
                title: 'Charts',
                page: 'ChartsPage'
            },
            {
                title: 'Chat',
                page: 'ChatsPage'
            },
            {
                title: 'Concert Card',
                page: 'ConcertCardPage'
            },
            {
                title: 'Countdown',
                page: 'CountdownPage'
            },
            {
                title: 'Expandable Header',
                page: 'ExpandableHeaderPage'
            },
            {
                title: 'Flash Card',
                page: 'FlashCardPage'
            },
            {
                title: 'Pinterest Masonry Cards',
                page: 'MasonryCardsPage'
            },
            {
                title: 'Real Estate Listing',
                page: 'RealEstateListingPage'
            },
            {
                title: 'Testimonials',
                page: 'TestimonialsPage'
            },
            {
                title: 'Tinder Cards',
                page: 'TinderCardsPage'
            },
            {
                title: 'Item Ribbon',
                page: 'ItemRibbonPage'
            },
        ];
    }
    MiscellaneousListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    MiscellaneousListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-miscellaneous',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/miscellaneous/miscellaneous.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Miscellaneous</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<ion-list>\n		<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n            {{item.title}}\n        </button>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/miscellaneous/miscellaneous.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */]])
    ], MiscellaneousListPage);
    return MiscellaneousListPage;
}());

//# sourceMappingURL=miscellaneous.js.map

/***/ })

});
//# sourceMappingURL=40.js.map