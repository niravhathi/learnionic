webpackJsonp([27],{

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModalPageModule", function() { return SignupModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_modal__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupModalPageModule = (function () {
    function SignupModalPageModule() {
    }
    SignupModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__signup_modal__["a" /* SignupModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__signup_modal__["a" /* SignupModalPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__signup_modal__["a" /* SignupModalPage */]
            ]
        })
    ], SignupModalPageModule);
    return SignupModalPageModule;
}());

//# sourceMappingURL=signup-modal.module.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupModalPage; });
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


var SignupModalPage = (function () {
    function SignupModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.slides = [
            {
                id: 1,
                imageUrl: 'assets/img/slides/square.png',
            },
            {
                id: 2,
                imageUrl: 'assets/img/slides/square-2.jpg',
            },
            {
                id: 3,
                imageUrl: 'assets/img/slides/square-3.jpg',
            },
        ];
    }
    SignupModalPage.prototype.signup = function () {
        this.viewCtrl.dismiss();
    };
    SignupModalPage.prototype.login = function () {
        this.viewCtrl.dismiss();
    };
    SignupModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SignupModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup-modal',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/popup-modal/signup-modal/signup-modal.html"*/'<ion-content>\n  <ion-slides pager autoplay="2500" class="round">\n    <ion-slide *ngFor="let slide of slides" class="text-center slider-item" [ngStyle]="{\'background-image\': \'url(\' + slide.imageUrl +\')\'}">\n    </ion-slide>\n  </ion-slides>\n  <ion-row class="align-center" style="margin-left:10px">\n    <p>Sign up now to get the most out of this app!</p>\n  </ion-row>\n  <ion-row class="align-center">\n    <ion-col>\n      <button ion-button full (click)="signup()">\n            Sign Up\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row class="align-center">\n    <ion-col col-6>\n      <button ion-button full color="secondary" (click)="login()">\n            Log in\n      </button>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button full color="danger" (click)="dismiss()">\n            Sign up Later\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/popup-modal/signup-modal/signup-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], SignupModalPage);
    return SignupModalPage;
}());

//# sourceMappingURL=signup-modal.js.map

/***/ })

});
//# sourceMappingURL=27.js.map