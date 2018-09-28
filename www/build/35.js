webpackJsonp([35],{

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWithNavigationPageModule", function() { return ModalWithNavigationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_with_navigation__ = __webpack_require__(591);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalWithNavigationPageModule = (function () {
    function ModalWithNavigationPageModule() {
    }
    ModalWithNavigationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_with_navigation__["a" /* ModalWithNavigationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_with_navigation__["a" /* ModalWithNavigationPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__modal_with_navigation__["a" /* ModalWithNavigationPage */]
            ]
        })
    ], ModalWithNavigationPageModule);
    return ModalWithNavigationPageModule;
}());

//# sourceMappingURL=modal-with-navigation.module.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalWithNavigationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_toast_service__ = __webpack_require__(338);
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



var ModalWithNavigationPage = (function () {
    function ModalWithNavigationPage(navCtrl, actionSheetCtrl, modalCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.documents = [{
                name: 'Ionic.sketch',
            }, {
                name: 'Envudu.sketch'
            }, {
                name: 'Fazescardgame.sketch'
            }, {
                name: 'Lucidchart.sketch'
            }];
    }
    ModalWithNavigationPage.prototype.presentActionSheet = function (document) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: document.name,
            buttons: [
                {
                    text: 'Move',
                    handler: function () {
                        _this.moveDocumentModal(document);
                        console.log('Move clicked');
                    }
                }, {
                    text: 'Rename',
                    handler: function () {
                        var navTransition = actionSheet.dismiss();
                        navTransition.then(function () {
                            // wait until action sheet dismisses
                            // https://ionicframework.com/docs/api/components/action-sheet/ActionSheetController/#advanced
                            _this.renameDocument(document);
                            console.log('Rename clicked');
                        });
                        return false;
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ModalWithNavigationPage.prototype.moveDocumentModal = function (document) {
        var _this = this;
        var myModal = this.modalCtrl.create('ModalNavPage', { page: 'MoveDocumentPage' });
        myModal.onDidDismiss(function (data) {
            if (data) {
                _this.toastCtrl.create('"' + document.name + '" moved to folder "' + data.name + '"');
            }
        });
        myModal.present();
    };
    ModalWithNavigationPage.prototype.renameDocument = function (document) {
        var prompt = this.alertCtrl.create({
            title: 'Rename Document',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title',
                    value: document.name
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        document.name = data.title;
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ModalWithNavigationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-modal-with-navigation',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/modal-with-navigation/modal-with-navigation.html"*/'<ion-header>\n  <ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Modal with Navigation</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <p padding>This sample simulates the behavior of moving files/folders of known apps like dropbox or google drive:</p>\n  <ion-list>\n    <ion-list-header border-bottom>Files</ion-list-header>\n    <ion-item *ngFor="let document of documents">\n      <ion-icon name="document" item-start></ion-icon>\n      <ion-label>\n        {{document.name}}\n      </ion-label>\n      <button ion-button icon-only item-end clear (click)="presentActionSheet(document)">\n              <ion-icon name="more"></ion-icon>\n          </button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/modal-with-navigation/modal-with-navigation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_util_toast_service__["a" /* ToastService */]])
    ], ModalWithNavigationPage);
    return ModalWithNavigationPage;
}());

//# sourceMappingURL=modal-with-navigation.js.map

/***/ })

});
//# sourceMappingURL=35.js.map