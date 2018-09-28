webpackJsonp([48],{

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageModule", function() { return ChatsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chats__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChatsPageModule = (function () {
    function ChatsPageModule() {
    }
    ChatsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__chats__["a" /* ChatsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__chats__["a" /* ChatsPage */]),
                __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__chats__["a" /* ChatsPage */]
            ]
        })
    ], ChatsPageModule);
    return ChatsPageModule;
}());

//# sourceMappingURL=chats.module.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
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


var ChatsPage = (function () {
    function ChatsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.chats = [{
                imageUrl: 'assets/img/avatar/marty-avatar.png',
                title: 'McFly',
                lastMessage: 'Hey, what happened yesterday?',
                timestamp: new Date()
            },
            {
                imageUrl: 'assets/img/avatar/ian-avatar.png',
                title: 'Venkman',
                lastMessage: 'Sup, dude',
                timestamp: new Date()
            },
            {
                imageUrl: 'assets/img/avatar/sarah-avatar.jpg',
                title: 'Sarah Mcconnor',
                lastMessage: 'You still ow me that pizza.',
                timestamp: new Date()
            }];
    }
    ChatsPage.prototype.viewMessages = function (chat) {
        this.navCtrl.push('MessagesPage', { chatId: chat.id });
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/miscellaneous/chat/chats.html"*/'<ion-header>\n  <ion-navbar primary>\n    <ion-title>\n      Messages\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="chats">\n  <ion-list>\n    <ion-list-header>Today</ion-list-header>\n    <ion-item *ngFor="let chat of chats" (click)="viewMessages(chat)">\n      <ion-avatar item-start>\n        <img [src]="chat.imageUrl">\n      </ion-avatar>\n      <h2>{{chat.title}}</h2>\n      <p>{{chat.lastMessage}}</p>\n      <ion-note item-end>{{chat.timestamp | moment:"hh:mm a" | lowercase}}</ion-note>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>Yesterday</ion-list-header>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar/marty-avatar.png">\n      </ion-avatar>\n      <h2>McFly</h2>\n      <p>Lorem ipsum dolor sit amet..</p>\n      <ion-note item-end>11:11 pm</ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar/marty-avatar.png">\n      </ion-avatar>\n      <h2>McFly</h2>\n      <p>Lorem ipsum dolor sit amet..</p>\n      <ion-note item-end>11:11 pm</ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar/marty-avatar.png">\n      </ion-avatar>\n      <h2>McFly</h2>\n      <p>Lorem ipsum dolor sit amet..</p>\n      <ion-note item-end>11:11 pm</ion-note>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>Last Week</ion-list-header>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar/marty-avatar.png">\n      </ion-avatar>\n      <h2>McFly</h2>\n      <p>Lorem ipsum dolor sit amet..</p>\n      <ion-note item-end>11:11 pm</ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/miscellaneous/chat/chats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ })

});
//# sourceMappingURL=48.js.map