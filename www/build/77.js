webpackJsonp([77],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionListPageModule", function() { return AccordionListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_list__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccordionListPageModule = (function () {
    function AccordionListPageModule() {
    }
    AccordionListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__accordion_list__["a" /* AccordionListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__accordion_list__["a" /* AccordionListPage */]),
                __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__accordion_list__["a" /* AccordionListPage */]
            ]
        })
    ], AccordionListPageModule);
    return AccordionListPageModule;
}());

//# sourceMappingURL=accordion-list.module.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionListPage; });
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


var AccordionListPage = (function () {
    function AccordionListPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [
            {
                name: 'Angra dos Reis, Brazil',
                description: 'Brazil’s visa waiver during the Olympics was a success for one big reason: it encouraged travel beyond the big cities. The tourism board hopes to bring back the waiver, and if you’re planning to take advantage, save time to visit Angra dos Reis, between Rio and São Paulo. This popular Brazilian vacation area is where cariocas go to escape the crowds. “It’s where many of the country’s elite have their beach villas,” says Martin Frankenberg of Matuete, who has access to several of these glamorous rentals. Big changes are coming to the region. In May, Brazilian chain Fasano will open a long-awaited 54-suite hotel in a complex that includes a marina, golf course, restaurants, and a spa. The design is striking, with elevated wooden buildings that look like they’re floating, all with open-air terraces and views of the forest and sea. And the government recently pledged $8 million to improve the infrastructure on Ilha Grande—an island that’s so popular that they’ve had to impose a daily limit on visitors. —Stephanie Wu',
                imageUrl: 'https://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1479915553/angra-dos-reis-brazil-WTG2017.jpg?itok=damBsB9G',
            },
            {
                name: 'Belfast, Northern Ireland',
                description: 'With a growing array of open-air bars, arts venues, and restaurants, Belfast is quickly becoming an attractive destination for travelers. Stay at the design-forward Bullitt Hotel (inspired by the Steve McQueen film), which opened in October with casual, well-appointed rooms and complimentary grab-and-go breakfast granola. Check out arts organization Seedhead, which runs street-art tours and hosts pop-up cabarets around the city. The Michelin-starred OX and EIPIC lead the fine-dining pack, but also visit Permit Room, with its internationally inspired breakfast and locally roasted coffee. Noteworthy new nightlife spots include the Muddlers Club, a stylish restaurant and cocktail bar in the trendy Cathedral Quarter, and Vandal, a graffiti-adorned pizza place that turns into a late-night club, on the top floor of a 17th-century pub.—Nell McShane Wulfhart',
                imageUrl: 'https://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1480711606/belfast-city-hall-northern-ireland-WTG2017.jpg?itok=mCqumH31',
            },
            {
                name: 'Belgrade, Serbia',
                description: 'Since the end of the Yugoslav wars, Belgrade has attracted steady investment—its graffiti-covered neighborhoods are now full of restaurants and bars. You’ll find hearty platters of ćevapi—smoky sausages without casing—and stuffed somborka peppers at Sokače, paprika-laden kebabs at Tri Šešira, and pan-Latin tapas at Toro. But the biggest draw is the growing craft-beer scene (the city has 37 breweries). Don’t miss the Kabinet Supernova IPA at Prohibicija in the bar-filled Savamala district, as well as Kas’s full-bodied pale ales and Salto’s IPA at Bajloni, set in a 100-year-old brewery space in Cetinjska. —Govind Dhar',
                imageUrl: 'https://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1479487289/belgrade-serbia-fortress-WTG2017.jpg?itok=rw8c4Esh',
            },
            {
                name: 'Bermuda',
                description: 'After being hit hard by the financial crisis, Bermuda is shaking itself out of stagnation and attracting a new generation of travelers. In 2014, the island won a bid to host the 35th America’s Cup, the high-profile international sailing race, which takes place this June. The promise of a flood of wealthy visitors—and a loosening of restrictions on foreign investment—has sparked a spate of development. Big news is the $100 million overhaul of the Hamilton Princess & Beach Club, the island’s 132-year-old grande dame, whose revamped rooms have a fresh, contemporary look. The hotel has also added a stellar art collection, a spa, and a restaurant serving locally sourced fare from James Beard Award–winning chef Marcus Samuelsson. Elsewhere on the island, a St. Regis, a lavish Ritz-Carlton Reserve, and the Ariel Sands resort (backed by actors Michael Douglas and Catherine Zeta-Jones) are in the works. —Paola Singer',
                imageUrl: 'https://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1479915553/hamilton-princess-bermuda-WTG2017.jpg?itok=E4sFyZFn',
            }
        ];
    }
    AccordionListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-accordion-list',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/accordion-list/accordion-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Accordion List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Accordion list example - Best places to visit:</p>\n\n  <accordion-list *ngFor="let item of items; let index = index"\n                  [title]="item.name"\n                  textColor="#FFF"\n                  hasMargin="false"\n                  headerColor="#F53D3D"\n                  [expanded]="index === 0">\n    <img [src]="item.imageUrl">\n    <p text-wrap>{{item.description}}</p>\n  </accordion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/example/ionic3-components/src/pages/accordion-list/accordion-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], AccordionListPage);
    return AccordionListPage;
}());

//# sourceMappingURL=accordion-list.js.map

/***/ })

});
//# sourceMappingURL=77.js.map