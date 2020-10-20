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
  img: '/01.jpg',
  title: 'Image',
  author: 'author',
  cols: 2
}, {
  img: '/02.jpg',
  title: 'Image',
  author: 'author',
  cols: 10
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
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cellHeight: 200,
    className: classes.gridList,
    cols: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, tileData.map(function (tile) {
    return __jsx(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: tile.img,
      cols: tile.cols || 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: tile.img,
      alt: tile.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXNlYXJjaC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJncmlkTGlzdCIsIndpZHRoIiwiaGVpZ2h0IiwidGlsZURhdGEiLCJpbWciLCJ0aXRsZSIsImF1dGhvciIsImNvbHMiLCJJbWFnZUdyaWRMaXN0IiwiY2xhc3NlcyIsIm1hcCIsInRpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUpDLGNBQVEsRUFBRSxNQUZOO0FBR0pDLG9CQUFjLEVBQUUsY0FIWjtBQUlKQyxjQUFRLEVBQUUsUUFKTjtBQUtKQyxxQkFBZSxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkM7QUFMdEMsS0FEaUM7QUFRdkNDLFlBQVEsRUFBRTtBQUNSQyxXQUFLLEVBQUUsR0FEQztBQUVSQyxZQUFNLEVBQUU7QUFGQTtBQVI2QixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQWVBLElBQU1DLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLEtBQUcsRUFBRSxTQURQO0FBRUVDLE9BQUssRUFBRSxPQUZUO0FBR0VDLFFBQU0sRUFBRSxRQUhWO0FBSUVDLE1BQUksRUFBRTtBQUpSLENBRGUsRUFPZjtBQUNFSCxLQUFHLEVBQUUsU0FEUDtBQUVFQyxPQUFLLEVBQUUsT0FGVDtBQUdFQyxRQUFNLEVBQUUsUUFIVjtBQUlFQyxNQUFJLEVBQUU7QUFKUixDQVBlLENBQWpCO0FBZWUsU0FBU0MsYUFBVCxHQUF5QjtBQUFBOztBQUFBOztBQUN0QyxNQUFNQyxPQUFPLEdBQUdyQixTQUFTLEVBQXpCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRXFCLE9BQU8sQ0FBQ2xCLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQVUsY0FBVSxFQUFFLEdBQXRCO0FBQTJCLGFBQVMsRUFBRWtCLE9BQU8sQ0FBQ1QsUUFBOUM7QUFBd0QsUUFBSSxFQUFFLENBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0csUUFBUSxDQUFDTyxHQUFULENBQWEsVUFBQ0MsSUFBRDtBQUFBLFdBQ1osTUFBQyxzRUFBRDtBQUFjLFNBQUcsRUFBRUEsSUFBSSxDQUFDUCxHQUF4QjtBQUE2QixVQUFJLEVBQUVPLElBQUksQ0FBQ0osSUFBTCxJQUFhLENBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUksSUFBSSxDQUFDUCxHQUFmO0FBQW9CLFNBQUcsRUFBRU8sSUFBSSxDQUFDTixLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEWTtBQUFBLEdBQWIsQ0FESCxDQURGLENBREY7QUFXRDs7R0FkdUJHLGE7VUFDTnBCLFM7OztLQURNb0IsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmVzZWFyY2guanMuZGY3MDIyOGVlMzU3ZDAxZDk5MTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3QnO1xyXG5pbXBvcnQgR3JpZExpc3RUaWxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZSc7XHJcbi8vIGltcG9ydCB0aWxlRGF0YSBmcm9tICcuL3RpbGVEYXRhJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG4gIGdyaWRMaXN0OiB7XHJcbiAgICB3aWR0aDogNTAwLFxyXG4gICAgaGVpZ2h0OiA0NTAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuXHJcbmNvbnN0IHRpbGVEYXRhID0gW1xyXG4gIHtcclxuICAgIGltZzogJy8wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICdJbWFnZScsXHJcbiAgICBhdXRob3I6ICdhdXRob3InLFxyXG4gICAgY29sczogMixcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJy8wMi5qcGcnLFxyXG4gICAgdGl0bGU6ICdJbWFnZScsXHJcbiAgICBhdXRob3I6ICdhdXRob3InLFxyXG4gICAgY29sczogMTAsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlR3JpZExpc3QoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxHcmlkTGlzdCBjZWxsSGVpZ2h0PXsyMDB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkTGlzdH0gY29scz17M30+XHJcbiAgICAgICAge3RpbGVEYXRhLm1hcCgodGlsZSkgPT4gKFxyXG4gICAgICAgICAgPEdyaWRMaXN0VGlsZSBrZXk9e3RpbGUuaW1nfSBjb2xzPXt0aWxlLmNvbHMgfHwgMX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXt0aWxlLmltZ30gYWx0PXt0aWxlLnRpdGxlfSAvPlxyXG4gICAgICAgICAgPC9HcmlkTGlzdFRpbGU+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvR3JpZExpc3Q+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=