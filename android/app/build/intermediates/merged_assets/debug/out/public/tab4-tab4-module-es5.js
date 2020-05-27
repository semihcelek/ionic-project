function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCalculatorCalculatorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"calculator\">\n\n  <input type=\"text\" class=\"calculator-screen\" [value]=\"currentNumber\" disabled />\n  \n  <div class=\"calculator-keys\">\n    \n    <button type=\"button\" (click) = \"getOperation('+')\" class=\"operator\" value=\"+\">+</button>\n    <button type=\"button\" (click) = \"getOperation('-')\" class=\"operator\" value=\"-\">-</button>\n    <button type=\"button\" (click) = \"getOperation('*')\" class=\"operator\" value=\"*\">&times;</button>\n    <button type=\"button\" (click) = \"getOperation('/')\" class=\"operator\" value=\"/\">&divide;</button>\n\n    <button type=\"button\" (click) = \"getNumber('7')\" value=\"7\">7</button>\n    <button type=\"button\" (click) = \"getNumber('8')\" value=\"8\">8</button>\n    <button type=\"button\" (click) = \"getNumber('9')\" value=\"9\">9</button>\n\n\n    <button type=\"button\" (click) = \"getNumber('4')\" value=\"4\">4</button>\n    <button type=\"button\" (click) = \"getNumber('5')\" value=\"5\">5</button>\n    <button type=\"button\" (click) = \"getNumber('6')\" value=\"6\">6</button>\n\n\n    <button type=\"button\" (click) = \"getNumber('1')\" value=\"1\">1</button>\n    <button type=\"button\" (click) = \"getNumber('2')\" value=\"2\">2</button>\n    <button type=\"button\" (click) = \"getNumber('3')\" value=\"3\">3</button>\n\n\n    <button type=\"button\" (click) = \"getNumber('0')\" value=\"0\">0</button>\n    <button type=\"button\" (click) = \"getDecimal()\" class=\"decimal\" value=\".\">.</button>\n    <button type=\"button\" (click) = \"clear()\"  class=\"all-clear\" value=\"all-clear\">AC</button>\n\n    <button type=\"button\" (click) = \"getOperation('=')\" class=\"equal-sign\" value=\"=\">=</button>\n\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab4Tab4PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header> \n  <ion-toolbar color=\"secondary\"> \n      <ion-title>Hesapla</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-calculator></app-calculator>\n      \n \n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/calculator/calculator.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/calculator/calculator.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCalculatorCalculatorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".calculator {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n}\n\n.calculator-screen {\n  width: 100%;\n  font-size: 5rem;\n  height: 80px;\n  border: none;\n  background-color: #252525;\n  color: #fff;\n  text-align: right;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\nbutton {\n  height: 60px;\n  background-color: #fff;\n  border-radius: 3px;\n  border: 1px solid #c4c4c4;\n  background-color: transparent;\n  font-size: 2rem;\n  color: #333;\n  background-image: linear-gradient(to bottom, transparent, transparent 50%, rgba(0, 0, 0, 0.04));\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.45), inset 0 -1px 0 0 rgba(255, 255, 255, 0.15), 0 1px 0 0 rgba(255, 255, 255, 0.15);\n  text-shadow: 0 1px rgba(255, 255, 255, 0.4);\n}\n\nbutton:hover {\n  background-color: #eaeaea;\n}\n\n.operator {\n  color: #337cac;\n}\n\n.all-clear {\n  background-color: #f0595f;\n  border-color: #b0353a;\n  color: #fff;\n}\n\n.all-clear:hover {\n  background-color: #f17377;\n}\n\n.equal-sign {\n  background-color: #2e86c0;\n  border-color: #337cac;\n  color: #fff;\n  height: 100%;\n  grid-area: 2/4/6/5;\n}\n\n.equal-sign:hover {\n  background-color: #4e9ed4;\n}\n\n.calculator-keys {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 20px;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW1paGNlbGVrL2NldC1hcHAvc3JjL2FwcC9jYWxjdWxhdG9yL2NhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLCtGQUFBO0VBQ0EsaUxBQUE7RUFDQSwyQ0FBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2FsY3VsYXRvci9jYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGN1bGF0b3Ige1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ1JTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG4gIFxuICAuY2FsY3VsYXRvci1zY3JlZW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MjU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgXG4gIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sdHJhbnNwYXJlbnQsdHJhbnNwYXJlbnQgNTAlLHJnYmEoMCwwLDAsLjA0KSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjA1KSwgaW5zZXQgMCAxcHggMCAwIHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSwgaW5zZXQgMCAtMXB4IDAgMCByZ2JhKDI1NSwyNTUsMjU1LC4xNSksIDAgMXB4IDAgMCByZ2JhKDI1NSwyNTUsMjU1LC4xNSk7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjQpO1xuICB9XG4gIFxuICBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gIH1cbiAgXG4gIC5vcGVyYXRvciB7XG4gICAgY29sb3I6ICMzMzdjYWM7XG4gIH1cbiAgXG4gIC5hbGwtY2xlYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDU5NWY7XG4gICAgYm9yZGVyLWNvbG9yOiAjYjAzNTNhO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAuYWxsLWNsZWFyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE3Mzc3O1xuICB9XG4gIFxuICAuZXF1YWwtc2lnbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlODZjMDtcbiAgICBib3JkZXItY29sb3I6ICMzMzdjYWM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdyaWQtYXJlYTogMiAvIDQgLyA2IC8gNTtcbiAgfVxuICBcbiAgLmVxdWFsLXNpZ246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTllZDQ7XG4gIH1cbiAgXG4gIC5jYWxjdWxhdG9yLWtleXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBncmlkLWdhcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9IiwiLmNhbGN1bGF0b3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLmNhbGN1bGF0b3Itc2NyZWVuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MjU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5idXR0b24ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMCwgMCwgMCwgMC4wNCkpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSwgaW5zZXQgMCAxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIGluc2V0IDAgLTFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgMCAxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIHRleHQtc2hhZG93OiAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG59XG5cbi5vcGVyYXRvciB7XG4gIGNvbG9yOiAjMzM3Y2FjO1xufVxuXG4uYWxsLWNsZWFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwNTk1ZjtcbiAgYm9yZGVyLWNvbG9yOiAjYjAzNTNhO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmFsbC1jbGVhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMTczNzc7XG59XG5cbi5lcXVhbC1zaWduIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlODZjMDtcbiAgYm9yZGVyLWNvbG9yOiAjMzM3Y2FjO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLWFyZWE6IDIvNC82LzU7XG59XG5cbi5lcXVhbC1zaWduOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlOWVkNDtcbn1cblxuLmNhbGN1bGF0b3Ita2V5cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdyaWQtZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/calculator/calculator.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/calculator/calculator.component.ts ***!
    \****************************************************/

  /*! exports provided: CalculatorComponent */

  /***/
  function srcAppCalculatorCalculatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function () {
      return CalculatorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CalculatorComponent = /*#__PURE__*/function () {
      function CalculatorComponent() {
        _classCallCheck(this, CalculatorComponent);

        this.currentNumber = '0';
        this.firstOperand = null;
        this.operator = null;
        this.waitForSecondNumber = false;
      }

      _createClass(CalculatorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getNumber",
        value: function getNumber(v) {
          console.log(v);

          if (this.waitForSecondNumber) {
            this.currentNumber = v;
            this.waitForSecondNumber = false;
          } else {
            this.currentNumber === '0' ? this.currentNumber = v : this.currentNumber += v;
          }
        }
      }, {
        key: "getDecimal",
        value: function getDecimal() {
          if (!this.currentNumber.includes('.')) {
            this.currentNumber += '.';
          }
        }
      }, {
        key: "doCalculation",
        value: function doCalculation(op, secondOp) {
          switch (op) {
            case '+':
              return this.firstOperand += secondOp;

            case '-':
              return this.firstOperand -= secondOp;

            case '*':
              return this.firstOperand *= secondOp;

            case '/':
              return this.firstOperand /= secondOp;

            case '=':
              return secondOp;
          }
        }
      }, {
        key: "getOperation",
        value: function getOperation(op) {
          console.log(op);

          if (this.firstOperand === null) {
            this.firstOperand = Number(this.currentNumber);
          } else if (this.operator) {
            var result = this.doCalculation(this.operator, Number(this.currentNumber));
            this.currentNumber = String(result);
            this.firstOperand = result;
          }

          this.operator = op;
          this.waitForSecondNumber = true;
          console.log(this.firstOperand);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.currentNumber = '0';
          this.firstOperand = null;
          this.operator = null;
          this.waitForSecondNumber = false;
        }
      }]);

      return CalculatorComponent;
    }();

    CalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-calculator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calculator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./calculator.component.scss */
      "./src/app/calculator/calculator.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CalculatorComponent);
    /***/
  },

  /***/
  "./src/app/tab4/tab4-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab4/tab4-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab4PageRoutingModule */

  /***/
  function srcAppTab4Tab4RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function () {
      return Tab4PageRoutingModule;
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


    var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab4.page */
    "./src/app/tab4/tab4.page.ts");

    var routes = [{
      path: '',
      component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
    }];

    var Tab4PageRoutingModule = function Tab4PageRoutingModule() {
      _classCallCheck(this, Tab4PageRoutingModule);
    };

    Tab4PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab4PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab4/tab4.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab4/tab4.module.ts ***!
    \*************************************/

  /*! exports provided: Tab4PageModule */

  /***/
  function srcAppTab4Tab4ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function () {
      return Tab4PageModule;
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


    var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab4-routing.module */
    "./src/app/tab4/tab4-routing.module.ts");
    /* harmony import */


    var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab4.page */
    "./src/app/tab4/tab4.page.ts");
    /* harmony import */


    var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../calculator/calculator.component */
    "./src/app/calculator/calculator.component.ts");

    var Tab4PageModule = function Tab4PageModule() {
      _classCallCheck(this, Tab4PageModule);
    };

    Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab4PageRoutingModule"]],
      declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"], _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_7__["CalculatorComponent"]]
    })], Tab4PageModule);
    /***/
  },

  /***/
  "./src/app/tab4/tab4.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab4/tab4.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab4Tab4PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab4/tab4.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab4/tab4.page.ts ***!
    \***********************************/

  /*! exports provided: Tab4Page */

  /***/
  function srcAppTab4Tab4PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab4Page", function () {
      return Tab4Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Tab4Page = /*#__PURE__*/function () {
      function Tab4Page() {
        _classCallCheck(this, Tab4Page);
      }

      _createClass(Tab4Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Tab4Page;
    }();

    Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab4.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab4.page.scss */
      "./src/app/tab4/tab4.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Tab4Page);
    /***/
  }
}]);
//# sourceMappingURL=tab4-tab4-module-es5.js.map