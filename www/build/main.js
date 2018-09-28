webpackJsonp([79],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this.clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype.clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AppState);
    return AppState;
}());

//# sourceMappingURL=app.global.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/_home/home.module": [
		454,
		78
	],
	"../pages/accordion-list/accordion-list.module": [
		455,
		77
	],
	"../pages/ionic-native/barcode-scanner/barcode-scanner.module": [
		456,
		76
	],
	"../pages/ionic-native/credit-card-scan/credit-card-scan.module": [
		457,
		75
	],
	"../pages/ionic-native/get-image/get-image.module": [
		458,
		74
	],
	"../pages/ionic-native/ionic-native.module": [
		459,
		73
	],
	"../pages/ionic-native/native-google-maps/native-google-maps.module": [
		460,
		72
	],
	"../pages/ionic-native/runtime-permissions/runtime-permissions.module": [
		461,
		71
	],
	"../pages/ionic-official-components/alert/alert.module": [
		451,
		70
	],
	"../pages/ionic-official-components/button/button.module": [
		452,
		69
	],
	"../pages/ionic-official-components/card/card-background/card-background.module": [
		462,
		68
	],
	"../pages/ionic-official-components/card/card-badge/card-badge.module": [
		463,
		67
	],
	"../pages/ionic-official-components/card/card-image/card-image.module": [
		464,
		66
	],
	"../pages/ionic-official-components/card/card-map/card-map.module": [
		465,
		65
	],
	"../pages/ionic-official-components/card/card-social/card-social.module": [
		466,
		64
	],
	"../pages/ionic-official-components/card/card.module": [
		453,
		63
	],
	"../pages/ionic-official-components/ionic-official-components.module": [
		467,
		1
	],
	"../pages/list/crypto-list/crypto-list.module": [
		468,
		62
	],
	"../pages/list/delete-items/delete-items.module": [
		469,
		61
	],
	"../pages/list/list.module": [
		470,
		60
	],
	"../pages/list/reactive-list-label/reactive-list-label.module": [
		471,
		2
	],
	"../pages/list/settings/settings.module": [
		472,
		59
	],
	"../pages/list/sliding-item/sliding-item.module": [
		473,
		58
	],
	"../pages/list/users/users.module": [
		474,
		57
	],
	"../pages/login/login-background-slider/login-background-slider.module": [
		475,
		56
	],
	"../pages/login/login-background-video/login-background-video.module": [
		476,
		55
	],
	"../pages/login/login-instagram/login-instagram.module": [
		477,
		54
	],
	"../pages/login/login-one/login-one.module": [
		478,
		53
	],
	"../pages/login/login-slider/login-slider.module": [
		479,
		52
	],
	"../pages/login/login.module": [
		480,
		51
	],
	"../pages/miscellaneous/autosizing-textarea/autosizing-textarea.module": [
		481,
		50
	],
	"../pages/miscellaneous/blog-post/blog-post.module": [
		482,
		49
	],
	"../pages/miscellaneous/charts/charts.module": [
		529,
		0
	],
	"../pages/miscellaneous/chat/chats.module": [
		483,
		48
	],
	"../pages/miscellaneous/chat/messages/messages.module": [
		484,
		47
	],
	"../pages/miscellaneous/concert-card/concert-card.module": [
		485,
		46
	],
	"../pages/miscellaneous/countdown/countdown.module": [
		487,
		45
	],
	"../pages/miscellaneous/expandable-header/expandable-header.module": [
		486,
		44
	],
	"../pages/miscellaneous/flash-card/flash-card.module": [
		488,
		43
	],
	"../pages/miscellaneous/item-ribbon/item-ribbon.module": [
		489,
		42
	],
	"../pages/miscellaneous/masonry-cards/masonry-cards.module": [
		490,
		41
	],
	"../pages/miscellaneous/miscellaneous.module": [
		491,
		40
	],
	"../pages/miscellaneous/real-estate-listing/real-estate-listing.module": [
		492,
		39
	],
	"../pages/miscellaneous/testimonials/testimonials.module": [
		493,
		38
	],
	"../pages/miscellaneous/tinder-cards/tinder-cards.module": [
		494,
		37
	],
	"../pages/modal-with-navigation/modal-nav/modal-nav.module": [
		495,
		36
	],
	"../pages/modal-with-navigation/modal-with-navigation.module": [
		496,
		35
	],
	"../pages/modal-with-navigation/move-document/move-document.module": [
		497,
		4
	],
	"../pages/popup-fab/popup-fab-modal/popup-fab-modal.module": [
		498,
		34
	],
	"../pages/popup-fab/popup-fab.module": [
		499,
		33
	],
	"../pages/popup-menu/popup-menu-one/popup-menu-one.module": [
		500,
		32
	],
	"../pages/popup-menu/popup-menu-two/popup-menu-two.module": [
		502,
		31
	],
	"../pages/popup-menu/popup-menu.module": [
		501,
		30
	],
	"../pages/popup-modal/hint-modal/hint-modal.module": [
		503,
		29
	],
	"../pages/popup-modal/popup-modal.module": [
		504,
		28
	],
	"../pages/popup-modal/signup-modal/signup-modal.module": [
		505,
		27
	],
	"../pages/popup-modal/walkthrough-modal/walkthrough-modal.module": [
		506,
		26
	],
	"../pages/profile/profile-five/profile-five.module": [
		507,
		3
	],
	"../pages/profile/profile-four/profile-four.module": [
		508,
		25
	],
	"../pages/profile/profile-one/profile-one.module": [
		509,
		24
	],
	"../pages/profile/profile-settings/profile-settings.module": [
		510,
		23
	],
	"../pages/profile/profile-three/profile-three.module": [
		511,
		22
	],
	"../pages/profile/profile-two/profile-two.module": [
		512,
		21
	],
	"../pages/profile/profile.module": [
		513,
		20
	],
	"../pages/side-menu/side-menu.module": [
		514,
		19
	],
	"../pages/slide/slide-carousel/slide-carousel.module": [
		515,
		18
	],
	"../pages/slide/slide-color-changing/slide-color-changing.module": [
		516,
		17
	],
	"../pages/slide/slide-custom-pagination/slide-custom-pagination.module": [
		517,
		16
	],
	"../pages/slide/slide-free-mode/slide-free-mode.module": [
		518,
		15
	],
	"../pages/slide/slide-nested/slide-nested.module": [
		519,
		14
	],
	"../pages/slide/slide-photo-gallery/slide-photo-gallery.module": [
		520,
		13
	],
	"../pages/slide/slide-rtl/slide-rtl.module": [
		521,
		12
	],
	"../pages/slide/slide-transitions/slide-transitions.module": [
		522,
		11
	],
	"../pages/slide/slide-walkthrough/slide-walkthrough.module": [
		523,
		10
	],
	"../pages/slide/slider-list/slider-list.module": [
		524,
		9
	],
	"../pages/slide/slider-with-arrows/slider-with-arrows.module": [
		525,
		8
	],
	"../pages/slide/slides.module": [
		526,
		7
	],
	"../pages/theming/theming.module": [
		527,
		6
	],
	"../pages/timeline/timeline.module": [
		528,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 284;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_util_toast_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_alert_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_camera_provider__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_native_google_maps_native_google_maps__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_card_io__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_diagnostic__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_maps__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_sliding_drawer_sliding_drawer__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_autosize_autosize__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_swing__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(345);
// Global state (used for theming)

// Providers




// Ionic native providers








// Directives


// Modules



var MODULES = [
    __WEBPACK_IMPORTED_MODULE_15_angular2_swing__["SwingModule"],
    __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["a" /* BrowserModule */],
    __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
];
var PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_2__providers_util_alert_service__["a" /* AlertService */],
    __WEBPACK_IMPORTED_MODULE_1__providers_util_toast_service__["a" /* ToastService */],
    __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppState */],
    __WEBPACK_IMPORTED_MODULE_3__providers_util_camera_provider__["a" /* CameraProvider */],
    __WEBPACK_IMPORTED_MODULE_4__providers_native_google_maps_native_google_maps__["a" /* NativeGoogleMapsProvider */],
    // Ionic native specific providers
    __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
    __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
    __WEBPACK_IMPORTED_MODULE_8__ionic_native_diagnostic__["a" /* Diagnostic */],
    __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
    __WEBPACK_IMPORTED_MODULE_5__ionic_native_card_io__["a" /* CardIO */],
    __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
    __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
    __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_maps__["a" /* GoogleMaps */],
];
var DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_13__components_sliding_drawer_sliding_drawer__["a" /* SlidingDrawer */],
    __WEBPACK_IMPORTED_MODULE_14__components_autosize_autosize__["a" /* Autosize */],
];
//# sourceMappingURL=app.imports.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_components_module__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_imports__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_imports__["a" /* DIRECTIVES */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_1__components_components_module__["a" /* ComponentsModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__["a" /* PipesModule */],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
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


