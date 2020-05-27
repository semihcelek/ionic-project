function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutorial-tutorial-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tutorial/tutorial.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tutorial/tutorial.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTutorialTutorialPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content [fullscreen]=\"true\">\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide class=\"step-one\">\n      \n      <ion-img src=\"./assets/slides/Slide-1.png\"></ion-img>\n    </ion-slide>\n    <ion-slide class=\"step-two\">\n      <ion-img src=\"./assets/slides/Slide-2.png\"></ion-img>\n      \n    </ion-slide>\n    <ion-slide class=\"step-three\">\n      <ion-img src=\"./assets/slides/Slide-3.png\"></ion-img>\n      \n      <ion-button expand=\"block\" color=\"secondary\" size=\"large\" [routerLink]=\"['../tabs/tab1']\">Başla</ion-button>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tutorial/tutorial-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/tutorial/tutorial-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: TutorialPageRoutingModule */

  /***/
  function srcAppTutorialTutorialRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialPageRoutingModule", function () {
      return TutorialPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tutorial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tutorial.page */
    "./src/app/tutorial/tutorial.page.ts");

    var routes = [{
      path: '',
      component: _tutorial_page__WEBPACK_IMPORTED_MODULE_3__["TutorialPage"]
    }];

    var TutorialPageRoutingModule = function TutorialPageRoutingModule() {
      _classCallCheck(this, TutorialPageRoutingModule);
    };

    TutorialPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TutorialPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tutorial/tutorial.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tutorial/tutorial.module.ts ***!
    \*********************************************/

  /*! exports provided: TutorialPageModule */

  /***/
  function srcAppTutorialTutorialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function () {
      return TutorialPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tutorial-routing.module */
    "./src/app/tutorial/tutorial-routing.module.ts");
    /* harmony import */


    var _tutorial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tutorial.page */
    "./src/app/tutorial/tutorial.page.ts");

    var TutorialPageModule = function TutorialPageModule() {
      _classCallCheck(this, TutorialPageModule);
    };

    TutorialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__["TutorialPageRoutingModule"]],
      declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]]
    })], TutorialPageModule);
    /***/
  },

  /***/
  "./src/app/tutorial/tutorial.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/tutorial/tutorial.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTutorialTutorialPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slide {\n  height: 100vh;\n  flex-direction: column;\n  text-align: justify;\n}\n\nion-img {\n  max-width: 100vw;\n  max-height: 100vh;\n}\n\n.step-one {\n  background-color: #00fcff;\n}\n\n.step-two {\n  background-color: #ffae00;\n}\n\n.step-three {\n  background-color: #b047f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW1paGNlbGVrL2NldC1hcHAvc3JjL2FwcC90dXRvcmlhbC90dXRvcmlhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3R1dG9yaWFsL3R1dG9yaWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtBQ0dGOztBRERBO0VBQ0UseUJBQUE7QUNJRjs7QURGQTtFQUNJLHlCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC90dXRvcmlhbC90dXRvcmlhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuaW9uLWltZyB7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xufVxuLnN0ZXAtb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmNmZjtcbn1cbi5zdGVwLXR3byB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE3NCwgMCk7XG59XG4uc3RlcC10aHJlZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgNzEsIDI0Nyk7XG59XG4iLCJpb24tc2xpZGUge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5pb24taW1nIHtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgbWF4LWhlaWdodDogMTAwdmg7XG59XG5cbi5zdGVwLW9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZjZmY7XG59XG5cbi5zdGVwLXR3byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFlMDA7XG59XG5cbi5zdGVwLXRocmVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwNDdmNztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tutorial/tutorial.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/tutorial/tutorial.page.ts ***!
    \*******************************************/

  /*! exports provided: TutorialPage */

  /***/
  function srcAppTutorialTutorialPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialPage", function () {
      return TutorialPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TutorialPage = /*#__PURE__*/function () {
      function TutorialPage() {
        _classCallCheck(this, TutorialPage);

        this.slideOpts = {
          initialSlide: 0
        };
      }

      _createClass(TutorialPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TutorialPage;
    }();

    TutorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tutorial',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tutorial.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tutorial/tutorial.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tutorial.page.scss */
      "./src/app/tutorial/tutorial.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TutorialPage);
    /***/
  }
}]);
//# sourceMappingURL=tutorial-tutorial-module-es5.js.map