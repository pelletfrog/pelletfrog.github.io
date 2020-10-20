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
function Index() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXNlYXJjaC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJncmlkTGlzdCIsIndpZHRoIiwiaGVpZ2h0IiwidGlsZURhdGEiLCJpbWciLCJ0aXRsZSIsImF1dGhvciIsImNvbHMiLCJJbmRleCIsImNsYXNzZXMiLCJtYXAiLCJ0aWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxjQUFRLEVBQUUsTUFGTjtBQUdKQyxvQkFBYyxFQUFFLGNBSFo7QUFJSkMsY0FBUSxFQUFFLFFBSk47QUFLSkMscUJBQWUsRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDO0FBTHRDLEtBRGlDO0FBUXZDQyxZQUFRLEVBQUU7QUFDUkMsV0FBSyxFQUFFLEdBREM7QUFFUkMsWUFBTSxFQUFFO0FBRkE7QUFSNkIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFlQSxJQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxLQUFHLEVBQUUsU0FEUDtBQUVFQyxPQUFLLEVBQUUsT0FGVDtBQUdFQyxRQUFNLEVBQUUsUUFIVjtBQUlFQyxNQUFJLEVBQUU7QUFKUixDQURlLEVBT2Y7QUFDRUgsS0FBRyxFQUFFLFNBRFA7QUFFRUMsT0FBSyxFQUFFLE9BRlQ7QUFHRUMsUUFBTSxFQUFFLFFBSFY7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FQZSxDQUFqQjtBQWVlLFNBQVNDLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFDOUIsTUFBTUMsT0FBTyxHQUFHckIsU0FBUyxFQUF6QjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVxQixPQUFPLENBQUNsQixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFVLGNBQVUsRUFBRSxHQUF0QjtBQUEyQixhQUFTLEVBQUVrQixPQUFPLENBQUNULFFBQTlDO0FBQXdELFFBQUksRUFBRSxDQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLFFBQVEsQ0FBQ08sR0FBVCxDQUFhLFVBQUNDLElBQUQ7QUFBQSxXQUNaLE1BQUMsc0VBQUQ7QUFBYyxTQUFHLEVBQUVBLElBQUksQ0FBQ1AsR0FBeEI7QUFBNkIsVUFBSSxFQUFFTyxJQUFJLENBQUNKLElBQUwsSUFBYSxDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVJLElBQUksQ0FBQ1AsR0FBZjtBQUFvQixTQUFHLEVBQUVPLElBQUksQ0FBQ04sS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRFk7QUFBQSxHQUFiLENBREgsQ0FERixDQURGO0FBV0Q7O0dBZHVCRyxLO1VBQ05wQixTOzs7S0FETW9CLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJlc2VhcmNoLmpzLmYzZDNhZTNiZTUyNzBmMTFkMDljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEdyaWRMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0JztcclxuaW1wb3J0IEdyaWRMaXN0VGlsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGUnO1xyXG4vLyBpbXBvcnQgdGlsZURhdGEgZnJvbSAnLi90aWxlRGF0YSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBncmlkTGlzdDoge1xyXG4gICAgd2lkdGg6IDUwMCxcclxuICAgIGhlaWdodDogNDUwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcblxyXG5jb25zdCB0aWxlRGF0YSA9IFtcclxuICB7XHJcbiAgICBpbWc6ICcvMDEuanBnJyxcclxuICAgIHRpdGxlOiAnSW1hZ2UnLFxyXG4gICAgYXV0aG9yOiAnYXV0aG9yJyxcclxuICAgIGNvbHM6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcvMDIuanBnJyxcclxuICAgIHRpdGxlOiAnSW1hZ2UnLFxyXG4gICAgYXV0aG9yOiAnYXV0aG9yJyxcclxuICAgIGNvbHM6IDEwLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEdyaWRMaXN0IGNlbGxIZWlnaHQ9ezIwMH0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRMaXN0fSBjb2xzPXszfT5cclxuICAgICAgICB7dGlsZURhdGEubWFwKCh0aWxlKSA9PiAoXHJcbiAgICAgICAgICA8R3JpZExpc3RUaWxlIGtleT17dGlsZS5pbWd9IGNvbHM9e3RpbGUuY29scyB8fCAxfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3RpbGUuaW1nfSBhbHQ9e3RpbGUudGl0bGV9IC8+XHJcbiAgICAgICAgICA8L0dyaWRMaXN0VGlsZT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9HcmlkTGlzdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==