var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.create = function (message, ok, duration) {
        if (ok === void 0) { ok = false; }
        if (duration === void 0) { duration = 2000; }
        if (this.toast) {
            this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: ok ? null : duration,
            position: 'bottom',
            showCloseButton: ok,
            closeButtonText: 'OK'
        });
        this.toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CameraProvider = (function () {
    function CameraProvider(camera) {
        this.camera = camera;
    }
    CameraProvider.prototype.getPictureFromCamera = function () {
        return this.getImage(this.camera.PictureSourceType.CAMERA, true);
    };
    CameraProvider.prototype.getPictureFromPhotoLibrary = function () {
        return this.getImage(this.camera.PictureSourceType.PHOTOLIBRARY);
    };
    // This method takes optional parameters to make it more customizable
    CameraProvider.prototype.getImage = function (pictureSourceType, crop, quality, allowEdit, saveToAlbum) {
        if (crop === void 0) { crop = false; }
        if (quality === void 0) { quality = 50; }
        if (allowEdit === void 0) { allowEdit = true; }
        if (saveToAlbum === void 0) { saveToAlbum = true; }
        var options = {
            quality: quality,
            allowEdit: allowEdit,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: pictureSourceType,
            encodingType: this.camera.EncodingType.PNG,
            saveToPhotoAlbum: saveToAlbum
        };
        // If set to crop, restricts the image to a square of 600 by 600
        if (crop) {
            options['targetWidth'] = 600;
            options['targetHeight'] = 600;
        }
        return this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/png;base64,' + imageData;
            return base64Image;
        }, function (error) {
            console.log('CAMERA ERROR -> ' + JSON.stringify(error));
        });
    };
    CameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
    ], CameraProvider);
    return CameraProvider;
}());

//# sourceMappingURL=camera.provider.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeGoogleMapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NativeGoogleMapsProvider = (function () {
    function NativeGoogleMapsProvider(geolocation, googleMaps) {
        this.geolocation = geolocation;
        this.googleMaps = googleMaps;
    }
    // Note: Call this method on ngAfterViewInit
    NativeGoogleMapsProvider.prototype.create = function (element) {
        var mapOptions = {
            camera: {
                target: {
                    lat: 43.0741904,
                    lng: -89.3809802
                },
                zoom: 18,
                tilt: 10
            },
            mapType: __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["d" /* GoogleMapsMapTypeId */].NORMAL,
            controls: {
                compass: true,
                myLocationButton: true,
                indoorPicker: true,
                zoom: true
            },
            gestures: {
                scroll: true,
                tilt: true,
                rotate: true,
                zoom: true
            },
            preferences: null
        };
        this.map = this.googleMaps.create(element.nativeElement, mapOptions);
        return this.map.one(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MAP_READY);
    };
    NativeGoogleMapsProvider.prototype.centerToGeolocation = function () {
        var _this = this;
        return this.getGeolocationPosition().then(function (position) {
            return _this.centerToPosition(position);
        }, function (error) {
            return Promise.reject(error);
        });
    };
    NativeGoogleMapsProvider.prototype.getGeolocationPosition = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.geolocation.getCurrentPosition().then(function (position) {
                var latLng = new __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["e" /* LatLng */](position.coords.latitude, position.coords.longitude);
                resolve(latLng);
            }, function (error) {
                reject(error);
            });
        });
    };
    NativeGoogleMapsProvider.prototype.centerToPosition = function (latLng, zoom, tilt) {
        var cameraPosition = {
            target: latLng,
            zoom: zoom || 18,
            tilt: tilt || 10
        };
        return this.map.animateCamera(cameraPosition);
    };
    NativeGoogleMapsProvider.prototype.addMarker = function (position, title, infoClickCallback, animated) {
        if (animated === void 0) { animated = true; }
        var markerOptions = {
            position: position,
            title: title,
            animation: animated ? __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsAnimation */].BOUNCE : null,
            infoWindowAnchor: infoClickCallback
        };
        return this.map.addMarker(markerOptions);
    };
    NativeGoogleMapsProvider.prototype.addMarkerToGeolocation = function (title, infoClickCallback, animated) {
        var _this = this;
        this.getGeolocationPosition().then(function (position) {
            _this.addMarker(position, title, infoClickCallback, animated);
        });
    };
    NativeGoogleMapsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */]])
    ], NativeGoogleMapsProvider);
    return NativeGoogleMapsProvider;
}());

//# sourceMappingURL=native-google-maps.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
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


