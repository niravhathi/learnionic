webpackJsonp([52],{

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSliderPageModule", function() { return LoginSliderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_slider__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginSliderPageModule = (function () {
    function LoginSliderPageModule() {
    }
    LoginSliderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__login_slider__["a" /* LoginSliderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__login_slider__["a" /* LoginSliderPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__login_slider__["a" /* LoginSliderPage */]
            ]
        })
    ], LoginSliderPageModule);
    return LoginSliderPageModule;
}());

//# sourceMappingURL=login-slider.module.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSliderPage; });
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
// import { FormBuilder, FormControl, Validator } from '@angular/forms';


var LoginSliderPage = (function () {
    function LoginSliderPage(loadingCtrl, alertCtrl, app) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.backgroundImage = 'assets/img/background/background-6.jpg';
    }
    LoginSliderPage.prototype.goToLogin = function () {
        this.slider.slideTo(1);
    };
    LoginSliderPage.prototype.goToSignup = function () {
        this.slider.slideTo(2);
    };
    LoginSliderPage.prototype.slideNext = function () {
        this.innerSlider.slideNext();
    };
    LoginSliderPage.prototype.slidePrevious = function () {
        this.innerSlider.slidePrev();
    };
    LoginSliderPage.prototype.presentLoading = function (message) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            duration: 500
        });
        loading.onDidDismiss(function () {
            var alert = _this.alertCtrl.create({
                title: 'Success',
                subTitle: message,
                buttons: ['Dismiss']
            });
            alert.present();
        });
        loading.present();
    };
    LoginSliderPage.prototype.login = function () {
        this.presentLoading('Thanks for signing up!');
        // this.navCtrl.push(HomePage);
    };
    LoginSliderPage.prototype.signup = function () {
        this.presentLoading('Thanks for signing up!');
        // this.navCtrl.push(HomePage);
    };
    LoginSliderPage.prototype.resetPassword = function () {
        this.presentLoading('An e-mail was sent with your new password.');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], LoginSliderPage.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('innerSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], LoginSliderPage.prototype, "innerSlider", void 0);
    LoginSliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-slider',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/login/login-slider/login-slider.html"*/'<ion-content class="transparent-header" [ngStyle]="{\'background-image\': \'url(\' + backgroundImage +\')\'}">\n  <ion-header>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n  <ion-slides #slider class="content-slider" direction="vertical">\n    <ion-slide class="swiper-no-swiping">\n      <div padding>\n        <img class="logo" src="assets/img/logo/logo-pr.png" />\n        <ion-slides class="text-slider" autoplay="2000">\n          <ion-slide>\n            <h3> Really nice stuff </h3>\n          </ion-slide>\n          <ion-slide>\n            <img src="assets/img/misc/emoji.png" />\n          </ion-slide>\n          <ion-slide>\n            <h3> Unique experiences given to you for just a couple bucks </h3>\n          </ion-slide>\n          <ion-slide>\n            <h3> Share what you love </h3>\n          </ion-slide>\n        </ion-slides>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button round color="light" class="login-button" (click)="goToLogin()">SIGN IN</button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button round color="light" class="login-button" (click)="goToSignup()">SIGN UP</button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-slide>\n    <ion-slide class="zoom swiper-no-swiping">\n      <ion-slides #innerSlider class="content-slider">\n        <ion-slide class="swiper-no-swiping">\n          <div style="padding: 20% 32px 32px 32px">\n            <ion-item>\n              <ion-label floating>Username</ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Password</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n            <button ion-button block round (click)="login()" color="light" class="login-button">Login</button>\n            <button ion-button clear (click)="slideNext()" color="light" class="forgot-button">FORGOT PASSWORD?</button>\n          </div>\n          <button ion-button clear (click)="goToSignup()" class="slide-button position-bottom">GO TO SIGNUP<ion-icon name="arrow-down"></ion-icon></button>\n        </ion-slide>\n        <ion-slide class="swiper-no-swiping">\n          <div style="padding: 20% 32px 32px 32px">\n            <ion-item>\n              <ion-label floating>E-mail</ion-label>\n              <ion-input type="email"></ion-input>\n            </ion-item>\n            <button ion-button block round (click)="resetPassword()" color="light" class="login-button">RESET PASSWORD</button>\n            <button ion-button clear (click)="slidePrevious()" color="light" class="goback-button"><ion-icon name="arrow-back"></ion-icon> GO BACK</button>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </ion-slide>\n    <ion-slide class="zoom swiper-no-swiping">\n      <button ion-button clear (click)="goToLogin()" class="slide-button">\n        GO TO LOGIN\n        <ion-icon name="arrow-up"></ion-icon>\n      </button>\n      <div style="padding: 32px">\n        <ion-item>\n          <ion-label floating>Username</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password"></ion-input>\n        </ion-item>\n        <ion-item class="margin-bottom">\n          <ion-label floating>Confirm Password</ion-label>\n          <ion-input type="password"></ion-input>\n        </ion-item>\n        <button ion-button block round (click)="signup()" color="light" class="login-button">SIGN UP</button>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/login/login-slider/login-slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], LoginSliderPage);
    return LoginSliderPage;
}());

//# sourceMappingURL=login-slider.js.map

/***/ })

});
//# sourceMappingURL=52.js.map