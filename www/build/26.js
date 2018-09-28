webpackJsonp([26],{

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughModalPageModule", function() { return WalkthroughModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__walkthrough_modal__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WalkthroughModalPageModule = (function () {
    function WalkthroughModalPageModule() {
    }
    WalkthroughModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__walkthrough_modal__["a" /* WalkthroughModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__walkthrough_modal__["a" /* WalkthroughModalPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__walkthrough_modal__["a" /* WalkthroughModalPage */]
            ]
        })
    ], WalkthroughModalPageModule);
    return WalkthroughModalPageModule;
}());

//# sourceMappingURL=walkthrough-modal.module.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkthroughModalPage; });
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


var WalkthroughModalPage = (function () {
    function WalkthroughModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.slides = [
            {
                title: 'Dream\'s Adventure',
                imageUrl: 'assets/img/slides/square.png',
                songs: 2,
            },
            {
                title: 'Really nice game',
                imageUrl: 'assets/img/slides/square-2.jpg',
                songs: 4,
            },
            {
                title: 'For the Weekend',
                imageUrl: 'assets/img/slides/square-3.jpg',
                songs: 4,
            },
        ];
    }
    WalkthroughModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    WalkthroughModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-walkthrough-modal',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/popup-modal/walkthrough-modal/walkthrough-modal.html"*/'<ion-content [style.background-color]="color" class="round">\n  <ion-slides pager class="round-top">\n    <ion-slide *ngFor="let slide of slides" class="text-center slider-item" [ngStyle]="{\'background-image\': \'url(\' + slide.imageUrl +\')\'}">\n      <div class="slide-text">\n        <h2>{{slide.title}}</h2>\n        <p>{{slide.songs}} songs</p>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <button ion-button full class="footer-button" (click)="dismiss()">Let\'s get started!</button>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/popup-modal/walkthrough-modal/walkthrough-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], WalkthroughModalPage);
    return WalkthroughModalPage;
}());

//# sourceMappingURL=walkthrough-modal.js.map

/***/ })

});
//# sourceMappingURL=26.js.map