var AlertService = (function () {
    function AlertService(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertService.prototype.presentAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK'
                }
            ]
        });
        return alert.present();
    };
    AlertService.prototype.presentErrorAlert = function (message) {
        return this.presentAlert('An error has occurred.', message);
    };
    AlertService.prototype.presentAlertWithCallback = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(false); });
                            return false;
                        }
                    }, {
                        text: 'Yes',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(true); });
                            return false;
                        }
                    }]
            });
            return confirm.present();
        });
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AlertService);
    return AlertService;
}());

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(369);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_imports__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                // App Core
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__app_imports__["b" /* MODULES */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/_home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/accordion-list/accordion-list.module#AccordionListPageModule', name: 'AccordionListPage', segment: 'accordion-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-native/barcode-scanner/barcode-scanner.module#BarcodeScannerPageModule', name: 'BarcodeScannerPage', segment: 'barcode-scanner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-native/credit-card-scan/credit-card-scan.module#CreditCardScanPageModule', name: 'CreditCardScanPage', segment: 'credit-card-scan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-native/get-image/get-image.module#GetImagePageModule', name: 'GetImagePage', segment: 'get-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-native/ionic-native.module#IonicNativePageModule', name: 'IonicNativePage', segment: 'ionic-native', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-native/native-google-maps/native-google-maps.module#NativeGoogleMapsPageModule', name: 'NativeGoogleMapsPage', segment: 'native-google-maps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-native/runtime-permissions/runtime-permissions.module#RuntimePermissionsPageModule', name: 'RuntimePermissionsPage', segment: 'runtime-permissions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/alert/alert.module#AlertsPageModule', name: 'AlertsPage', segment: 'alert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/button/button.module#ButtonsListPageModule', name: 'ButtonsListPage', segment: 'button', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/card/card-background/card-background.module#CardBackgroundPageModule', name: 'CardBackgroundPage', segment: 'card-background', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/card/card-badge/card-badge.module#CardBadgePageModule', name: 'CardBadgePage', segment: 'card-badge', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/card/card-image/card-image.module#CardImagePageModule', name: 'CardImagePage', segment: 'card-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/card/card-map/card-map.module#CardMapPageModule', name: 'CardMapPage', segment: 'card-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/card/card-social/card-social.module#CardSocialPageModule', name: 'CardSocialPage', segment: 'card-social', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/card/card.module#CardListPageModule', name: 'CardsListPage', segment: 'card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/ionic-official-components.module#IonicOfficialComponentsPageModule', name: 'IonicOfficialComponentsPage', segment: 'ionic-official-components', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/crypto-list/crypto-list.module#CryptoListPageModule', name: 'CryptoListPage', segment: 'crypto-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/delete-items/delete-items.module#DeleteItemsPageModule', name: 'DeleteItemsPage', segment: 'delete-items', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListsPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/reactive-list-label/reactive-list-label.module#ReactiveListLabelPageModule', name: 'ReactiveListLabelPage', segment: 'reactive-list-label', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/settings/settings.module#SettingsListPageModule', name: 'SettingsListPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/sliding-item/sliding-item.module#SlidingItemPageModule', name: 'SlidingItemPage', segment: 'sliding-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login-background-slider/login-background-slider.module#LoginBackgroundSliderPageModule', name: 'LoginBackgroundSliderPage', segment: 'login-background-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login-background-video/login-background-video.module#LoginBackgroundVideoPageModule', name: 'LoginBackgroundVideoPage', segment: 'login-background-video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login-instagram/login-instagram.module#LoginInstagramPageModule', name: 'LoginInstagramPage', segment: 'login-instagram', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login-one/login-one.module#LoginOnePageModule', name: 'LoginOnePage', segment: 'login-one', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login-slider/login-slider.module#LoginSliderPageModule', name: 'LoginSliderPage', segment: 'login-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginListPageModule', name: 'LoginListPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/autosizing-textarea/autosizing-textarea.module#AutosizingTextareaPageModule', name: 'AutosizingTextarea', segment: 'autosizing-textarea', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/blog-post/blog-post.module#BlogPostPageModule', name: 'BlogPostPage', segment: 'blog-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/chat/chats.module#ChatsPageModule', name: 'ChatsPage', segment: 'chats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/chat/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/concert-card/concert-card.module#ConcertCardPageModule', name: 'ConcertCardPage', segment: 'concert-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/expandable-header/expandable-header.module#ExpandableHeaderPageModule', name: 'ExpandableHeaderPage', segment: 'expandable-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/countdown/countdown.module#CountdownPageModule', name: 'CountdownPage', segment: 'countdown', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/flash-card/flash-card.module#FlashCardPageModule', name: 'FlashCardPage', segment: 'flash-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/item-ribbon/item-ribbon.module#ItemRibbonPageModule', name: 'ItemRibbonPage', segment: 'item-ribbon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/masonry-cards/masonry-cards.module#MasonryCardsPageModule', name: 'MasonryCardsPage', segment: 'masonry-cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/miscellaneous.module#MiscellaneousListPageModule', name: 'MiscellaneousListPage', segment: 'miscellaneous', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/real-estate-listing/real-estate-listing.module#RealEstateListingPageModule', name: 'RealEstateListingPage', segment: 'real-estate-listing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/testimonials/testimonials.module#TestimonialsPageModule', name: 'TestimonialsPage', segment: 'testimonials', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/tinder-cards/tinder-cards.module#TinderCardsPageModule', name: 'TinderCardsPage', segment: 'tinder-cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-with-navigation/modal-nav/modal-nav.module#ModalNavPageModule', name: 'ModalNavPage', segment: 'modal-nav', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-with-navigation/modal-with-navigation.module#ModalWithNavigationPageModule', name: 'ModalWithNavigationPage', segment: 'modal-with-navigation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-with-navigation/move-document/move-document.module#MoveDocumentPageModule', name: 'MoveDocumentPage', segment: 'move-document', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-fab/popup-fab-modal/popup-fab-modal.module#PopupFabModalPageModule', name: 'PopupFabModalPage', segment: 'popup-fab-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-fab/popup-fab.module#PopupFabPageModule', name: 'PopupFabPage', segment: 'popup-fab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-menu/popup-menu-one/popup-menu-one.module#PopupMenuOnePageModule', name: 'PopupMenuOnePage', segment: 'popup-menu-one', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-menu/popup-menu.module#PopupMenuListPageModule', name: 'PopupMenuListPage', segment: 'popup-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-menu/popup-menu-two/popup-menu-two.module#PopupMenuTwoPageModule', name: 'PopupMenuTwoPage', segment: 'popup-menu-two', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-modal/hint-modal/hint-modal.module#HintModalPageModule', name: 'HintModalPage', segment: 'hint-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-modal/popup-modal.module#PopupModalPageModule', name: 'PopupModalsPage', segment: 'popup-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-modal/signup-modal/signup-modal.module#SignupModalPageModule', name: 'SignupModalPage', segment: 'signup-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-modal/walkthrough-modal/walkthrough-modal.module#WalkthroughModalPageModule', name: 'WalkthroughModalPage', segment: 'walkthrough-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile-five/profile-five.module#ProfileFivePageModule', name: 'ProfileFivePage', segment: 'profile-five', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile-four/profile-four.module#ProfileFourPageModule', name: 'ProfileFourPage', segment: 'profile-four', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile-one/profile-one.module#ProfileOnePageModule', name: 'ProfileOnePage', segment: 'profile-one', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile-settings/profile-settings.module#ProfileSettingsPageModule', name: 'ProfileSettingsPage', segment: 'profile-settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile-three/profile-three.module#ProfileThreePageModule', name: 'ProfileThreePage', segment: 'profile-three', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile-two/profile-two.module#ProfileTwoPageModule', name: 'ProfileTwoPage', segment: 'profile-two', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfileListPageModule', name: 'ProfileListPage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/side-menu/side-menu.module#SideMenuPageModule', name: 'SideMenuPage', segment: 'side-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-carousel/slide-carousel.module#SlideCarouselPageModule', name: 'SlideCarouselPage', segment: 'slide-carousel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-color-changing/slide-color-changing.module#SlideColorChangingPageModule', name: 'SlideColorChangingPage', segment: 'slide-color-changing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-custom-pagination/slide-custom-pagination.module#SlideCustomPaginationPageModule', name: 'SlideCustomPaginationPage', segment: 'slide-custom-pagination', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-free-mode/slide-free-mode.module#SlideFreeModePageModule', name: 'SlideFreeModePage', segment: 'slide-free-mode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-nested/slide-nested.module#SlideNestedPageModule', name: 'SlideNestedPage', segment: 'slide-nested', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-photo-gallery/slide-photo-gallery.module#SlidePhotoGalleryPageModule', name: 'SlidePhotoGalleryPage', segment: 'slide-photo-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-rtl/slide-rtl.module#SlideRightToLeftPageModule', name: 'SlideRightToLeftPage', segment: 'slide-rtl', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-transitions/slide-transitions.module#SlideTransitionsPageModule', name: 'SlideTransitionsPage', segment: 'slide-transitions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-walkthrough/slide-walkthrough.module#SlideWalkthroughPageModule', name: 'SlideWalkthroughPage', segment: 'slide-walkthrough', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slider-list/slider-list.module#SliderListPageModule', name: 'SliderListPage', segment: 'slider-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slider-with-arrows/slider-with-arrows.module#SliderWithArrowsPageModule', name: 'SliderWithArrowsPage', segment: 'slider-with-arrows', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slides.module#SlidesPageModule', name: 'SlidesPage', segment: 'slides', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/theming/theming.module#ThemingPageModule', name: 'ThemingPage', segment: 'theming', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timeline/timeline.module#TimelinePageModule', name: 'TimelinePage', segment: 'timeline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/charts/charts.module#ChartsPageModule', name: 'ChartsPage', segment: 'charts', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_0__shared_module__["a" /* SharedModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__app_imports__["c" /* PROVIDERS */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] }]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pipes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__capitalize_pipe__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moment_pipe__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orderby_pipe__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shorten_pipe__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__temperature_pipe__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var pipes = [
    __WEBPACK_IMPORTED_MODULE_1__capitalize_pipe__["a" /* CapitalizePipe */],
    __WEBPACK_IMPORTED_MODULE_2__moment_pipe__["a" /* MomentPipe */],
    __WEBPACK_IMPORTED_MODULE_3__orderby_pipe__["a" /* OrderByPipe */],
    __WEBPACK_IMPORTED_MODULE_4__shorten_pipe__["a" /* ShortenStringPipe */],
    __WEBPACK_IMPORTED_MODULE_5__temperature_pipe__["a" /* TemperaturePipe */],
];
var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [pipes],
            exports: [pipes]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    // Autocapitalizes the first letter of each word in a phrase.
    // Input: {{'john doe' | capitalize}}
    // Output: John Doe
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            var words = value.split(' ');
            value = words.map(function (word) { return word.substring(0, 1).toUpperCase() + word.substring(1); }).join(' ');
        }
        return value;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MomentPipe = (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, args) {
        args = args || '';
        return args === 'ago' ? __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).fromNow() : __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).format(args);
    };
    MomentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'moment'
        })
    ], MomentPipe);
    return MomentPipe;
}());

