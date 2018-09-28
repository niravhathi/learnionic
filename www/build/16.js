webpackJsonp([16],{

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideCustomPaginationPageModule", function() { return SlideCustomPaginationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide_custom_pagination__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideCustomPaginationPageModule = (function () {
    function SlideCustomPaginationPageModule() {
    }
    SlideCustomPaginationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__slide_custom_pagination__["a" /* SlideCustomPaginationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__slide_custom_pagination__["a" /* SlideCustomPaginationPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__slide_custom_pagination__["a" /* SlideCustomPaginationPage */]
            ]
        })
    ], SlideCustomPaginationPageModule);
    return SlideCustomPaginationPageModule;
}());

//# sourceMappingURL=slide-custom-pagination.module.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideCustomPaginationPage; });
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


var SlideCustomPaginationPage = (function () {
    function SlideCustomPaginationPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: 'Dream\'s Adventure',
                imageUrl: 'assets/img/lists/wishlist-1.jpg',
                songs: 2,
                private: false
            },
            {
                title: 'For the Weekend',
                imageUrl: 'assets/img/lists/wishlist-2.jpg',
                songs: 4,
                private: false
            },
            {
                title: 'Family Time',
                imageUrl: 'assets/img/lists/wishlist-3.jpg',
                songs: 5,
                private: true
            },
            {
                title: 'My Trip',
                imageUrl: 'assets/img/lists/wishlist-4.jpg',
                songs: 12,
                private: true
            }
        ];
    }
    SlideCustomPaginationPage.prototype.ngAfterViewInit = function () {
        this.sliderOne.paginationBulletRender = function (index, className) {
            return "<span class=\"custom-pagination " + className + ">" + (index + 1) + "</span>";
        };
        this.sliderTwo.paginationBulletRender = function (index, className) {
            return "<span class=\"custom-pagination-2 " + className + ">" + (index + 1) + "</span>";
        };
        this.sliderThree.paginationBulletRender = function (index, className) {
            return "<span class=\"custom-pagination-3 bullet-icon-" + (index + 1) + " " + className + "></span>";
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sliderOne'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], SlideCustomPaginationPage.prototype, "sliderOne", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sliderTwo'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], SlideCustomPaginationPage.prototype, "sliderTwo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sliderThree'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], SlideCustomPaginationPage.prototype, "sliderThree", void 0);
    SlideCustomPaginationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slide-custom-pagination',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/slide/slide-custom-pagination/slide-custom-pagination.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Custom Pagination</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content text-center>\n  <h3>Pagination numbers</h3>\n  <ion-slides #sliderOne pager (ionDidChange)="onSlideChanged()">\n    <ion-slide *ngFor="let slide of slides"\n               [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n      <h2>{{slide.title}}</h2>\n    </ion-slide>\n  </ion-slides>\n\n\n  <h3>Pagination numbers 2</h3>\n  <ion-slides #sliderTwo pager (ionDidChange)="onSlideChanged()">\n    <ion-slide *ngFor="let slide of slides"\n               [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n      <h2>{{slide.title}}</h2>\n    </ion-slide>\n  </ion-slides>\n\n\n  <h3>Pagination icons</h3>\n  <ion-slides #sliderThree pager (ionDidChange)="onSlideChanged()">\n    <ion-slide *ngFor="let slide of slides"\n               [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n      <h2>{{slide.title}}</h2>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/slide/slide-custom-pagination/slide-custom-pagination.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SlideCustomPaginationPage);
    return SlideCustomPaginationPage;
}());

//# sourceMappingURL=slide-custom-pagination.js.map

/***/ })

});
//# sourceMappingURL=16.js.map