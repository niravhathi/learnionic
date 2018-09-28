webpackJsonp([46],{

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcertCardPageModule", function() { return ConcertCardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__concert_card__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConcertCardPageModule = (function () {
    function ConcertCardPageModule() {
    }
    ConcertCardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__concert_card__["a" /* ConcertCardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__concert_card__["a" /* ConcertCardPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__concert_card__["a" /* ConcertCardPage */]
            ]
        })
    ], ConcertCardPageModule);
    return ConcertCardPageModule;
}());

//# sourceMappingURL=concert-card.module.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConcertCardPage; });
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


var ConcertCardPage = (function () {
    function ConcertCardPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.concerts = [
            {
                name: 'yeezy world tour 2017',
                artistName: 'Kanye West',
                artistImage: 'assets/img/misc/kanye_west.png',
                color: '#f73e53'
            },
            {
                name: 'yeezy world tour 2017',
                artistName: 'Kanye West',
                artistImage: 'assets/img/misc/kanye_west.png',
                color: '#0be3ff'
            },
            {
                name: 'yeezy world tour 2017',
                artistName: 'Kanye West',
                artistImage: 'assets/img/misc/kanye_west.png',
                color: '#fdd427'
            },
        ];
    }
    ConcertCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-concert-card',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/miscellaneous/concert-card/concert-card.html"*/'<ion-header>\n  <ion-navbar transparent>\n    <ion-title>Upcoming events</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="md-heart-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <section margin-top margin-bottom>\n    <ion-slides autoplay="2000">\n      <ion-slide *ngFor="let concert of concerts">\n        <ion-card>\n          <div class="the-header">\n            <div class="header-text">\n              <h1>{{concert.artistName}}</h1>\n              <p>{{concert.name}}</p>\n            </div>\n            <div class="background" [style.background]="concert.color">\n              <img [src]="concert.artistImage"/>\n            </div>\n            <button ion-fab>\n              <ion-icon name="musical-notes"></ion-icon>\n            </button>\n          </div>\n          <div class="the-content" padding>\n            <h2>POWER PASS</h2>\n            <div padding>\n                <small>\n                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n                </small>\n            </div>\n            <h2>SOMETHING ELSE</h2>\n            <div padding>\n                <small>\n                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. dicta sunt explicabo.\n                </small>\n            </div>\n            <button ion-button block [style.background]="concert.color">Purchase</button>\n          </div>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </section>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/miscellaneous/concert-card/concert-card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], ConcertCardPage);
    return ConcertCardPage;
}());

//# sourceMappingURL=concert-card.js.map

/***/ })

});
//# sourceMappingURL=46.js.map