//# sourceMappingURL=moment.pipe.js.map

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 120,
	"./af.js": 120,
	"./ar": 121,
	"./ar-dz": 122,
	"./ar-dz.js": 122,
	"./ar-kw": 123,
	"./ar-kw.js": 123,
	"./ar-ly": 124,
	"./ar-ly.js": 124,
	"./ar-ma": 125,
	"./ar-ma.js": 125,
	"./ar-sa": 126,
	"./ar-sa.js": 126,
	"./ar-tn": 127,
	"./ar-tn.js": 127,
	"./ar.js": 121,
	"./az": 128,
	"./az.js": 128,
	"./be": 129,
	"./be.js": 129,
	"./bg": 130,
	"./bg.js": 130,
	"./bm": 131,
	"./bm.js": 131,
	"./bn": 132,
	"./bn.js": 132,
	"./bo": 133,
	"./bo.js": 133,
	"./br": 134,
	"./br.js": 134,
	"./bs": 135,
	"./bs.js": 135,
	"./ca": 136,
	"./ca.js": 136,
	"./cs": 137,
	"./cs.js": 137,
	"./cv": 138,
	"./cv.js": 138,
	"./cy": 139,
	"./cy.js": 139,
	"./da": 140,
	"./da.js": 140,
	"./de": 141,
	"./de-at": 142,
	"./de-at.js": 142,
	"./de-ch": 143,
	"./de-ch.js": 143,
	"./de.js": 141,
	"./dv": 144,
	"./dv.js": 144,
	"./el": 145,
	"./el.js": 145,
	"./en-au": 146,
	"./en-au.js": 146,
	"./en-ca": 147,
	"./en-ca.js": 147,
	"./en-gb": 148,
	"./en-gb.js": 148,
	"./en-ie": 149,
	"./en-ie.js": 149,
	"./en-il": 150,
	"./en-il.js": 150,
	"./en-nz": 151,
	"./en-nz.js": 151,
	"./eo": 152,
	"./eo.js": 152,
	"./es": 153,
	"./es-do": 154,
	"./es-do.js": 154,
	"./es-us": 155,
	"./es-us.js": 155,
	"./es.js": 153,
	"./et": 156,
	"./et.js": 156,
	"./eu": 157,
	"./eu.js": 157,
	"./fa": 158,
	"./fa.js": 158,
	"./fi": 159,
	"./fi.js": 159,
	"./fo": 160,
	"./fo.js": 160,
	"./fr": 161,
	"./fr-ca": 162,
	"./fr-ca.js": 162,
	"./fr-ch": 163,
	"./fr-ch.js": 163,
	"./fr.js": 161,
	"./fy": 164,
	"./fy.js": 164,
	"./gd": 165,
	"./gd.js": 165,
	"./gl": 166,
	"./gl.js": 166,
	"./gom-latn": 167,
	"./gom-latn.js": 167,
	"./gu": 168,
	"./gu.js": 168,
	"./he": 169,
	"./he.js": 169,
	"./hi": 170,
	"./hi.js": 170,
	"./hr": 171,
	"./hr.js": 171,
	"./hu": 172,
	"./hu.js": 172,
	"./hy-am": 173,
	"./hy-am.js": 173,
	"./id": 174,
	"./id.js": 174,
	"./is": 175,
	"./is.js": 175,
	"./it": 176,
	"./it.js": 176,
	"./ja": 177,
	"./ja.js": 177,
	"./jv": 178,
	"./jv.js": 178,
	"./ka": 179,
	"./ka.js": 179,
	"./kk": 180,
	"./kk.js": 180,
	"./km": 181,
	"./km.js": 181,
	"./kn": 182,
	"./kn.js": 182,
	"./ko": 183,
	"./ko.js": 183,
	"./ky": 184,
	"./ky.js": 184,
	"./lb": 185,
	"./lb.js": 185,
	"./lo": 186,
	"./lo.js": 186,
	"./lt": 187,
	"./lt.js": 187,
	"./lv": 188,
	"./lv.js": 188,
	"./me": 189,
	"./me.js": 189,
	"./mi": 190,
	"./mi.js": 190,
	"./mk": 191,
	"./mk.js": 191,
	"./ml": 192,
	"./ml.js": 192,
	"./mn": 193,
	"./mn.js": 193,
	"./mr": 194,
	"./mr.js": 194,
	"./ms": 195,
	"./ms-my": 196,
	"./ms-my.js": 196,
	"./ms.js": 195,
	"./mt": 197,
	"./mt.js": 197,
	"./my": 198,
	"./my.js": 198,
	"./nb": 199,
	"./nb.js": 199,
	"./ne": 200,
	"./ne.js": 200,
	"./nl": 201,
	"./nl-be": 202,
	"./nl-be.js": 202,
	"./nl.js": 201,
	"./nn": 203,
	"./nn.js": 203,
	"./pa-in": 204,
	"./pa-in.js": 204,
	"./pl": 205,
	"./pl.js": 205,
	"./pt": 206,
	"./pt-br": 207,
	"./pt-br.js": 207,
	"./pt.js": 206,
	"./ro": 208,
	"./ro.js": 208,
	"./ru": 209,
	"./ru.js": 209,
	"./sd": 210,
	"./sd.js": 210,
	"./se": 211,
	"./se.js": 211,
	"./si": 212,
	"./si.js": 212,
	"./sk": 213,
	"./sk.js": 213,
	"./sl": 214,
	"./sl.js": 214,
	"./sq": 215,
	"./sq.js": 215,
	"./sr": 216,
	"./sr-cyrl": 217,
	"./sr-cyrl.js": 217,
	"./sr.js": 216,
	"./ss": 218,
	"./ss.js": 218,
	"./sv": 219,
	"./sv.js": 219,
	"./sw": 220,
	"./sw.js": 220,
	"./ta": 221,
	"./ta.js": 221,
	"./te": 222,
	"./te.js": 222,
	"./tet": 223,
	"./tet.js": 223,
	"./tg": 224,
	"./tg.js": 224,
	"./th": 225,
	"./th.js": 225,
	"./tl-ph": 226,
	"./tl-ph.js": 226,
	"./tlh": 227,
	"./tlh.js": 227,
	"./tr": 228,
	"./tr.js": 228,
	"./tzl": 229,
	"./tzl.js": 229,
	"./tzm": 230,
	"./tzm-latn": 231,
	"./tzm-latn.js": 231,
	"./tzm.js": 230,
	"./ug-cn": 232,
	"./ug-cn.js": 232,
	"./uk": 233,
	"./uk.js": 233,
	"./ur": 234,
	"./ur.js": 234,
	"./uz": 235,
	"./uz-latn": 236,
	"./uz-latn.js": 236,
	"./uz.js": 235,
	"./vi": 237,
	"./vi.js": 237,
	"./x-pseudo": 238,
	"./x-pseudo.js": 238,
	"./yo": 239,
	"./yo.js": 239,
	"./zh-cn": 240,
	"./zh-cn.js": 240,
	"./zh-hk": 241,
	"./zh-hk.js": 241,
	"./zh-tw": 242,
	"./zh-tw.js": 242
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 373;

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = (function () {
    function OrderByPipe() {
        this.value = [];
    }
    OrderByPipe_1 = OrderByPipe;
    OrderByPipe.orderByComparator = function (a, b) {
        if (a === null || typeof a === 'undefined') {
            a = 0;
        }
        if (b === null || typeof b === 'undefined') {
            b = 0;
        }
        if ((isNaN(parseFloat(a)) ||
            !isFinite(a)) ||
            (isNaN(parseFloat(b)) || !isFinite(b))) {
            // Isn"t a number so lowercase the string to properly compare
            a = a.toString();
            b = b.toString();
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            }
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
            }
        }
        else {
            // Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b)) {
                return -1;
            }
            if (parseFloat(a) > parseFloat(b)) {
                return 1;
            }
        }
        return 0; // equal each other
    };
    OrderByPipe.prototype.transform = function (input, config) {
        if (config === void 0) { config = '+'; }
        if (!input) {
            return input;
        }
        // make a copy of the input"s reference
        this.value = input.slice();
        var value = this.value;
        if (!Array.isArray(value)) {
            return value;
        }
        if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc_1 = propertyToCheck.substr(0, 1) === '-';
            // Basic array
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
                return !desc_1 ? value.sort() : value.sort().reverse();
            }
            else {
                var property_1 = propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return value.sort(function (a, b) {
                    var aValue = a[property_1];
                    var bValue = b[property_1];
                    var propertySplit = property_1.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    return !desc_1
                        ? OrderByPipe_1.orderByComparator(aValue, bValue)
                        : -OrderByPipe_1.orderByComparator(aValue, bValue);
                });
            }
        }
        else {
            // Loop over property of the array in order and sort
            return value.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) === '-';
                    var property = config[i].substr(0, 1) === '+' || config[i].substr(0, 1) === '-'
                        ? config[i].substr(1)
                        : config[i];
                    var aValue = a[property];
                    var bValue = b[property];
                    var propertySplit = property.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    var comparison = !desc
                        ? OrderByPipe_1.orderByComparator(aValue, bValue)
                        : -OrderByPipe_1.orderByComparator(aValue, bValue);
                    // Don't return 0 yet in case of needing to sort by next property
                    if (comparison !== 0) {
                        return comparison;
                    }
                }
                return 0; // equal each other
            });
        }
    };
    OrderByPipe = OrderByPipe_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'orderBy', pure: false })
    ], OrderByPipe);
    return OrderByPipe;
    var OrderByPipe_1;
}());

