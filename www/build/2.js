webpackJsonp([2],{

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveListLabelPageModule", function() { return ReactiveListLabelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reactive_list_label__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(566);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReactiveListLabelPageModule = (function () {
    function ReactiveListLabelPageModule() {
    }
    ReactiveListLabelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reactive_list_label__["a" /* ReactiveListLabelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reactive_list_label__["a" /* ReactiveListLabelPage */]),
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* DirectivesModule */]
            ],
        })
    ], ReactiveListLabelPageModule);
    return ReactiveListLabelPageModule;
}());

//# sourceMappingURL=reactive-list-label.module.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactiveListLabelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_data__ = __webpack_require__(565);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReactiveListLabelPage = (function () {
    function ReactiveListLabelPage(navCtrl, navParams, ngZone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ngZone = ngZone;
        this.dataList = __WEBPACK_IMPORTED_MODULE_2__list_data__["a" /* LIST_DATA */];
        this.currentCategory = '';
    }
    ReactiveListLabelPage.prototype.itemIsVisible = function ($event, book) {
        console.log(book, $event);
        book.visible = $event;
        this.setCategory();
    };
    ReactiveListLabelPage.prototype.setCategory = function () {
        var _this = this;
        var obj = {};
        var qtdVisibleCategory = 0;
        var higherCategory = '';
        this.dataList
            .filter(function (bk) { return bk.visible; })
            .forEach(function (bk) { return (obj[bk.category] = obj[bk.category] ? obj[bk.category] + 1 : 1); });
        for (var key in obj) {
            if (obj[key] > qtdVisibleCategory) {
                qtdVisibleCategory = obj[key];
                higherCategory = key;
            }
        }
        console.log(obj);
        this.ngZone.runOutsideAngular(function () {
            _this.ngZone.run(function () {
                _this.currentCategory = higherCategory;
            });
        });
    };
    ReactiveListLabelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReactiveListLabelPage');
    };
    ReactiveListLabelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reactive-list-label',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/list/reactive-list-label/reactive-list-label.html"*/'<!--\n  Generated template for the ReactiveListLabelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reactive List Label</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content>\n  <ion-fab class="fab-reactive-list" top center>\n    <button ion-fab> {{ currentCategory }} </button>\n  </ion-fab>\n  <ion-card is-visible [content]="content" (visible)="itemIsVisible($event, book)" *ngFor="let book of dataList">\n    <img [src]="book.pictureProduct" />\n    <ion-card-content>\n      <ion-card-title>\n        {{ book.productName }}\n      </ion-card-title>\n      <p> {{ book.author }} </p>\n      <b> {{ book.category }} - {{ book.price | currency:\'USD\' }}</b>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/list/reactive-list-label/reactive-list-label.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], ReactiveListLabelPage);
    return ReactiveListLabelPage;
}());

//# sourceMappingURL=reactive-list-label.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIST_DATA; });
var LIST_DATA = [
    {
        productName: "Beneath a Scarlet Sky: A Novel",
        author: 'Mark Sullivan',
        pictureProduct: './assets/img/reactive-list-labels/beneath _scarlet.jpg',
        category: 'Literature & Fiction',
        price: 5.99
    },
    {
        productName: "The Orphan's Tale: A Novel",
        author: 'Pam Jenoff',
        pictureProduct: './assets/img/reactive-list-labels/the_orphan_tale.jpg',
        category: 'Literature & Fiction',
        price: 10.37
    },
    {
        productName: 'All the Light We Cannot See: A Novel',
        author: 'Anthony Doerr',
        pictureProduct: './assets/img/reactive-list-labels/all_light_we_cannot_see.jpeg',
        category: 'Literature & Fiction',
        price: 12.99
    },
    {
        productName: 'Rules of Civility: A Novel',
        author: 'Rules of Civility: A Novel',
        pictureProduct: './assets/img/reactive-list-labels/rules_civility.jpg',
        category: 'Literature & Fiction',
        price: 11.79
    },
    {
        productName: 'The Glass Castle: A Memoir',
        author: 'Jeannette Walls',
        pictureProduct: './assets/img/reactive-list-labels/the_glass_castle.jpg',
        category: 'Biographies & Memoirs',
        price: 5.14
    },
    {
        productName: 'Born a Crime: Stories from a South African Childhood',
        author: 'Trevor Noah',
        pictureProduct: './assets/img/reactive-list-labels/born_a_crime.jpg',
        category: 'Biographies & Memoirs',
        price: 6.0
    },
    {
        productName: 'Al Franken, Giant of the Senate',
        author: 'Al Franken',
        pictureProduct: './assets/img/reactive-list-labels/giant_of_the_senate.jpg',
        category: 'Biographies & Memoirs',
        price: 6.39
    },
    {
        productName: 'Pandemic (The Extinction Files Book 1)',
        author: 'A.G. Riddle',
        pictureProduct: './assets/img/reactive-list-labels/pandemic.jpg',
        category: 'Biographies & Memoirs',
        price: 5.47
    },
    {
        productName: 'Origin: A Novel',
        author: 'Dan Brown',
        pictureProduct: './assets/img/reactive-list-labels/origin.jpg',
        category: 'Suspense',
        price: 10.99
    },
    {
        productName: 'The Rooster Bar',
        author: 'John Grisham',
        pictureProduct: './assets/img/reactive-list-labels/the_rooster_bar.jpg',
        category: 'Suspense',
        price: 10.99
    },
    {
        productName: 'The Life We Bury',
        author: 'Dan Brown',
        pictureProduct: './assets/img/reactive-list-labels/the_life_we_bury.jpg',
        category: 'Suspense',
        price: 10.99
    }
];
//# sourceMappingURL=list-data.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_visible_is_visible__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__is_visible_is_visible__["a" /* IsVisibleDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__is_visible_is_visible__["a" /* IsVisibleDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsVisibleDirective; });
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


var IsVisibleDirective = (function () {
    function IsVisibleDirective(el) {
        this.el = el;
        this.emitVisible = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.threshold = 0;
    }
    IsVisibleDirective.prototype.isVisable = function () {
        this.rect = this.el.nativeElement.getBoundingClientRect();
        var bottom = this.getBottom();
        var top = this.getTop();
        var above = bottom < 0;
        var below = (top - this.height) >= 0;
        var isVisible = !above && !below;
        this.emitVisible.emit(isVisible);
    };
    IsVisibleDirective.prototype.initProp = function () {
        this.height = this.el.nativeElement.offsetParent.clientHeight;
    };
    IsVisibleDirective.prototype.initListener = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function () {
            _this.isVisable();
        });
    };
    IsVisibleDirective.prototype.getBottom = function () {
        return this.threshold ? this.rect.bottom - ((this.threshold / 100) * this.rect.bottom) : this.rect.bottom;
    };
    IsVisibleDirective.prototype.getTop = function () {
        return this.threshold ? this.rect.top - ((this.threshold / 100) * this.rect.top) : this.rect.top;
    };
    IsVisibleDirective.prototype.ngOnInit = function () {
        this.initProp();
        this.initListener();
        this.isVisable();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('visible'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], IsVisibleDirective.prototype, "emitVisible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], IsVisibleDirective.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('threshold'),
        __metadata("design:type", Number)
    ], IsVisibleDirective.prototype, "threshold", void 0);
    IsVisibleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[is-visible]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], IsVisibleDirective);
    return IsVisibleDirective;
}());

//# sourceMappingURL=is-visible.js.map

/***/ })

});
//# sourceMappingURL=2.js.map