webpackJsonp([39],{

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateListingPageModule", function() { return RealEstateListingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__real_estate_listing__ = __webpack_require__(588);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RealEstateListingPageModule = (function () {
    function RealEstateListingPageModule() {
    }
    RealEstateListingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__real_estate_listing__["a" /* RealEstateListingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__real_estate_listing__["a" /* RealEstateListingPage */]),
                __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__real_estate_listing__["a" /* RealEstateListingPage */]
            ]
        })
    ], RealEstateListingPageModule);
    return RealEstateListingPageModule;
}());

//# sourceMappingURL=real-estate-listing.module.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealEstateListingPage; });
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


var RealEstateListingPage = (function () {
    function RealEstateListingPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.estateProperty = {
            name: 'Pretty house',
            description: "It\u2019s a 2 bedroom, 2 bathroom laneway house that also has a spacious study off the upstairs landing.\n                  Sporting modern finishes and some cute touches like wall niches and bamboo accents,\n                  this laneway house is a great example of what can be built on most of Vancouver\u2019s standard 33 x 122\n                  foot lots.",
            price: '850000',
            image: 'https://www.smallworks.ca/wp-content/uploads/exterior11.jpg',
            style: 'Modern Interior',
            size: '33\' Lot',
            features: [
                {
                    icon: 'paw',
                    title: 'Pet Friendly'
                },
                {
                    icon: 'bicycle',
                    title: 'Bike Stations'
                },
                {
                    icon: 'rose',
                    title: 'Beautiful Garden'
                }
            ]
        };
    }
    RealEstateListingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-real-estate-listing',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/miscellaneous/real-estate-listing/real-estate-listing.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>\n      {{estateProperty.name}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen elestic-header>\n  <section class="housing-image"\n           [ngStyle]="{ \'background-image\': \'url(\' + estateProperty.image + \')\'}">\n    <section class="housing-banner" padding>\n      <span class="housing-title">{{estateProperty.name}}</span>\n      <span class="price">{{estateProperty.price | currency:\'USD\' }}</span>\n    </section>\n  </section>\n  <section class="main-content">\n    <ion-grid class="main-features">\n      <ion-row>\n        <ion-col text-center *ngFor="let feature of estateProperty.features">\n          <ion-icon [name]="feature.icon"></ion-icon>\n          <span class="item-block">{{feature.title}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid class="listing-details">\n      <ion-row>\n        <p margin-left margin-right no-margin-top style="text-align: justify">\n          {{estateProperty.description}}\n        </p>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-icon name="home"></ion-icon>{{estateProperty.style}}\n        </ion-col>\n        <ion-col>\n          <ion-icon name="pin"></ion-icon>{{estateProperty.size}}\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor="let a of [1,1,1,1,1,1,1,1,1,1]">\n        <ion-col>\n          info here\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n</ion-content>\n<ion-footer>\n  <button ion-button large full no-margin color="danger" >\n    get in touch now\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/miscellaneous/real-estate-listing/real-estate-listing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], RealEstateListingPage);
    return RealEstateListingPage;
}());

//# sourceMappingURL=real-estate-listing.js.map

/***/ })

});
//# sourceMappingURL=39.js.map