//# sourceMappingURL=orderby.pipe.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortenStringPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShortenStringPipe = (function () {
    function ShortenStringPipe() {
    }
    // Shortens the string to a given length.
    // Input: {{'This is a very long string' | shorten:18}}
    // Output: This is a very lon...
    ShortenStringPipe.prototype.transform = function (value, maxWidth, suffix) {
        if (maxWidth === void 0) { maxWidth = 30; }
        if (suffix === void 0) { suffix = '...'; }
        if (value && value.length > maxWidth) {
            value = value.substring(0, maxWidth) + suffix;
        }
        return value;
    };
    ShortenStringPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'shorten'
        })
    ], ShortenStringPipe);
    return ShortenStringPipe;
}());

//# sourceMappingURL=shorten.pipe.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperaturePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TemperaturePipe = (function () {
    function TemperaturePipe() {
    }
    TemperaturePipe.prototype.transform = function (value, args) {
        var c = Math.round(parseInt(value, 10) - 273.15);
        var f = Math.round(parseInt(value, 10) * 9 / 5 - 459.67);
        return args === 'c' ? c + " \u00B0C" : f + " \u00B0F";
    };
    TemperaturePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'temperature'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], TemperaturePipe);
    return TemperaturePipe;
}());

//# sourceMappingURL=temperature.pipe.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export components */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timeline_timeline_module__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__countdown_timer_timer__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timer_progress_timer_progress__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__expandable_header_expandable_header__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flash_card_flash_card__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__accordion_list_accordion_list__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var components = [
    __WEBPACK_IMPORTED_MODULE_3__countdown_timer_timer__["a" /* Timer */],
    __WEBPACK_IMPORTED_MODULE_4__timer_progress_timer_progress__["a" /* TimerProgress */],
    __WEBPACK_IMPORTED_MODULE_5__expandable_header_expandable_header__["a" /* ExpandableHeader */],
    __WEBPACK_IMPORTED_MODULE_6__flash_card_flash_card__["a" /* FlashCardComponent */],
    __WEBPACK_IMPORTED_MODULE_7__accordion_list_accordion_list__["a" /* AccordionListComponent */],
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [components],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */]],
            exports: [components, __WEBPACK_IMPORTED_MODULE_0__timeline_timeline_module__["a" /* TimelineComponentModule */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeline__ = __webpack_require__(442);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TimelineComponentModule = (function () {
    function TimelineComponentModule() {
    }
    TimelineComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_2__timeline__["b" /* TimelineItemComponent */],
                __WEBPACK_IMPORTED_MODULE_2__timeline__["c" /* TimelineTimeComponent */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* IonicModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_2__timeline__["b" /* TimelineItemComponent */],
                __WEBPACK_IMPORTED_MODULE_2__timeline__["c" /* TimelineTimeComponent */],
            ]
        })
    ], TimelineComponentModule);
    return TimelineComponentModule;
}());

