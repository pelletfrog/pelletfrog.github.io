webpackHotUpdate("static\\development\\pages\\research.js",{

/***/ "./pages/research.js":
/*!***************************!*\
  !*** ./pages/research.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageGridList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/GridList */ "./node_modules/@material-ui/core/esm/GridList/index.js");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "./node_modules/@material-ui/core/esm/GridListTile/index.js");
var _jsxFileName = "C:\\Users\\TL\\Downloads\\tl_profile\\pages\\research.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import tileData from './tileData';

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: 500,
      height: 450
    }
  };
});
var tileData = [{
  img: '/bg.jpg',
  title: 'Image',
  author: 'author',
  cols: 2
}];
function ImageGridList() {
  _s();

  var _this = this;

  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cellHeight: 200,
    className: classes.gridList,
    cols: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, tileData.map(function (tile) {
    return __jsx(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: tile.img,
      cols: tile.cols || 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: tile.img,
      alt: tile.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }));
  })));
}

_s(ImageGridList, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ImageGridList;

var _c;

$RefreshReg$(_c, "ImageGridList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXNlYXJjaC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJncmlkTGlzdCIsIndpZHRoIiwiaGVpZ2h0IiwidGlsZURhdGEiLCJpbWciLCJ0aXRsZSIsImF1dGhvciIsImNvbHMiLCJJbWFnZUdyaWRMaXN0IiwiY2xhc3NlcyIsIm1hcCIsInRpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUpDLGNBQVEsRUFBRSxNQUZOO0FBR0pDLG9CQUFjLEVBQUUsY0FIWjtBQUlKQyxjQUFRLEVBQUUsUUFKTjtBQUtKQyxxQkFBZSxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkM7QUFMdEMsS0FEaUM7QUFRdkNDLFlBQVEsRUFBRTtBQUNSQyxXQUFLLEVBQUUsR0FEQztBQUVSQyxZQUFNLEVBQUU7QUFGQTtBQVI2QixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQWVBLElBQU1DLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLEtBQUcsRUFBRSxTQURQO0FBRUVDLE9BQUssRUFBRSxPQUZUO0FBR0VDLFFBQU0sRUFBRSxRQUhWO0FBSUVDLE1BQUksRUFBRTtBQUpSLENBRGUsQ0FBakI7QUFTZSxTQUFTQyxhQUFULEdBQXlCO0FBQUE7O0FBQUE7O0FBQ3RDLE1BQU1DLE9BQU8sR0FBR3JCLFNBQVMsRUFBekI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFcUIsT0FBTyxDQUFDbEIsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFBVSxjQUFVLEVBQUUsR0FBdEI7QUFBMkIsYUFBUyxFQUFFa0IsT0FBTyxDQUFDVCxRQUE5QztBQUF3RCxRQUFJLEVBQUUsQ0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRyxRQUFRLENBQUNPLEdBQVQsQ0FBYSxVQUFDQyxJQUFEO0FBQUEsV0FDWixNQUFDLHNFQUFEO0FBQWMsU0FBRyxFQUFFQSxJQUFJLENBQUNQLEdBQXhCO0FBQTZCLFVBQUksRUFBRU8sSUFBSSxDQUFDSixJQUFMLElBQWEsQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFSSxJQUFJLENBQUNQLEdBQWY7QUFBb0IsU0FBRyxFQUFFTyxJQUFJLENBQUNOLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURZO0FBQUEsR0FBYixDQURILENBREYsQ0FERjtBQVdEOztHQWR1QkcsYTtVQUNOcEIsUzs7O0tBRE1vQixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZXNlYXJjaC5qcy5lYjg3MDYwNmMyMzUyODE4OTZmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdCc7XHJcbmltcG9ydCBHcmlkTGlzdFRpbGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlJztcclxuLy8gaW1wb3J0IHRpbGVEYXRhIGZyb20gJy4vdGlsZURhdGEnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgZ3JpZExpc3Q6IHtcclxuICAgIHdpZHRoOiA1MDAsXHJcbiAgICBoZWlnaHQ6IDQ1MCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5cclxuY29uc3QgdGlsZURhdGEgPSBbXHJcbiAge1xyXG4gICAgaW1nOiAnL2JnLmpwZycsXHJcbiAgICB0aXRsZTogJ0ltYWdlJyxcclxuICAgIGF1dGhvcjogJ2F1dGhvcicsXHJcbiAgICBjb2xzOiAyLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZUdyaWRMaXN0KCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8R3JpZExpc3QgY2VsbEhlaWdodD17MjAwfSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZExpc3R9IGNvbHM9ezN9PlxyXG4gICAgICAgIHt0aWxlRGF0YS5tYXAoKHRpbGUpID0+IChcclxuICAgICAgICAgIDxHcmlkTGlzdFRpbGUga2V5PXt0aWxlLmltZ30gY29scz17dGlsZS5jb2xzIHx8IDF9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17dGlsZS5pbWd9IGFsdD17dGlsZS50aXRsZX0gLz5cclxuICAgICAgICAgIDwvR3JpZExpc3RUaWxlPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0dyaWRMaXN0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9