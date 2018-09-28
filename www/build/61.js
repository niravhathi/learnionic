webpackJsonp([61],{

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteItemsPageModule", function() { return DeleteItemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delete_items__ = __webpack_require__(562);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeleteItemsPageModule = (function () {
    function DeleteItemsPageModule() {
    }
    DeleteItemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__delete_items__["a" /* DeleteItemsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__delete_items__["a" /* DeleteItemsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__delete_items__["a" /* DeleteItemsPage */]
            ]
        })
    ], DeleteItemsPageModule);
    return DeleteItemsPageModule;
}());

//# sourceMappingURL=delete-items.module.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteItemsPage; });
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


var DeleteItemsPage = (function () {
    function DeleteItemsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.activeItemSliding = null;
        this.items = [
            {
                title: 'Item 1',
            },
            {
                title: 'Item 2',
            },
            {
                title: 'Item 3',
            },
        ];
        this.things = [
            {
                title: 'Thing 1',
            },
            {
                title: 'Thing 2',
            },
            {
                title: 'Thing 3',
            },
        ];
    }
    DeleteItemsPage.prototype.addThing = function () {
        console.log('add thing');
        this.things.push({ title: 'Thing ' + (this.things.length + 1) });
    };
    DeleteItemsPage.prototype.addItem = function () {
        console.log('add item');
        this.items.push({ title: 'Item ' + (this.items.length + 1) });
    };
    DeleteItemsPage.prototype.deleteItem = function (list, index) {
        list.splice(index, 1);
    };
    DeleteItemsPage.prototype.openOption = function (itemSlide, item, event) {
        console.log('opening item slide..');
        event.stopPropagation(); // here if you want item to be tappable
        if (this.activeItemSliding) {
            this.closeOption();
        }
        this.activeItemSliding = itemSlide;
        var swipeAmount = 33; // set your required swipe amount
        console.log('swipe amount ', swipeAmount);
        itemSlide.startSliding(swipeAmount);
        itemSlide.moveSliding(swipeAmount);
        itemSlide.setElementClass('active-slide', true);
        itemSlide.setElementClass('active-options-right', true);
        item.setElementStyle('transition', null);
        item.setElementStyle('transform', 'translate3d(-' + swipeAmount + 'px, 0px, 0px)');
    };
    DeleteItemsPage.prototype.closeOption = function () {
        console.log('closing item slide..');
        if (this.activeItemSliding) {
            this.activeItemSliding.close();
            this.activeItemSliding = null;
        }
    };
    DeleteItemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-delete-items',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/list/delete-items/delete-items.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Delete Items</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      Swipe left to delete\n      <button item-end ion-button icon-only clear (click)="addItem()">\n        <ion-icon color="primary" name="add-circle"></ion-icon>\n      </button>\n    </ion-list-header>\n    <ion-item-sliding *ngFor="let item of items; let i = index; ">\n      <ion-item>\n        {{item.title}}\n      </ion-item>\n      <ion-item-options icon-start (ionSwipe)="deleteItem(items, i)">\n        <button color="danger" ion-button expandable (click)="deleteItem(items, i)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-list-header>\n      Tap or swipe to delete\n      <button item-end ion-button icon-only clear (click)="addThing()">\n        <ion-icon color="primary" name="add-circle"></ion-icon>\n      </button>\n    </ion-list-header>\n    <ion-item-sliding #slidingItem *ngFor="let thing of things; let i = index; ">\n      <ion-item #item>\n        <ion-icon item-start color="danger" name="remove-circle" (click)="openOption(slidingItem, item, $event)"></ion-icon> {{thing.title}}\n      </ion-item>\n      <ion-item-options icon-start (ionSwipe)="deleteItem(things, i)">\n        <button color="danger" ion-button expandable (click)="deleteItem(things, i)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/list/delete-items/delete-items.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], DeleteItemsPage);
    return DeleteItemsPage;
}());

//# sourceMappingURL=delete-items.js.map

/***/ })

});
//# sourceMappingURL=61.js.map