//# sourceMappingURL=timeline.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimelineItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TimelineTimeComponent; });
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

var TimelineComponent = (function () {
    function TimelineComponent() {
        this.endIcon = 'ionic';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('endIcon'),
        __metadata("design:type", Object)
    ], TimelineComponent.prototype, "endIcon", void 0);
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timeline',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/components/timeline/timeline.html"*/'<div class="timeline">\n  <ng-content></ng-content>\n\n  <timeline-item>\n    <ion-icon class="" [name]="endIcon"></ion-icon>\n  </timeline-item>\n\n</div>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/components/timeline/timeline.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());

var TimelineItemComponent = (function () {
    function TimelineItemComponent() {
    }
    TimelineItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timeline-item',
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [])
    ], TimelineItemComponent);
    return TimelineItemComponent;
}());

var TimelineTimeComponent = (function () {
    function TimelineTimeComponent() {
        this.time = {};
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('time'),
        __metadata("design:type", Object)
    ], TimelineTimeComponent.prototype, "time", void 0);
    TimelineTimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timeline-time',
            template: '<span>{{time.subtitle}}</span> <span>{{time.title}}</span>'
        }),
        __metadata("design:paramtypes", [])
    ], TimelineTimeComponent);
    return TimelineTimeComponent;
}());

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timer; });
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

var Timer = (function () {
    function Timer() {
    }
    Timer.prototype.ngOnInit = function () {
        this.initTimer();
    };
    Timer.prototype.hasFinished = function () {
        return this.timer.hasFinished;
    };
    Timer.prototype.initTimer = function () {
        if (!this.timeInSeconds) {
            this.timeInSeconds = 0;
        }
        this.timer = {
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    };
    Timer.prototype.startTimer = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    };
    Timer.prototype.pauseTimer = function () {
        this.timer.runTimer = false;
    };
    Timer.prototype.resumeTimer = function () {
        this.startTimer();
    };
    Timer.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.timer.runTimer) {
                return;
            }
            _this.timer.secondsRemaining--;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.secondsRemaining);
            if (_this.timer.secondsRemaining > 0) {
                _this.timerTick();
            }
            else {
                _this.timer.hasFinished = true;
            }
        }, 1000);
    };
    Timer.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(secNum / 3600);
        var minutes = Math.floor((secNum - (hours * 3600)) / 60);
        var seconds = secNum - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? '0' + hours : hours.toString();
        minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
        secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], Timer.prototype, "timeInSeconds", void 0);
    Timer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timer',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/components/countdown-timer/timer.html"*/'<ion-card *ngIf="timer">\n	<ion-card-header>\n		<button ion-button *ngIf="timeInSeconds && timeInSeconds > 0" large block clear class="timer-button x-large">{{timer.displayTime}}</button>\n		<button ion-button *ngIf="!timeInSeconds || timeInSeconds == 0" large block clear class="timer-button">Timer set up incorrectly</button>\n	</ion-card-header>\n	<ion-item *ngIf="timeInSeconds && timeInSeconds > 0">\n		<button ion-button clear class="large" color="danger" (click)="initTimer()" item-start *ngIf="!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished">\n            <ion-icon name="refresh"></ion-icon>\n            Restart\n        </button>\n		<button ion-button clear class="large" (click)="pauseTimer()" item-end *ngIf="timer.runTimer && timer.hasStarted && !timer.hasFinished">\n            <ion-icon name="pause"></ion-icon>\n            Pause\n        </button>\n		<button ion-button clear class="large" (click)="resumeTimer()" item-end *ngIf="!timer.runTimer && timer.hasStarted && !timer.hasFinished">\n            <ion-icon name="play"></ion-icon>\n            Resume\n        </button>\n		<button ion-button clear class="large" (click)="startTimer()" item-end *ngIf="!timer.hasStarted">\n            <ion-icon name="play"></ion-icon>\n            Start\n        </button>\n	</ion-item>\n</ion-card>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/components/countdown-timer/timer.html"*/
        })
    ], Timer);
    return Timer;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerProgress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerProgress = (function () {
    function TimerProgress(sanitizer) {
        this.sanitizer = sanitizer;
    }
    TimerProgress.prototype.ngOnInit = function () {
        this.initTimer();
    };
    TimerProgress.prototype.hasFinished = function () {
        return this.timer.hasFinished;
    };
    TimerProgress.prototype.initProgressBar = function () {
        this.percent = 100;
        this.increment = 180 / 100;
        var progress = 'rotate(' + this.increment * this.percent + 'deg)';
        this.transform = this.sanitizer.bypassSecurityTrustStyle(progress);
        this.fixTransform = this.sanitizer.bypassSecurityTrustStyle(progress);
    };
    TimerProgress.prototype.initTimer = function () {
        this.initProgressBar();
        if (!this.timeInSeconds) {
            this.timeInSeconds = 0;
        }
        this.timer = {
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    };
    TimerProgress.prototype.startTimer = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    };
    TimerProgress.prototype.pauseTimer = function () {
        this.timer.runTimer = false;
    };
    TimerProgress.prototype.resumeTimer = function () {
        this.startTimer();
    };
    TimerProgress.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.timer.runTimer) {
                return;
            }
            _this.timer.secondsRemaining--;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.secondsRemaining);
            _this.percent = _this.timer.secondsRemaining / _this.timer.seconds * 100;
            _this.increment = 180 / 100;
            var progress = 'rotate(' + _this.increment * _this.percent + 'deg)';
            _this.transform = _this.sanitizer.bypassSecurityTrustStyle(progress);
            _this.fixTransform = _this.sanitizer.bypassSecurityTrustStyle(progress);
            if (_this.timer.secondsRemaining > 0) {
                _this.timerTick();
            }
            else {
                _this.timer.hasFinished = true;
            }
        }, 1000);
    };
    TimerProgress.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(secNum / 3600);
        var minutes = Math.floor((secNum - (hours * 3600)) / 60);
        var seconds = secNum - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? '0' + hours : hours.toString();
        minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
        secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TimerProgress.prototype, "timeInSeconds", void 0);
    TimerProgress = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timer-progress',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/components/timer-progress/timer-progress.html"*/'<ion-card *ngIf="timer">\n	<ion-card-header>\n         <div class="radial-progress" data-progress="0">\n            <div class="circle">\n                <div class="mask full" [style.transform]="transform">\n                <div class="fill" [style.transform]="transform"></div>\n                </div>\n                <div class="mask half">\n                <div class="fill" [style.transform]="transform"></div>\n                <div class="fill fix" [style.transform]="fixTransform"></div>\n                </div>\n                <div class="shadow"></div>\n            </div>\n            <div class="inset">\n                <div class="percentage">{{timer.displayTime}}</div>\n            </div>\n        </div>\n		<button ion-button *ngIf="!timeInSeconds || timeInSeconds == 0" large block clear class="timer-button">Timer set up incorrectly</button>\n	</ion-card-header>\n	<ion-item *ngIf="timeInSeconds && timeInSeconds > 0">\n		<button ion-button clear class="large" color="danger" (click)="initTimer()" item-start *ngIf="!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished">\n            <ion-icon name="refresh"></ion-icon>\n            Restart\n        </button>\n		<button ion-button clear class="large" (click)="pauseTimer()" item-end *ngIf="timer.runTimer && timer.hasStarted && !timer.hasFinished">\n            <ion-icon name="pause"></ion-icon>\n            Pause\n        </button>\n		<button ion-button clear class="large" (click)="resumeTimer()" item-end *ngIf="!timer.runTimer && timer.hasStarted && !timer.hasFinished">\n            <ion-icon name="play"></ion-icon>\n            Resume\n        </button>\n		<button ion-button clear class="large" (click)="startTimer()" item-end *ngIf="!timer.hasStarted">\n            <ion-icon name="play"></ion-icon>\n            Start\n        </button>\n	</ion-item>\n</ion-card>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/components/timer-progress/timer-progress.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], TimerProgress);
    return TimerProgress;
}());

