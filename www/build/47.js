webpackJsonp([47],{

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__messages__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MessagesPageModule = (function () {
    function MessagesPageModule() {
    }
    MessagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__messages__["a" /* MessagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__messages__["a" /* MessagesPage */]),
                __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__messages__["a" /* MessagesPage */]
            ]
        })
    ], MessagesPageModule);
    return MessagesPageModule;
}());

//# sourceMappingURL=messages.module.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(16);
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



var MessagesPage = (function () {
    function MessagesPage(navCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toUser = {
            _id: '534b8e5aaa5e7afc1b23e69b',
            pic: 'assets/img/avatar/ian-avatar.png',
            username: 'Venkman',
        };
        this.user = {
            _id: '534b8fb2aa5e7afc1b23e69c',
            pic: 'assets/img/avatar/marty-avatar.png',
            username: 'Marty',
        };
        this.doneLoading = false;
        this.messages = [
            {
                _id: 1,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: 'OH CRAP!!'
            },
            {
                _id: 2,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: 'what??'
            },
            {
                _id: 3,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: 'Pretty long message with lots of content'
            },
            {
                _id: 4,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: 'Pretty long message with even way more of lots and lots of content'
            },
            {
                _id: 5,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: 'what??'
            },
            {
                _id: 6,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: 'yes!'
            }
        ];
        this.messageForm = formBuilder.group({
            message: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */]('')
        });
        this.chatBox = '';
    }
    MessagesPage.prototype.send = function (message) {
        var _this = this;
        if (message && message !== '') {
            // this.messageService.sendMessage(chatId, message);
            var messageData = {
                toId: this.toUser._id,
                _id: 6,
                date: new Date(),
                userId: this.user._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: message
            };
            this.messages.push(messageData);
            this.scrollToBottom();
            setTimeout(function () {
                var replyData = {
                    toId: _this.toUser._id,
                    _id: 6,
                    date: new Date(),
                    userId: _this.toUser._id,
                    username: _this.toUser.username,
                    pic: _this.toUser.pic,
                    text: 'Just a quick reply'
                };
                _this.messages.push(replyData);
                _this.scrollToBottom();
            }, 1000);
        }
        this.chatBox = '';
    };
    MessagesPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 100);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Content */])
    ], MessagesPage.prototype, "content", void 0);
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-messages',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/miscellaneous/chat/messages/messages.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Chat</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<div *ngFor="let message of messages" class="message-wrapper" on-hold="onMessageHold($event, $index, message)">\n		<div *ngIf="user._id !== message.userId">\n			<img (click)="viewProfile(message)" class="profile-pic left" [src]="toUser.pic" onerror="onProfilePicError(this)" />\n			<!--  wave-->\n			<div class="chat-bubble left slide-left">\n\n				<div class="message" [innerHTML]="message.text" autolinker>\n				</div>\n\n				<div class="message-detail">\n					<span (click)="viewProfile(message)" class="bold">{{toUser.username}}</span>,\n					<span>{{message.date | moment:"ago" | lowercase}}</span>\n				</div>\n\n			</div>\n		</div>\n\n		<div *ngIf="user._id === message.userId">\n\n			<img (click)="viewProfile(message)" class="profile-pic right" [src]="user.pic" onerror="onProfilePicError(this)" />\n\n			<div class="chat-bubble right slide-right">\n\n				<div class="message" [innerHTML]="message.text" autolinker>\n				</div>\n\n				<div class="message-detail">\n					<span (click)="viewProfile(message)" class="bold">{{user.username}}</span>,\n					<span>{{message.date | moment:"ago" | lowercase}}</span>\n				</div>\n\n			</div>\n\n		</div>\n\n		<div class="cf"></div>\n\n	</div>\n</ion-content>\n<ion-footer>\n	<form [formGroup]="messageForm" (submit)="send(chatBox)" novalidate>\n		<ion-item>\n			<ion-input formControlName="message" [(ngModel)]="chatBox" placeholder="Send {{toUser.username}} a message..."></ion-input>\n			<button ion-button clear (click)="send(chatBox)" item-end><ion-icon class="footer-btn" name="send"></ion-icon></button>\n		</ion-item>\n	</form>\n</ion-footer>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/miscellaneous/chat/messages/messages.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ })

});
//# sourceMappingURL=47.js.map