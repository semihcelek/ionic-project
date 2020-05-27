function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header> \n      <ion-toolbar color=\"secondary\"> \n          <ion-title>Feed</ion-title>\n      </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <div *ngFor=\"let feed of items\" class=\"category-block\"  >\n      <ion-grid>\n          <ion-row>\n             <ion-col size-lg=\"4\" size-md=\"6\" size-xs=\"12\"  *ngFor=\"let content of feed.content\" >\n                \n                  <ion-card >\n                      <ion-card-header>\n                          <ion-card-subtitle>{{ feed.category }}</ion-card-subtitle>\n                          <ion-card-title>Haber: Bloomberg</ion-card-title>\n                      </ion-card-header>\n                      <ion-card-content>\n                  <ion-img src='https://picsum.photos/300/200?random='></ion-img>\n                  {{ content.inside }}</ion-card-content>\n                  </ion-card> \n        </ion-col>\n    </ion-row>\n</ion-grid>\n</div>\n      \n\n    \n\n\n\n   \n         <!-- <ion-row no-padding class=\"category-banner\"> \n              <ion-col button tappable (click)=\"feed.expanded =!feed.expanded\" align-self-center>\n               \n              </ion-col>\n          </ion-row>\n        \n      \n          <ion-slides pager=\"true\" [options]=\"slideOpts\" >\n            <ion-slide *ngFor=\"let content of feed.content\">\n                <ion-card>\n                    <ion-card-header>\n                        <ion-card-subtitle>{{ feed.category }}</ion-card-subtitle>\n                    </ion-card-header>\n                    <ion-card-content>\n                        <ion-img src='https://picsum.photos/300/200?random='></ion-img>\n                        {{ content.inside }}</ion-card-content>\n                </ion-card>\n\n            </ion-slide>\n         \n          </ion-slides>\n         --> \n   \n\n      \n     \n  </ion-content>\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/feed.service.ts":
  /*!*********************************!*\
    !*** ./src/app/feed.service.ts ***!
    \*********************************/

  /*! exports provided: FeedService */

  /***/
  function srcAppFeedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedService", function () {
      return FeedService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FeedService = /*#__PURE__*/function () {
      function FeedService() {
        _classCallCheck(this, FeedService);

        this.data = [{
          category: 'Ekonomik',
          expanded: true,
          content: [{
            id: 0,
            inside: 'Tüketici hakem heyetleri, yılın ilk 4 ayında 180 bin 466 başvuru alırken, 165 bin 84 başvuruyu karara bağladı. Elektronik ortamda gerçekleştirilen başvuru oranı yeni tip koronavirüs (Kovid-19) salgını nedeniyle nisanda yüzde 80 civarında gerçekleşti.'
          }, {
            id: 1,
            inside: 'Gelir Vergisi Genel Tebliği bugün Resmi Gazete de yayımlanarak yürürlüğe girdi. Aralık ayında geçen maddelere dair kafa karışıklığını gidermek için bazı maddelere açıklık getirildi'
          }, {
            id: 2,
            inside: 'Çin in Hubey eyaletine bağlı Vuhan kentinde ortaya çıkan yeni tip koronavirüsün (Kovid-19) dünya genelinde bulaştığı kişi sayısı 5 milyon 688 bin 840’a çıktı'
          }, {
            id: 3,
            inside: 'ABD nin Çin ulusal güvenlik yasasının Hong Kong vatandaşlarını temel hak ve özgürlüklerine tehdit oluşturduğunu belirterek Çinli yetkililere yaptırım uygulanması konusunda çalıştığı belirtildi'
          }, {
            id: 4,
            inside: 'Fitch Ratings, koronavirüs algınının ekonomik etkilerinin derinleşmeye devam ettiğini belirterek, küresel ekonominin bu yıl yüzde 4,6 daralacağını öngörüsünde bulundu'
          }]
        }, {
          category: 'Sosyal',
          expanded: true,
          content: [{
            id: 0,
            inside: 'Coronona insanlarin akil sagligini olumsuz yonde etkiliyor'
          }]
        }];
        this.feed = [];
      }

      _createClass(FeedService, [{
        key: "getData",
        value: function getData() {
          return this.data;
        }
      }, {
        key: "getFeed",
        value: function getFeed() {
          return this.feed;
        }
      }, {
        key: "addFeed",
        value: function addFeed(content) {
          this.feed.push(content);
        }
      }]);

      return FeedService;
    }();

    FeedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FeedService);
    /***/
  },

  /***/
  "./src/app/tab1/tab1-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab1/tab1-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab1PageRoutingModule */

  /***/
  function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
      return Tab1PageRoutingModule;
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


    var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");

    var routes = [{
      path: '',
      component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
    }];

    var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
      _classCallCheck(this, Tab1PageRoutingModule);
    };

    Tab1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab1-routing.module */
    "./src/app/tab1/tab1-routing.module.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW1paGNlbGVrL2NldC1hcHAvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQ0NBIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInJvb3R7XG4tLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn0iLCJyb290IHtcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
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


    var _feed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../feed.service */
    "./src/app/feed.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(feedService, router) {
        _classCallCheck(this, Tab1Page);

        this.feedService = feedService;
        this.router = router;
        this.feed = [];
        this.items = [];
        this.slideOpts = {
          centeredSlides: true,
          slidesPerView: 1.6,
          spaceBetween: 10
        };
      }

      _createClass(Tab1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.feed = this.feedService.getFeed();
          this.items = this.feedService.getData();
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map