//# sourceMappingURL=timer-progress.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableHeader; });
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

var ExpandableHeader = (function () {
    function ExpandableHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ExpandableHeader.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
    };
    ExpandableHeader.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
            for (var _i = 0, _a = _this.element.nativeElement.children; _i < _a.length; _i++) {
                var headerElement = _a[_i];
                var totalHeight = headerElement.offsetTop + headerElement.clientHeight;
                if (totalHeight > _this.newHeaderHeight && !headerElement.isHidden) {
                    headerElement.isHidden = true;
                    _this.renderer.setElementStyle(headerElement, 'opacity', '0');
                }
                else if (totalHeight <= _this.newHeaderHeight && headerElement.isHidden) {
                    headerElement.isHidden = false;
                    _this.renderer.setElementStyle(headerElement, 'opacity', '0.7');
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('scrollArea'),
        __metadata("design:type", Object)
    ], ExpandableHeader.prototype, "scrollArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('headerHeight'),
        __metadata("design:type", Number)
    ], ExpandableHeader.prototype, "headerHeight", void 0);
    ExpandableHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'expandable-header',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/components/expandable-header/expandable-header.html"*/'<ng-content></ng-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/components/expandable-header/expandable-header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ExpandableHeader);
    return ExpandableHeader;
}());

//# sourceMappingURL=expandable-header.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashCardComponent; });
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

var FlashCardComponent = (function () {
    function FlashCardComponent() {
        this.toggled = false;
    }
    FlashCardComponent.prototype.ngAfterViewChecked = function () {
        var frontH = this.fcFront.nativeElement.querySelector('.fc-front').offsetHeight + 40;
        var backH = this.fcBack.nativeElement.querySelector('.fc-back').offsetHeight + 40;
        var h = ((frontH > backH) ? frontH : backH) + 'px';
        this.fcContainer.nativeElement.style.height = h;
        this.fcBack.nativeElement.style.height = h;
        this.fcFront.nativeElement.style.height = h;
    };
    FlashCardComponent.prototype.toggle = function () {
        this.toggled = !this.toggled;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fcContainer'),
        __metadata("design:type", Object)
    ], FlashCardComponent.prototype, "fcContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('front'),
        __metadata("design:type", Object)
    ], FlashCardComponent.prototype, "fcFront", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('back'),
        __metadata("design:type", Object)
    ], FlashCardComponent.prototype, "fcBack", void 0);
    FlashCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'flash-card',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/components/flash-card/flash-card.html"*/'<ion-card class="fc-container" (click)="toggle()" [class.fc-back]="toggled" #fcContainer>\n    <div class="front" #front>\n        <ng-content class="" select=".fc-front"></ng-content>\n    </div>\n \n    <div class="back" #back>\n        <ng-content select=".fc-back"></ng-content>\n    </div>\n</ion-card>'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/components/flash-card/flash-card.html"*/
        })
    ], FlashCardComponent);
    return FlashCardComponent;
}());

//# sourceMappingURL=flash-card.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionListComponent; });
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

var AccordionListComponent = (function () {
    function AccordionListComponent(renderer) {
        this.renderer = renderer;
        this.headerColor = '#F53D3D';
        this.textColor = '#FFF';
        this.contentColor = '#F9F9F9';
        this.hasMargin = true;
    }
    AccordionListComponent.prototype.ngAfterViewInit = function () {
        this.viewHeight = this.elementView.nativeElement.offsetHeight;
        if (!this.expanded) {
            this.renderer.setElementStyle(this.elementView.nativeElement, 'height', 0 + 'px');
        }
    };
    AccordionListComponent.prototype.toggleAccordion = function () {
        this.expanded = !this.expanded;
        var newHeight = this.expanded ? '100%' : '0px';
        this.renderer.setElementStyle(this.elementView.nativeElement, 'height', newHeight);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AccordionListComponent.prototype, "headerColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AccordionListComponent.prototype, "textColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AccordionListComponent.prototype, "contentColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AccordionListComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AccordionListComponent.prototype, "hasMargin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AccordionListComponent.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('accordionContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AccordionListComponent.prototype, "elementView", void 0);
    AccordionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'accordion-list',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/components/accordion-list/accordion-list.html"*/'<ion-list class="accordion-list">\n  <ion-list-header no-lines no-padding>\n    <button ion-item detail-none\n            [style.background]="headerColor"\n            (click)="toggleAccordion()"\n            class="accordion-header"\n            [class.active]="expanded">\n        <ion-icon\n          item-left\n          name="ios-arrow-forward">\n        </ion-icon>\n        {{ title }}\n    </button>\n    <section #accordionContent\n             [style.background]="contentColor"\n             [class.active]="expanded"\n             class="accordion-content">\n      <ng-content></ng-content>\n    </section>\n  </ion-list-header>\n</ion-list>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/components/accordion-list/accordion-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], AccordionListComponent);
    return AccordionListComponent;
}());

//# sourceMappingURL=accordion-list.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidingDrawer; });
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


var SlidingDrawer = (function () {
    function SlidingDrawer(element, renderer, domCtrl, platform) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.platform = platform;
        this.handleHeight = 50;
        this.bounceBack = true;
        this.thresholdTop = 200;
        this.thresholdBottom = 200;
    }
    SlidingDrawer.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.options.handleHeight) {
            this.handleHeight = this.options.handleHeight;
        }
        if (this.options.bounceBack) {
            this.bounceBack = this.options.bounceBack;
        }
        if (this.options.thresholdFromBottom) {
            this.thresholdBottom = this.options.thresholdFromBottom;
        }
        if (this.options.thresholdFromTop) {
            this.thresholdTop = this.options.thresholdFromTop;
        }
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.platform.height() - this.handleHeight + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'padding-top', this.handleHeight + 'px');
        var hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_VERTICAL });
        hammer.on('pan', function (ev) {
            _this.handlePan(ev);
        });
    };
    SlidingDrawer.prototype.handlePan = function (ev) {
        var _this = this;
        var newTop = ev.center.y;
        var bounceToBottom = false;
        var bounceToTop = false;
        if (this.bounceBack && ev.isFinal) {
            var topDiff = newTop - this.thresholdTop;
            var bottomDiff = (this.platform.height() - this.thresholdBottom) - newTop;
            topDiff >= bottomDiff ? bounceToBottom = true : bounceToTop = true;
        }
        if ((newTop < this.thresholdTop && ev.additionalEvent === 'panup') || bounceToTop) {
            this.domCtrl.write(function () {
                _this.renderer.setElementStyle(_this.element.nativeElement, 'transition', 'top 0.5s');
                _this.renderer.setElementStyle(_this.element.nativeElement, 'top', '0px');
            });
        }
        else if (((this.platform.height() - newTop) < this.thresholdBottom && ev.additionalEvent === 'pandown')
            || bounceToBottom) {
            this.domCtrl.write(function () {
                _this.renderer.setElementStyle(_this.element.nativeElement, 'transition', 'top 0.5s');
                _this.renderer.setElementStyle(_this.element.nativeElement, 'top', _this.platform.height() - _this.handleHeight + 'px');
            });
        }
        else {
            this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'none');
            if (newTop > 0 && newTop < (this.platform.height() - this.handleHeight)) {
                if (ev.additionalEvent === 'panup' || ev.additionalEvent === 'pandown') {
                    this.domCtrl.write(function () {
                        _this.renderer.setElementStyle(_this.element.nativeElement, 'top', newTop + 'px');
                    });
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('options'),
        __metadata("design:type", Object)
    ], SlidingDrawer.prototype, "options", void 0);
    SlidingDrawer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sliding-drawer',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/components/sliding-drawer/sliding-drawer.html"*/'<ion-content>\n  <ng-content></ng-content>\n</ion-content>'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/components/sliding-drawer/sliding-drawer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* DomController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]])
    ], SlidingDrawer);
    return SlidingDrawer;
}());

