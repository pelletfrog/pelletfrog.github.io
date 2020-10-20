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
  img: '/01.png',
  cols: 4
}, {
  img: '/02.png',
  cols: 8
}, {
  img: '/03.png',
  cols: 6
}, {
  img: '/04.png',
  cols: 6
}, {
  img: '/05.png',
  cols: 6
}, {
  img: '/06.png',
  cols: 6
}];
function Index() {
  _s();

  var _this = this;

  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(_src_Nav__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx(_src_BannerTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "\u8CF4\u5A77\u9234\u8001\u5E2B\u500B\u4EBA\u7DB2\u7AD9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    cellHeight: 300,
    cols: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, imgData.map(function (data) {
    return __jsx(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: data.img,
      cols: data.cols || 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: data.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 15
      }
    }));
  }))), __jsx(_src_Copyright__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXNlYXJjaC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJncmlkTGlzdCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1nRGF0YSIsImltZyIsImNvbHMiLCJJbmRleCIsImNsYXNzZXMiLCJtYXAiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUpDLGNBQVEsRUFBRSxNQUZOO0FBR0pDLG9CQUFjLEVBQUUsY0FIWjtBQUlKQyxjQUFRLEVBQUUsUUFKTjtBQUtKQyxxQkFBZSxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkM7QUFMdEMsS0FEaUM7QUFRdkNDLFlBQVEsRUFBRTtBQUNSQyxXQUFLLEVBQUUsR0FEQztBQUVSQyxZQUFNLEVBQUU7QUFGQTtBQVI2QixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQWVBLElBQU1DLE9BQU8sR0FBRyxDQUNkO0FBQ0VDLEtBQUcsRUFBRSxTQURQO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRGMsRUFLZDtBQUNFRCxLQUFHLEVBQUUsU0FEUDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQUxjLEVBU2Q7QUFDRUQsS0FBRyxFQUFFLFNBRFA7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FUYyxFQWFkO0FBQ0VELEtBQUcsRUFBRSxTQURQO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBYmMsRUFpQmQ7QUFDRUQsS0FBRyxFQUFFLFNBRFA7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FqQmMsRUFxQmQ7QUFDRUQsS0FBRyxFQUFFLFNBRFA7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FyQmMsQ0FBaEI7QUEyQmUsU0FBU0MsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUM5QixNQUFNQyxPQUFPLEdBQUduQixTQUFTLEVBQXpCO0FBRUEsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUtFLE1BQUMsd0RBQUQ7QUFDRSxTQUFLLEVBQUMsd0RBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBVUUsTUFBQyxtRUFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyxrRUFBRDtBQUFVLGNBQVUsRUFBRSxHQUF0QjtBQUEyQixRQUFJLEVBQUUsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZSxPQUFPLENBQUNLLEdBQVIsQ0FBWSxVQUFDQyxJQUFEO0FBQUEsV0FDWCxNQUFDLHNFQUFEO0FBQWMsU0FBRyxFQUFFQSxJQUFJLENBQUNMLEdBQXhCO0FBQTZCLFVBQUksRUFBRUssSUFBSSxDQUFDSixJQUFMLElBQWEsQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFSSxJQUFJLENBQUNMLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRFc7QUFBQSxHQUFaLENBREgsQ0FGRixDQVZGLEVBc0JFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixDQURGO0FBMEJEOztHQTdCdUJFLEs7VUFDTmxCLFM7OztLQURNa0IsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmVzZWFyY2guanMuMTkxZGZlZTU2YWRlOWQ1MjE0NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgR3JpZExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3QnO1xyXG5pbXBvcnQgR3JpZExpc3RUaWxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZSc7XHJcbmltcG9ydCBCYW5uZXJUaXRsZSBmcm9tICcuLi9zcmMvQmFubmVyVGl0bGUnO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL3NyYy9OYXYnO1xyXG5pbXBvcnQgQ29weXJpZ2h0IGZyb20gJy4uL3NyYy9Db3B5cmlnaHQnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgZ3JpZExpc3Q6IHtcclxuICAgIHdpZHRoOiA1MDAsXHJcbiAgICBoZWlnaHQ6IDQ1MCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5cclxuY29uc3QgaW1nRGF0YSA9IFtcclxuICB7XHJcbiAgICBpbWc6ICcvMDEucG5nJyxcclxuICAgIGNvbHM6IDQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcvMDIucG5nJyxcclxuICAgIGNvbHM6IDgsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcvMDMucG5nJyxcclxuICAgIGNvbHM6IDYsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcvMDQucG5nJyxcclxuICAgIGNvbHM6IDYsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcvMDUucG5nJyxcclxuICAgIGNvbHM6IDYsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcvMDYucG5nJyxcclxuICAgIGNvbHM6IDYsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgey8qIG5hdiAqL31cclxuICAgICAgPE5hdiAvPlxyXG5cclxuICAgICAgey8qIHRpdGxlICovfVxyXG4gICAgICA8QmFubmVyVGl0bGVcclxuICAgICAgICB0aXRsZT1cIuiztOWpt+mItOiAgeW4q+WAi+S6uue2suermVwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7LyogY29udGV4dCAqL31cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XHJcblxyXG4gICAgICAgIDxHcmlkTGlzdCBjZWxsSGVpZ2h0PXszMDB9IGNvbHM9ezEyfT5cclxuICAgICAgICAgIHtpbWdEYXRhLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZExpc3RUaWxlIGtleT17ZGF0YS5pbWd9IGNvbHM9e2RhdGEuY29scyB8fCAxfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWd9IC8+XHJcbiAgICAgICAgICAgIDwvR3JpZExpc3RUaWxlPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkTGlzdD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIHsvKiBmb290ZXIgKi99XHJcbiAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9