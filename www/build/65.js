webpackJsonp([65],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardMapPageModule", function() { return CardMapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_map__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardMapPageModule = (function () {
    function CardMapPageModule() {
    }
    CardMapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__card_map__["a" /* CardMapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__card_map__["a" /* CardMapPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__card_map__["a" /* CardMapPage */]
            ]
        })
    ], CardMapPageModule);
    return CardMapPageModule;
}());

//# sourceMappingURL=card-map.module.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardMapPage; });
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


var CardMapPage = (function () {
    function CardMapPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cards = [
            {
                imageUrl: 'assets/img/card/advance-card-map-madison.png',
                name: 'Madison Map',
                ETA: '18 min',
                distance: 2.6,
                places: [
                    {
                        name: 'Museum of Football',
                        address: '11 N. Way St, Madison, WI 53703',
                        icon: 'football'
                    },
                    {
                        name: 'Institute of Fine Cocktails',
                        address: '14 S. Hop Avenue, Madison, WI 53703',
                        icon: 'wine'
                    }
                ]
            },
            {
                imageUrl: 'assets/img/card/advance-card-map-mario.png',
                name: 'Super Mario Map',
                ETA: '3 hr',
                distance: 4.8,
                places: [
                    {
                        name: 'Yoshi\s Island',
                        address: 'Iggy Koopa',
                        icon: 'cloud'
                    },
                    {
                        name: 'Forest of Illusion',
                        address: 'Roy Koopa',
                        icon: 'leaf'
                    }
                ]
            },
            {
                imageUrl: 'assets/img/card/advance-card-map-paris.png',
                name: 'Paris Map',
                ETA: '26 min',
                distance: 8.1,
                places: [
                    {
                        name: 'Museum of Information',
                        address: '44 Rue de Info, 75010 Paris, France',
                        icon: 'information-circle'
                    },
                    {
                        name: 'General Pharmacy',
                        address: '1 Avenue Faux, 75010 Paris, France',
                        icon: 'leaf'
                    }
                ]
            },
        ];
    }
    CardMapPage.prototype.placeTapped = function (place) {
        alert(place.name + ' was tapped.');
    };
    CardMapPage.prototype.getDirections = function (card) {
        alert('Getting directions to ' + card.name);
    };
    CardMapPage.prototype.seeInMap = function (card) {
        alert('Seeing ' + card.name + ' on maps.');
    };
    CardMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-card-map',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/ionic-official-components/card/card-map/card-map.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Card with Maps</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor="let card of cards" class="adv-map">\n    <div class="map-image">\n      <img [src]="card.imageUrl">\n      <ion-fab right top>\n        <button ion-fab class="fab-map pop-in" (click)="seeInMap(card)">\n        <ion-icon name=\'pin\'></ion-icon>\n      </button>\n      </ion-fab>\n    </div>\n    <ion-item *ngFor="let place of card.places" (click)="placeTapped(place)">\n      <ion-icon color="subtle" large item-start [name]=\'place.icon\'></ion-icon>\n      <h2>{{place.name}}</h2>\n      <p>{{place.address}}</p>\n    </ion-item>\n    <ion-item actions>\n      <span item-start ion-text color="secondary" class="item-bold">{{card.ETA}}</span>\n      <span item-start ion-text color="subtle">{{card.distance}}</span>\n      <button ion-button color="primary" clear item-end icon-left (click)="getDirections(card)">\n      <ion-icon name=\'navigate\'></ion-icon>\n      Start\n    </button>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/ionic-official-components/card/card-map/card-map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], CardMapPage);
    return CardMapPage;
}());

//# sourceMappingURL=card-map.js.map

/***/ })

});
//# sourceMappingURL=65.js.map