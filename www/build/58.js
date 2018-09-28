webpackJsonp([58],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidingItemPageModule", function() { return SlidingItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sliding_item__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlidingItemPageModule = (function () {
    function SlidingItemPageModule() {
    }
    SlidingItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__sliding_item__["a" /* SlidingItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__sliding_item__["a" /* SlidingItemPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__sliding_item__["a" /* SlidingItemPage */]
            ]
        })
    ], SlidingItemPageModule);
    return SlidingItemPageModule;
}());

//# sourceMappingURL=sliding-item.module.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidingItemPage; });
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


var SlidingItemPage = (function () {
    function SlidingItemPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [
            {
                imageUrl: 'assets/img/lists/stadium.jpg',
                title: 'First Cup',
                place: 'Madison Square',
                date: '05/06/2016'
            },
            {
                imageUrl: 'assets/img/lists/stadium-3.png',
                title: 'Season',
                place: 'Hooli',
                date: '15/03/2016'
            },
            {
                imageUrl: 'assets/img/lists/stadium-2.jpg',
                title: '2nd Season',
                place: 'Castelão',
                date: '05/12/2015'
            },
        ];
    }
    SlidingItemPage.prototype.delete = function (item) {
        alert('Deleted ' + item.title);
    };
    SlidingItemPage.prototype.viewComments = function (item) {
        alert('Viewing comments of ' + item.title);
    };
    SlidingItemPage.prototype.viewPlayers = function (item) {
        alert('Viewing players of ' + item.title);
    };
    SlidingItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sliding-item',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/list/sliding-item/sliding-item.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Sliding Item</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of items">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img [src]="item.imageUrl">\n        </ion-thumbnail>\n        <h2>{{item.title}}</h2>\n        <p>{{item.place}} • {{item.date}}</p>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="secondary" (click)="viewComments(item)">\n        <ion-icon name="chatbubbles"></ion-icon>\n        Comments\n      </button>\n        <button ion-button color="primary" (click)="viewPlayers(item)">\n        <ion-icon name="contacts"></ion-icon>\n        Players\n      </button>\n        <button ion-button color="danger" (click)="delete(item)">\n        <ion-icon name="trash"></ion-icon>\n        Delete\n      </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/list/sliding-item/sliding-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SlidingItemPage);
    return SlidingItemPage;
}());

//# sourceMappingURL=sliding-item.js.map

/***/ })

});
//# sourceMappingURL=58.js.map