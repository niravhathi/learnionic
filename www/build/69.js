webpackJsonp([69],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsListPageModule", function() { return ButtonsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ButtonsListPageModule = (function () {
    function ButtonsListPageModule() {
    }
    ButtonsListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__button__["a" /* ButtonsListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__button__["a" /* ButtonsListPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__button__["a" /* ButtonsListPage */]
            ]
        })
    ], ButtonsListPageModule);
    return ButtonsListPageModule;
}());

//# sourceMappingURL=button.module.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsListPage; });
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


var ButtonsListPage = (function () {
    function ButtonsListPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = 'ButtonsListPage';
        this.items = [
            {
                title: 'Button Styles',
                page: 'ButtonStylesPage'
            },
            {
                title: 'Icon Buttons',
                page: 'IconButtonsPage'
            },
            {
                title: 'Buttons in Components',
                page: 'ButtonComponentsPage'
            },
        ];
    }
    ButtonsListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    ButtonsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-button',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/ionic-official-components/button/button.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Buttons</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content text-center>\n  <h4>Colors</h4>\n  <button ion-button>Default</button>\n  <button ion-button color="secondary">Secondary</button>\n  <button ion-button color="danger">Danger</button>\n  <button ion-button color="light">Light</button>\n  <button ion-button color="dark">Dark</button>\n\n  <h4>Shapes</h4>\n  <button ion-button full>Full Button</button>\n  <button ion-button block>Block Button</button>\n  <button ion-button round>Round Button</button>\n\n  <h4>Outlines</h4>\n  <button ion-button color="secondary" full outline>Outline + Full</button>\n  <button ion-button color="secondary" block outline>Outline + Block</button>\n  <button ion-button color="secondary" round outline>Outline + Round</button>\n\n  <h4>Icons</h4>\n  <button ion-button icon-left color="dark">\n    <ion-icon name="star"></ion-icon>\n    Left Icon\n  </button>\n  <button ion-button icon-right color="dark">\n    Right Icon\n    <ion-icon name="star"></ion-icon>\n  </button>\n  <button ion-button icon-only color="dark">\n    <ion-icon name="star"></ion-icon>\n  </button>\n   <button ion-button color="light" icon-left>\n    <ion-icon name=\'arrow-back\'></ion-icon>\n    Back\n  </button>\n  <button ion-button color="light" icon-only>\n    <ion-icon name=\'arrow-down\'></ion-icon>\n  </button>\n  <button ion-button color="light" icon-only>\n    <ion-icon name=\'arrow-up\'></ion-icon>\n  </button>\n  <button ion-button color="light" icon-right>\n    Next\n    <ion-icon name=\'arrow-forward\'></ion-icon>\n  </button>\n  <button ion-button icon-left>\n    <ion-icon name=\'home\'></ion-icon>\n    Home\n  </button>\n  <button ion-button outline icon-left>\n    <ion-icon name=\'briefcase\' is-active="false"></ion-icon>\n    Work\n  </button>\n  <button ion-button clear icon-left>\n    <ion-icon name=\'beer\' is-active="false"></ion-icon>\n    Pub\n  </button>\n  <button ion-button color="secondary" icon-left>\n    <ion-icon name=\'people\'></ion-icon>\n    Friends\n  </button>\n  <button ion-button color="secondary" outline icon-left>\n    <ion-icon name=\'paw\' is-active="false"></ion-icon>\n    Best Friend\n  </button>\n  <button ion-button color="danger" icon-left>\n    <ion-icon name=\'close\'></ion-icon>\n    Remove\n  </button>\n  <button ion-button color="danger" outline icon-only>\n    <ion-icon name=\'remove-circle\' is-active="false"></ion-icon>\n  </button>\n  <button ion-button color="danger" clear icon-only>\n    <ion-icon name=\'trash\' is-active="false"></ion-icon>\n  </button>\n  <button ion-button color="dark" round icon-left>\n    <ion-icon name=\'construct\' is-active="false"></ion-icon>\n    Tools\n  </button>\n  <button ion-button color="dark" clear icon-only>\n    <ion-icon name=\'hammer\' is-active="false"></ion-icon>\n  </button>\n\n  <h4>Sizes</h4>\n  <button ion-button color="light" large>Large</button>\n  <button ion-button color="light">Default</button>\n  <button ion-button color="light" small>Small</button>\n\n  <!-- Float Action Buttons -->\n  <ion-fab right top edge>\n    <button ion-fab class="pop-in" color="dark">\n        FAB\n    </button>\n  </ion-fab>\n  <ion-fab bottom right >\n    <button ion-fab class="pop-in" color="danger">Share</button>\n    <ion-fab-list side="top">\n      <button ion-fab color="primary">\n        <ion-icon  name="logo-facebook"></ion-icon>\n      </button>\n      <button ion-fab color="secondary">\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button>\n      <button ion-fab color="dark">\n        <ion-icon name="logo-instagram"></ion-icon>\n      </button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab>\n        <ion-icon name="logo-github"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <h4>In components</h4>\n  <ion-card>\n    <ion-card-content>\n      <img src="assets/img/misc/img-icon.png" />\n    </ion-card-content>\n    <ion-item>\n      <button ion-button clear item-start>Like</button>\n      <button ion-button clear item-end>Comment</button>\n    </ion-item>\n  </ion-card>\n  <ion-list>\n    <ion-item>\n      Inner Button\n      <button ion-button item-end outline>Outline</button>\n    </ion-item>\n    <ion-item>\n      Left Icon Button\n      <button ion-button item-end outline icon-left>\n        <ion-icon name=\'star\'></ion-icon>\n        Left Icon\n      </button>\n    </ion-item>\n    <ion-item>\n      Right Icon Button\n      <button ion-button item-end outline icon-right>\n        Right Icon\n        <ion-icon name=\'star\'></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/ionic-official-components/button/button.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], ButtonsListPage);
    return ButtonsListPage;
}());

//# sourceMappingURL=button.js.map

/***/ })

});
//# sourceMappingURL=69.js.map