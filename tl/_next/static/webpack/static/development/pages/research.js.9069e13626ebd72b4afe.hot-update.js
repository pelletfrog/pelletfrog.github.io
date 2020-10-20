webpackHotUpdate("static\\development\\pages\\research.js",{

/***/ "./pages/research.js":
/*!***************************!*\
  !*** ./pages/research.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/GridList */ "./node_modules/@material-ui/core/esm/GridList/index.js");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "./node_modules/@material-ui/core/esm/GridListTile/index.js");
/* harmony import */ var _src_BannerTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/BannerTitle */ "./src/BannerTitle.js");
/* harmony import */ var _src_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/Nav */ "./src/Nav.js");
/* harmony import */ var _src_Copyright__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/Copyright */ "./src/Copyright.js");
var _jsxFileName = "C:\\Users\\TL\\Downloads\\tl_profile\\pages\\research.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











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
var imgData = [{
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
function Index() {
  _s();

  var _this = this;

  var classes = useStyles();
  return __jsx(Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    cellHeight: 200,
    className: classes.gridList,
    cols: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, imgData.map(function (data) {
    return __jsx(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: data.img,
      cols: data.cols || 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: data.img,
      alt: data.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }));
  }))));
}

_s(Index, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Index;

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXNlYXJjaC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJncmlkTGlzdCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1nRGF0YSIsImltZyIsInRpdGxlIiwiYXV0aG9yIiwiY29scyIsIkluZGV4IiwiY2xhc3NlcyIsIm1hcCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsY0FBUSxFQUFFLE1BRk47QUFHSkMsb0JBQWMsRUFBRSxjQUhaO0FBSUpDLGNBQVEsRUFBRSxRQUpOO0FBS0pDLHFCQUFlLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjQyxVQUFkLENBQXlCQztBQUx0QyxLQURpQztBQVF2Q0MsWUFBUSxFQUFFO0FBQ1JDLFdBQUssRUFBRSxHQURDO0FBRVJDLFlBQU0sRUFBRTtBQUZBO0FBUjZCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBZUEsSUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsS0FBRyxFQUFFLFNBRFA7QUFFRUMsT0FBSyxFQUFFLE9BRlQ7QUFHRUMsUUFBTSxFQUFFLFFBSFY7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FEYyxFQU9kO0FBQ0VILEtBQUcsRUFBRSxTQURQO0FBRUVDLE9BQUssRUFBRSxPQUZUO0FBR0VDLFFBQU0sRUFBRSxRQUhWO0FBSUVDLE1BQUksRUFBRTtBQUpSLENBUGMsQ0FBaEI7QUFlZSxTQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQzlCLE1BQU1DLE9BQU8sR0FBR3JCLFNBQVMsRUFBekI7QUFFQSxTQUNFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVxQixPQUFPLENBQUNsQixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFVLGNBQVUsRUFBRSxHQUF0QjtBQUEyQixhQUFTLEVBQUVrQixPQUFPLENBQUNULFFBQTlDO0FBQXdELFFBQUksRUFBRSxDQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLE9BQU8sQ0FBQ08sR0FBUixDQUFZLFVBQUNDLElBQUQ7QUFBQSxXQUNYLE1BQUMsc0VBQUQ7QUFBYyxTQUFHLEVBQUVBLElBQUksQ0FBQ1AsR0FBeEI7QUFBNkIsVUFBSSxFQUFFTyxJQUFJLENBQUNKLElBQUwsSUFBYSxDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVJLElBQUksQ0FBQ1AsR0FBZjtBQUFvQixTQUFHLEVBQUVPLElBQUksQ0FBQ04sS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRFc7QUFBQSxHQUFaLENBREgsQ0FERixDQURGLENBREY7QUFhRDs7R0FoQnVCRyxLO1VBQ05wQixTOzs7S0FETW9CLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJlc2VhcmNoLmpzLjkwNjllMTM2MjZlYmQ3MmI0YWZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBHcmlkTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdCc7XHJcbmltcG9ydCBHcmlkTGlzdFRpbGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlJztcclxuaW1wb3J0IEJhbm5lclRpdGxlIGZyb20gJy4uL3NyYy9CYW5uZXJUaXRsZSc7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vc3JjL05hdic7XHJcbmltcG9ydCBDb3B5cmlnaHQgZnJvbSAnLi4vc3JjL0NvcHlyaWdodCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBncmlkTGlzdDoge1xyXG4gICAgd2lkdGg6IDUwMCxcclxuICAgIGhlaWdodDogNDUwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcblxyXG5jb25zdCBpbWdEYXRhID0gW1xyXG4gIHtcclxuICAgIGltZzogJy8wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICdJbWFnZScsXHJcbiAgICBhdXRob3I6ICdhdXRob3InLFxyXG4gICAgY29sczogMixcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJy8wMi5qcGcnLFxyXG4gICAgdGl0bGU6ICdJbWFnZScsXHJcbiAgICBhdXRob3I6ICdhdXRob3InLFxyXG4gICAgY29sczogMTAsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPEdyaWRMaXN0IGNlbGxIZWlnaHQ9ezIwMH0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRMaXN0fSBjb2xzPXszfT5cclxuICAgICAgICAgIHtpbWdEYXRhLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZExpc3RUaWxlIGtleT17ZGF0YS5pbWd9IGNvbHM9e2RhdGEuY29scyB8fCAxfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWd9IGFsdD17ZGF0YS50aXRsZX0gLz5cclxuICAgICAgICAgICAgPC9HcmlkTGlzdFRpbGU+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWRMaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9