//# sourceMappingURL=sliding-drawer.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autosize; });
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

var Autosize = (function () {
    function Autosize(element) {
        this.element = element;
    }
    Autosize.prototype.onInput = function (textArea) {
        this.adjust();
    };
    Autosize.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    Autosize.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], Autosize.prototype, "onInput", null);
    Autosize = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: 'ion-textarea[autosize]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], Autosize);
    return Autosize;
}());

//# sourceMappingURL=autosize.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashscreen, global, menuCtrl) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashscreen = splashscreen;
        this.global = global;
        this.menuCtrl = menuCtrl;
        this.rootPage = 'HomePage';
        this.activePage = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.placeholder = 'assets/img/avatar/girl-avatar.png';
        this.initializeApp();
        this.rightMenuItems = [
            { icon: 'home', active: true },
            { icon: 'alarm', active: false },
            { icon: 'analytics', active: false },
            { icon: 'archive', active: false },
            { icon: 'basket', active: false },
            { icon: 'body', active: false },
            { icon: 'bookmarks', active: false },
            { icon: 'camera', active: false },
            { icon: 'beer', active: false },
            { icon: 'power', active: false },
        ];
        this.pages = [
            { title: 'Home', component: 'HomePage', active: true, icon: 'home' },
            { title: 'Accordion List', component: 'AccordionListPage', active: false, icon: 'map' },
            { title: 'Ionic Official Components',
                component: 'IonicOfficialComponentsPage', active: false, icon: 'ionic' },
            { title: 'Ionic Native Features', component: 'IonicNativePage', active: false, icon: 'ionic' },
            { title: 'Login', component: 'LoginListPage', active: false, icon: 'archive' },
            { title: 'Lists', component: 'ListPage', active: false, icon: 'body' },
            { title: 'Miscellaneous', component: 'MiscellaneousListPage', active: false, icon: 'bookmarks' },
            { title: 'Modal with Navigation', component: 'ModalWithNavigationPage', active: false, icon: 'book' },
            { title: 'Popup Fab', component: 'PopupFabPage', active: false, icon: 'map' },
            { title: 'Popup Modal', component: 'PopupModalsPage', active: false, icon: 'basket' },
            { title: 'Popup Menu', component: 'PopupMenuListPage', active: false, icon: 'beer' },
            { title: 'Profile', component: 'ProfileListPage', active: false, icon: 'camera' },
            { title: 'Side Menu', component: 'SideMenuPage', active: false, icon: 'bookmark' },
            { title: 'Timeline', component: 'TimelinePage', active: false, icon: 'calendar' },
            { title: 'Slides', component: 'SlidesPage', active: false, icon: 'contact' },
            { title: 'Theming', component: 'ThemingPage', active: false, icon: 'power' },
        ];
        this.activePage.subscribe(function (selectedPage) {
            _this.pages.map(function (page) {
                page.active = page.title === selectedPage.title;
            });
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.global.set('theme', '');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashscreen.hide();
            _this.menuCtrl.enable(false, 'right');
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage.next(page);
    };
    MyApp.prototype.rightMenuClick = function (item) {
        this.rightMenuItems.map(function (menuItem) { return menuItem.active = false; });
        item.active = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/app/app.html"*/'<div class="{{global.state[\'theme\']}}">\n  <!--Default Menu-->\n  <ion-menu [content]="content" id="menu-components">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" [class.highlight]="p.active" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!--Side Menu with avatar-->\n  <ion-menu [content]="content" id="menu-avatar">\n    <ion-content>\n      <div #header>\n        <ion-row style="align-items:center;">\n          <ion-col col-3>\n            <img src="assets/icon/icon-email.svg" />\n            <span class="icon-badge">4</span>\n          </ion-col>\n          <ion-col col-6>\n            <img class="user-avatar round" [src]="chosenPicture || placeholder" onerror="this.src=\'assets/img/avatar/girl-avatar.png\'"\n            />\n          </ion-col>\n          <ion-col col-3>\n            <img src="assets/icon/icon-calendar.svg" />\n          </ion-col>\n        </ion-row>\n        <ion-row style="justify-content: center;">\n          <h3>Paula Bolliger</h3>\n        </ion-row>\n      </div>\n      <ion-list no-lines>\n        <button menuClose ion-item detail-none *ngFor="let p of pages" (click)="openPage(p)">\n          <!--<ion-icon [name]="p.icon" item-left></ion-icon>-->\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!--Right side menu-->\n  <ion-menu side="right" type="push" [content]="content" id="menu-right">\n    <ion-content>\n      <ion-list no-lines>\n        <button menuClose icon-only ion-item detail-none (click)="rightMenuClick(item)" *ngFor="let item of rightMenuItems; let i = index">\n          <div *ngIf="item.active" class="active-menu-item"></div>\n          <ion-icon [name]="item.icon"></ion-icon>\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!--Material Design Menu-->\n  <ion-menu [content]="content" id="menu-material">\n    <ion-content>\n      <div class="menu-header">\n        <!--material-design-background-->\n        <img class="user-avatar round" [src]="chosenPicture || placeholder" onerror="this.src=\'assets/img/avatar/girl-avatar.png\'"\n        />\n        <p class="name">Paula Bolliger</p>\n        <p class="e-mail">pbolliger@email.com</p>\n      </div>\n      <ion-list no-lines>\n        <button menuClose="left" ion-item detail-none *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n</div>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppState */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map