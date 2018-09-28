webpackJsonp([4],{

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveDocumentPageModule", function() { return MoveDocumentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__move_document__ = __webpack_require__(592);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoveDocumentPageModule = (function () {
    function MoveDocumentPageModule() {
    }
    MoveDocumentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__move_document__["a" /* MoveDocumentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__move_document__["a" /* MoveDocumentPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__move_document__["a" /* MoveDocumentPage */]
            ]
        })
    ], MoveDocumentPageModule);
    return MoveDocumentPageModule;
}());

//# sourceMappingURL=move-document.module.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalNavPage; });
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


var ModalNavPage = (function () {
    function ModalNavPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalParams = {};
    }
    ModalNavPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalNavPage');
        this.modalPage = this.navParams.get('page');
    };
    ModalNavPage.prototype.dismissModal = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ModalNavPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-nav',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/modal-with-navigation/modal-nav/modal-nav.html"*/'<ion-nav [root]="modalPage" [(rootParams)]="modalParams" #content></ion-nav>'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/modal-with-navigation/modal-nav/modal-nav.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], ModalNavPage);
    return ModalNavPage;
}());

//# sourceMappingURL=modal-nav.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoveDocumentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_nav_modal_nav__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoveDocumentPage = (function () {
    function MoveDocumentPage(navCtrl, navParams, modalNavPage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalNavPage = modalNavPage;
        this.initData();
    }
    MoveDocumentPage.prototype.initData = function () {
        this.thisFolder = this.navParams.get('folder') || {
            name: 'Documents'
        };
        this.folders = [{
                name: 'My Folder 1',
            }, {
                name: 'My Folder 2'
            }, {
                name: 'My Folder 3'
            }, {
                name: 'My Folder 4'
            }];
    };
    MoveDocumentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MoveDocumentPage');
    };
    MoveDocumentPage.prototype.goToFolder = function (folder) {
        this.navCtrl.push('MoveDocumentPage', { folder: folder });
    };
    MoveDocumentPage.prototype.moveHere = function (folder) {
        this.modalNavPage.dismissModal(folder);
    };
    MoveDocumentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-move-document',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/modal-with-navigation/move-document/move-document.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons start *ngIf="thisFolder.name === \'Documents\'">\n            <button ion-button (click)="moveHere()">\n                Cancel\n            </button>\n        </ion-buttons>\n        <ion-title>{{thisFolder.name}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor="let folder of folders" (click)="goToFolder(folder)">\n            <ion-icon name="folder" item-start></ion-icon>\n            <h2>{{folder.name}}</h2>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer padding>\n    <ion-buttons end>\n        <button ion-button color="primary" (click)="moveHere(thisFolder)">\n            Move Here\n        </button>\n    </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/modal-with-navigation/move-document/move-document.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__modal_nav_modal_nav__["a" /* ModalNavPage */]])
    ], MoveDocumentPage);
    return MoveDocumentPage;
}());

//# sourceMappingURL=move-document.js.map

/***/ })

});
//# sourceMappingURL=4.js.map