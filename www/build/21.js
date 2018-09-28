webpackJsonp([21],{

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTwoPageModule", function() { return ProfileTwoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_two__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileTwoPageModule = (function () {
    function ProfileTwoPageModule() {
    }
    ProfileTwoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__profile_two__["a" /* ProfileTwoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__profile_two__["a" /* ProfileTwoPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__profile_two__["a" /* ProfileTwoPage */]
            ]
        })
    ], ProfileTwoPageModule);
    return ProfileTwoPageModule;
}());

//# sourceMappingURL=profile-two.module.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileTwoPage; });
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


var ProfileTwoPage = (function () {
    function ProfileTwoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfileTwoPage.prototype.ionViewDidLoad = function () {
        console.log('Hello ProfileTwo Page');
    };
    ProfileTwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile-two',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/profile/profile-two/profile-two.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Popup Menu</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="container">\n  <div class="header">\n    <h1>Richard Karsten</h1>\n    <h2>Frontend</h2>\n    <img src="https://clikr.de/wp-content/uploads/2015/02/richard-150x150.jpg" class="profile" />\n  </div>\n  <div class="content">\n    <h3>about me</h3>\n    <p>Hey - I am Richie, a 20 years old frontend dev from germany. Feel free to follow me. </p>\n    <div class="social">\n      <ul>\n        <li>\n          <a href="#" class="zocial-facebook"></a>\n        </li>\n        <li>\n          <a href="#" class="zocial-twitter"></a>\n        </li>\n        <li>\n          <a href="#" class="zocial-instagram"> </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/profile/profile-two/profile-two.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], ProfileTwoPage);
    return ProfileTwoPage;
}());

//# sourceMappingURL=profile-two.js.map

/***/ })

});
//# sourceMappingURL=21.js.map