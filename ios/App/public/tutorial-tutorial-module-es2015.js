(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutorial-tutorial-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tutorial/tutorial.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tutorial/tutorial.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content [fullscreen]=\"true\">\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide class=\"step-one\">\n      \n      <ion-img src=\"./assets/slides/Slide-1.png\"></ion-img>\n    </ion-slide>\n    <ion-slide class=\"step-two\">\n      <ion-img src=\"./assets/slides/Slide-2.png\"></ion-img>\n      \n    </ion-slide>\n    <ion-slide class=\"step-three\">\n      <ion-img src=\"./assets/slides/Slide-3.png\"></ion-img>\n      \n      <ion-button [routerLink]=\"['../tabs/tab1']\">Başla</ion-button>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tutorial/tutorial-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/tutorial/tutorial-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TutorialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageRoutingModule", function() { return TutorialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutorial.page */ "./src/app/tutorial/tutorial.page.ts");




const routes = [
    {
        path: '',
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_3__["TutorialPage"]
    }
];
let TutorialPageRoutingModule = class TutorialPageRoutingModule {
};
TutorialPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TutorialPageRoutingModule);



/***/ }),

/***/ "./src/app/tutorial/tutorial.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.module.ts ***!
  \*********************************************/
/*! exports provided: TutorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tutorial-routing.module */ "./src/app/tutorial/tutorial-routing.module.ts");
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorial.page */ "./src/app/tutorial/tutorial.page.ts");







let TutorialPageModule = class TutorialPageModule {
};
TutorialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__["TutorialPageRoutingModule"]
        ],
        declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]]
    })
], TutorialPageModule);



/***/ }),

/***/ "./src/app/tutorial/tutorial.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  height: 100vh;\n  flex-direction: column;\n  text-align: justify;\n}\n\nion-img {\n  max-width: 100vw;\n  max-height: 100vh;\n}\n\n.step-one {\n  background-color: #00fcff;\n}\n\n.step-two {\n  background-color: hotpink;\n}\n\n.step-three {\n  background-color: #2bff00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW1paGNlbGVrL2NldC1hcHAvc3JjL2FwcC90dXRvcmlhbC90dXRvcmlhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3R1dG9yaWFsL3R1dG9yaWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtBQ0dGOztBRERBO0VBQ0UseUJBQUE7QUNJRjs7QURGQTtFQUNJLHlCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC90dXRvcmlhbC90dXRvcmlhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuaW9uLWltZyB7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xufVxuLnN0ZXAtb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmNmZjtcbn1cbi5zdGVwLXR3byB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhvdHBpbms7O1xufVxuLnN0ZXAtdGhyZWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgMjU1LCAwKTtcbn1cbiIsImlvbi1zbGlkZSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbmlvbi1pbWcge1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnN0ZXAtb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmNmZjtcbn1cblxuLnN0ZXAtdHdvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcbn1cblxuLnN0ZXAtdGhyZWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJmZjAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tutorial/tutorial.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tutorial/tutorial.page.ts ***!
  \*******************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TutorialPage = class TutorialPage {
    constructor() {
        this.slideOpts = {
            initialSlide: 1,
        };
    }
    ngOnInit() {
    }
};
TutorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tutorial',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tutorial.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tutorial/tutorial.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tutorial.page.scss */ "./src/app/tutorial/tutorial.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TutorialPage);



/***/ })

}]);
//# sourceMappingURL=tutorial-tutorial-module-es2015.js.map