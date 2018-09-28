webpackJsonp([63],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardListPageModule", function() { return CardListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardListPageModule = (function () {
    function CardListPageModule() {
    }
    CardListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__card__["a" /* CardsListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__card__["a" /* CardsListPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__card__["a" /* CardsListPage */]
            ]
        })
    ], CardListPageModule);
    return CardListPageModule;
}());

//# sourceMappingURL=card.module.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsListPage; });
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


var CardsListPage = (function () {
    function CardsListPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = 'CardsListPage';
        this.items = [
            {
                title: 'Cards with Background',
                page: 'CardBackgroundPage'
            },
            {
                title: 'Cards with Image',
                page: 'CardImagePage'
            },
            {
                title: 'Social Cards',
                page: 'CardSocialPage'
            },
            {
                title: 'Cards with Map',
                page: 'CardMapPage'
            },
            {
                title: 'Cards with Badge',
                page: 'CardBadgePage'
            },
        ];
    }
    CardsListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    CardsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-card',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/ionic-official-components/card/card.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profiles</ion-title>\n  </ion-navbar>\n</ion-header>\n<!--<ion-menu [content]="profilecontent" id="menu-profile">\n\n	<ion-content>\n		<ion-list>\n			<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n        {{item.title}}\n      </button>\n		</ion-list>\n	</ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="root" #profilecontent swipeBackEnabled="false"></ion-nav>-->\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      {{item.title}}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/ionic-official-components/card/card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], CardsListPage);
    return CardsListPage;
}());

//# sourceMappingURL=card.js.map

/***/ })

});
//# sourceMappingURL=63.js.map