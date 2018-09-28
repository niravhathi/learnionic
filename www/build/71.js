webpackJsonp([71],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimePermissionsPageModule", function() { return RuntimePermissionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runtime_permissions__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RuntimePermissionsPageModule = (function () {
    function RuntimePermissionsPageModule() {
    }
    RuntimePermissionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__runtime_permissions__["a" /* RuntimePermissionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__runtime_permissions__["a" /* RuntimePermissionsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__runtime_permissions__["a" /* RuntimePermissionsPage */]
            ]
        })
    ], RuntimePermissionsPageModule);
    return RuntimePermissionsPageModule;
}());

//# sourceMappingURL=runtime-permissions.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuntimePermissionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__ = __webpack_require__(344);
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



var RuntimePermissionsPage = (function () {
    function RuntimePermissionsPage(navCtrl, diagnostic, navParams) {
        this.navCtrl = navCtrl;
        this.diagnostic = diagnostic;
        this.navParams = navParams;
        // You can add many other permissions
        this.PERMISSION = {
            WRITE_EXTERNAL: this.diagnostic.permission.WRITE_EXTERNAL_STORAGE,
            READ_EXTERNAL: this.diagnostic.permission.READ_EXTERNAL_STORAGE,
            CAMERA: this.diagnostic.permission.CAMERA,
        };
    }
    // You can use this kind of method, which is passing a permission value..
    RuntimePermissionsPage.prototype.requestPermission = function (permission) {
        var _this = this;
        this.diagnostic.requestRuntimePermission(permission).then(function (status) {
            if (status === _this.diagnostic.permissionStatus.GRANTED) {
                alert('Permission granted!');
            }
            else {
                alert('Permission not granted. STATUS: ' + status);
            }
        }, function (error) {
            console.error('permission error:', error);
        });
    };
    // ..Or opt for Diagnostic's specific methods, like requestCameraAuthorization.
    RuntimePermissionsPage.prototype.requestCameraPermission = function () {
        var _this = this;
        // Checks if permission is already granted. Otherwise, asks for it.
        this.diagnostic.isCameraAuthorized().then(function (authorized) {
            if (authorized) {
                alert('camera is already authorized!');
            }
            else {
                _this.diagnostic.requestCameraAuthorization().then(function (status) {
                    if (status === _this.diagnostic.permissionStatus.GRANTED) {
                        alert('Permission granted!');
                    }
                    else {
                        alert('Permission not granted. STATUS: ' + status);
                    }
                });
            }
        });
    };
    // There is also a method that takes an array of permissions to ask for them at once
    RuntimePermissionsPage.prototype.requestAllPermissions = function () {
        var _this = this;
        var permissions = Object.keys(this.PERMISSION).map(function (k) { return _this.PERMISSION[k]; });
        this.diagnostic.requestRuntimePermissions(permissions).then(function (status) {
            alert(JSON.stringify(status));
        }, function (error) {
            console.error('permission error:', error);
        });
    };
    RuntimePermissionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-runtime-permissions',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/ionic-native/runtime-permissions/runtime-permissions.html"*/'<!--\n  Generated template for the RuntimePermissions page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>RuntimePermissions</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button full (click)="requestPermission(PERMISSION.WRITE_EXTERNAL)">Read/Write External</button>\n  <button ion-button full (click)="requestCameraPermission()">Use Camera</button>\n  <button ion-button full (click)="requestAllPermissions()">All requests at once</button>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/ionic-native/runtime-permissions/runtime-permissions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */]])
    ], RuntimePermissionsPage);
    return RuntimePermissionsPage;
}());

//# sourceMappingURL=runtime-permissions.js.map

/***/ })

});
//# sourceMappingURL=71.js.map