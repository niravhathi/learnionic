webpackJsonp([5],{

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePageModule", function() { return TimelinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timeline__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TimelinePageModule = (function () {
    function TimelinePageModule() {
    }
    TimelinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__timeline__["a" /* TimelinePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__timeline__["a" /* TimelinePage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__timeline__["a" /* TimelinePage */]
            ]
        })
    ], TimelinePageModule);
    return TimelinePageModule;
}());

//# sourceMappingURL=timeline.module.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelinePage; });
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


var TimelinePage = (function () {
    function TimelinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            {
                title: 'Courgette daikon',
                content: "Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize\n                scallion green bean spinach cabbage j\u00EDcama bell pepper carrot onion corn plantain garbanzo.\n                Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize\n                chicory burdock tatsoi dulse radish wakame beetroot.",
                icon: 'calendar',
                time: { subtitle: '4/16/2013', title: '21:30' }
            },
            {
                title: 'Courgette daikon',
                content: "Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize\n                scallion green bean spinach cabbage j\u00EDcama bell pepper carrot onion corn plantain garbanzo.\n                Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize\n                chicory burdock tatsoi dulse radish wakame beetroot.",
                icon: 'calendar',
                time: { subtitle: 'January', title: '29' }
            },
            {
                title: 'Courgette daikon',
                content: "Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize\n                scallion green bean spinach cabbage j\u00EDcama bell pepper carrot onion corn plantain garbanzo.\n                Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize\n                chicory burdock tatsoi dulse radish wakame beetroot.",
                icon: 'calendar',
                time: { title: 'Short Text' }
            }
        ];
    }
    TimelinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimelinePage');
    };
    TimelinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-timeline',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/timeline/timeline.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>timeline</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <timeline endIcon="call">\n    <timeline-item *ngFor="let item of items">\n      <timeline-time [time]="item.time"></timeline-time>\n      <ion-icon [name]="item.icon"></ion-icon>\n      <ion-card>\n        <ion-card-header>\n          {{item.title}}\n        </ion-card-header>\n        <ion-card-content>\n          {{item.content}}\n        </ion-card-content>\n      </ion-card>\n    </timeline-item>\n\n  </timeline>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/timeline/timeline.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], TimelinePage);
    return TimelinePage;
}());

//# sourceMappingURL=timeline.js.map

/***/ })

});
//# sourceMappingURL=5.js.map