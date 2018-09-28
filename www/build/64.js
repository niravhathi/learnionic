webpackJsonp([64],{

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSocialPageModule", function() { return CardSocialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_social__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardSocialPageModule = (function () {
    function CardSocialPageModule() {
    }
    CardSocialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__card_social__["a" /* CardSocialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__card_social__["a" /* CardSocialPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__card_social__["a" /* CardSocialPage */]
            ]
        })
    ], CardSocialPageModule);
    return CardSocialPageModule;
}());

//# sourceMappingURL=card-social.module.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardSocialPage; });
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


var CardSocialPage = (function () {
    function CardSocialPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cards = [
            {
                avatarImageUrl: 'assets/img/avatar/marty-avatar.png',
                postImageUrl: 'assets/img/card/advance-card-bttf.png',
                name: 'Marty Mcfly',
                postText: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
                date: 'November 5, 1955',
                likes: 12,
                comments: 4,
                timestamp: '11h ago'
            },
            {
                avatarImageUrl: 'assets/img/avatar/sarah-avatar.jpg',
                postImageUrl: 'assets/img/card/advance-card-tmntr.jpg',
                name: 'Sarah Connor',
                postText: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.',
                date: 'May 12, 1984',
                likes: 30,
                comments: 64,
                timestamp: '30yr ago'
            },
            {
                avatarImageUrl: 'assets/img/avatar/ian-avatar.png',
                postImageUrl: 'assets/img/card/advance-card-jp.jpg',
                name: 'Dr. Ian Malcolm',
                postText: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.',
                date: 'June 28, 1990',
                likes: 46,
                comments: 66,
                timestamp: '2d ago'
            },
        ];
    }
    CardSocialPage.prototype.imageTapped = function (card) {
        alert(card.name + ' image was tapped.');
    };
    CardSocialPage.prototype.like = function (card) {
        alert(card.name + ' was liked.');
    };
    CardSocialPage.prototype.comment = function (card) {
        alert('Commenting to ' + card.name);
    };
    CardSocialPage.prototype.avatarTapped = function (card) {
        alert(card.name + ' avatar was tapped.');
    };
    CardSocialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-card-social',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/ionic-official-components/card/card-social/card-social.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Social Cards</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor="let card of cards">\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="card.avatarImageUrl" (click)="avatarTapped(card)">\n      </ion-avatar>\n      <h2>{{card.name}}</h2>\n      <p>{{card.date}}</p>\n    </ion-item>\n    <img [src]="card.postImageUrl" (click)="imageTapped(card)">\n    <ion-card-content>\n      <p>{{card.postText}}</p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-left (click)="like(card)">\n        <ion-icon name=\'thumbs-up\'></ion-icon>\n        {{card.likes}} Likes\n      </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-left (click)="comment(card)">\n        <ion-icon name=\'text\'></ion-icon>\n        {{card.comments}} Comments\n      </button>\n      </ion-col>\n      <ion-col center text-center>\n        <ion-note>\n          {{card.timestamp}}\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/ionic-official-components/card/card-social/card-social.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], CardSocialPage);
    return CardSocialPage;
}());

//# sourceMappingURL=card-social.js.map

/***/ })

});
//# sourceMappingURL=64.js.map