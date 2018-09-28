webpackJsonp([3],{

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFivePageModule", function() { return ProfileFivePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_parallax_header_parallax_header_module__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_five__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfileFivePageModule = (function () {
    function ProfileFivePageModule() {
    }
    ProfileFivePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__profile_five__["a" /* ProfileFivePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__profile_five__["a" /* ProfileFivePage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_parallax_header_parallax_header_module__["a" /* ParallaxHeaderDirectiveModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__profile_five__["a" /* ProfileFivePage */]
            ]
        })
    ], ProfileFivePageModule);
    return ProfileFivePageModule;
}());

//# sourceMappingURL=profile-five.module.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxHeaderDirectiveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parallax_header__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ParallaxHeaderDirectiveModule = (function () {
    function ParallaxHeaderDirectiveModule() {
    }
    ParallaxHeaderDirectiveModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__parallax_header__["a" /* ParallaxHeaderDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_0__parallax_header__["a" /* ParallaxHeaderDirective */]]
        })
    ], ParallaxHeaderDirectiveModule);
    return ParallaxHeaderDirectiveModule;
}());

//# sourceMappingURL=parallax-header.module.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxHeaderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParallaxHeaderDirective = (function () {
    function ParallaxHeaderDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ParallaxHeaderDirective.prototype.ngOnInit = function () {
        var content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = content.getElementsByClassName('header-image')[0];
        var mainContent = content.getElementsByClassName('main-content')[0];
        this.headerHeight = this.header.clientHeight;
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        this.renderer.setElementStyle(this.header, 'background-size', 'cover');
        this.renderer.setElementStyle(mainContent, 'position', 'absolute');
    };
    ParallaxHeaderDirective.prototype.onWindowResize = function (ev) {
        this.headerHeight = this.header.clientHeight;
    };
    ParallaxHeaderDirective.prototype.onContentScroll = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.updateParallaxHeader(ev);
        });
    };
    ParallaxHeaderDirective.prototype.updateParallaxHeader = function (ev) {
        if (ev.scrollTop >= 0) {
            this.translateAmt = ev.scrollTop / 4;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
    };
    ParallaxHeaderDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[parallax-header]',
            host: {
                '(ionScroll)': 'onContentScroll($event)',
                '(window:resize)': 'onWindowResize($event)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ParallaxHeaderDirective);
    return ParallaxHeaderDirective;
}());

//# sourceMappingURL=parallax-header.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileFivePage; });
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


var ProfileFivePage = (function () {
    function ProfileFivePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.user = {
            name: 'Cosima Niehaus',
            profileImage: 'assets/img/avatar/girl-avatar.png',
            coverImage: 'assets/img/background/background-5.jpg',
            occupation: 'Designer',
            location: 'Seattle, WA',
            description: 'Passionate Designer. Recently focusing on developing mobile hybrid apps and web development.',
            address: '27 King\'s College Cir, Toronto, ON M5S, Canada',
            phone: '555 555 555',
            email: 'cosima@niehaus.com',
            whatsapp: '555 555 555',
        };
    }
    ProfileFivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileFivePage');
    };
    ProfileFivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile-five',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/profile/profile-five/profile-five.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Parallax Header</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content parallax-header no-bounce class="bg-modal">\n    <div class="header-image"></div>\n    <div class="main-content" text-wrap text-center>\n        <div class="circular"></div>\n        <h2>{{user.name}}</h2>\n        <p>{{user.occupation}} &bull; {{user.location}}</p>\n        <p class="profile-description">{{user.description}}</p>\n        <hr>\n        <ion-list no-lines>\n            <ion-item>\n                <ion-icon name="mail" color="primary" item-start></ion-icon>\n                <p>Email</p>\n                {{user.email}}\n                <a button ion-button href="mailto:{{user.email}}" color="primary" item-end medium>Open App</a>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-start name="call" color="danger"></ion-icon>\n                <p>Mobile</p>\n                {{user.phone}}\n                <a button ion-button href="tel:{{user.phone}}" color="danger" item-end medium>Poke me</a>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-start name="logo-whatsapp" color="secondary"></ion-icon>\n                <p>Whatsapp</p>\n                {{user.whatsapp}}\n                <a button ion-button color="secondary" item-end medium href="whatsapp://send?text=Hi from ionic&phone=+{{user.phone}}&abid=+{{user.phone}}">Open App</a>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-start name="pin" color="twitter"></ion-icon>\n                <p>{{user.address}}</p>\n            </ion-item>\n        </ion-list>\n        <h2>Get in touch</h2>\n        <hr>\n        <a href="#" button ion-button block color="linkedin" icon-start>\n            <ion-icon name=\'logo-linkedin\'></ion-icon>\n            LinkedIn\n        </a>\n        <a href="#" button ion-button block color="fb" icon-start>\n            <ion-icon name=\'logo-facebook\'></ion-icon>\n            Facebook\n        </a>\n        <a href="#" button ion-button block color="danger" icon-start>\n            <ion-icon name=\'logo-youtube\'></ion-icon>\n            Youtube\n        </a>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/profile/profile-five/profile-five.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], ProfileFivePage);
    return ProfileFivePage;
}());

//# sourceMappingURL=profile-five.js.map

/***/ })

});
//# sourceMappingURL=3.js.map