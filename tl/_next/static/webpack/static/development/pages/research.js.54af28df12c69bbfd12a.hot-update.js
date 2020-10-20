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
  title: 'Image',
  author: 'author',
  cols: 2
}, {
  img: '/02.png',
  title: 'Image',
  author: 'author',
  cols: 10
}];
function Index() {
  _s();

  var _this = this;

  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(_src_Nav__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx(_src_BannerTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "\u8CF4\u5A77\u9234\u8001\u5E2B\u500B\u4EBA\u7DB2\u7AD9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    cellHeight: 'auto',
    cols: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, imgData.map(function (data) {
    return __jsx(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: data.img,
      cols: data.cols || 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: data.img,
      alt: data.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }));
  }))), __jsx(_src_Copyright__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXNlYXJjaC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJncmlkTGlzdCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1nRGF0YSIsImltZyIsInRpdGxlIiwiYXV0aG9yIiwiY29scyIsIkluZGV4IiwiY2xhc3NlcyIsIm1hcCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsY0FBUSxFQUFFLE1BRk47QUFHSkMsb0JBQWMsRUFBRSxjQUhaO0FBSUpDLGNBQVEsRUFBRSxRQUpOO0FBS0pDLHFCQUFlLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjQyxVQUFkLENBQXlCQztBQUx0QyxLQURpQztBQVF2Q0MsWUFBUSxFQUFFO0FBQ1JDLFdBQUssRUFBRSxHQURDO0FBRVJDLFlBQU0sRUFBRTtBQUZBO0FBUjZCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBZUEsSUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsS0FBRyxFQUFFLFNBRFA7QUFFRUMsT0FBSyxFQUFFLE9BRlQ7QUFHRUMsUUFBTSxFQUFFLFFBSFY7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FEYyxFQU9kO0FBQ0VILEtBQUcsRUFBRSxTQURQO0FBRUVDLE9BQUssRUFBRSxPQUZUO0FBR0VDLFFBQU0sRUFBRSxRQUhWO0FBSUVDLE1BQUksRUFBRTtBQUpSLENBUGMsQ0FBaEI7QUFlZSxTQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQzlCLE1BQU1DLE9BQU8sR0FBR3JCLFNBQVMsRUFBekI7QUFFQSxTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBS0UsTUFBQyx3REFBRDtBQUNFLFNBQUssRUFBQyx3REFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFVRTtBQUFLLGFBQVMsRUFBRXFCLE9BQU8sQ0FBQ2xCLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRSxNQUFDLGtFQUFEO0FBQVUsY0FBVSxFQUFFLE1BQXRCO0FBQThCLFFBQUksRUFBRSxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dZLE9BQU8sQ0FBQ08sR0FBUixDQUFZLFVBQUNDLElBQUQ7QUFBQSxXQUNYLE1BQUMsc0VBQUQ7QUFBYyxTQUFHLEVBQUVBLElBQUksQ0FBQ1AsR0FBeEI7QUFBNkIsVUFBSSxFQUFFTyxJQUFJLENBQUNKLElBQUwsSUFBYSxDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVJLElBQUksQ0FBQ1AsR0FBZjtBQUFvQixTQUFHLEVBQUVPLElBQUksQ0FBQ04sS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRFc7QUFBQSxHQUFaLENBREgsQ0FaRixDQVZGLEVBZ0NFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhDRixDQURGO0FBb0NEOztHQXZDdUJHLEs7VUFDTnBCLFM7OztLQURNb0IsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmVzZWFyY2guanMuNTRhZjI4ZGYxMmM2OWJiZmQxMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgR3JpZExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3QnO1xyXG5pbXBvcnQgR3JpZExpc3RUaWxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZSc7XHJcbmltcG9ydCBCYW5uZXJUaXRsZSBmcm9tICcuLi9zcmMvQmFubmVyVGl0bGUnO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL3NyYy9OYXYnO1xyXG5pbXBvcnQgQ29weXJpZ2h0IGZyb20gJy4uL3NyYy9Db3B5cmlnaHQnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgZ3JpZExpc3Q6IHtcclxuICAgIHdpZHRoOiA1MDAsXHJcbiAgICBoZWlnaHQ6IDQ1MCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5cclxuY29uc3QgaW1nRGF0YSA9IFtcclxuICB7XHJcbiAgICBpbWc6ICcvMDEucG5nJyxcclxuICAgIHRpdGxlOiAnSW1hZ2UnLFxyXG4gICAgYXV0aG9yOiAnYXV0aG9yJyxcclxuICAgIGNvbHM6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcvMDIucG5nJyxcclxuICAgIHRpdGxlOiAnSW1hZ2UnLFxyXG4gICAgYXV0aG9yOiAnYXV0aG9yJyxcclxuICAgIGNvbHM6IDEwLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIHsvKiBuYXYgKi99XHJcbiAgICAgIDxOYXYgLz5cclxuXHJcbiAgICAgIHsvKiB0aXRsZSAqL31cclxuICAgICAgPEJhbm5lclRpdGxlXHJcbiAgICAgICAgdGl0bGU9XCLos7TlqbfpiLTogIHluKvlgIvkurrntrLnq5lcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgey8qIGNvbnRleHQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cclxuICAgICAgICB7LyogPEdyaWRMaXN0IHNwYWNpbmc9ezE1fSBjZWxsSGVpZ2h0PXs0MDB9IGNvbHM9ezEyfT5cclxuICAgICAge1xyXG4gICAgICAgIGltZ0RhdGEubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgPEdyaWRMaXN0VGlsZSBrZXk9e2l0ZW19IGNvbHM9ezF9PlxyXG4gICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmltZ30gYWx0PXtkYXRhLnRpdGxlfSAvPlxyXG4gICAgICAgICAgPC9HcmlkTGlzdFRpbGU+XHJcbiAgICAgICAgKSlcclxuICAgICAgfVxyXG4gICAgPC9HcmlkTGlzdD4gKi99XHJcblxyXG4gICAgICAgIDxHcmlkTGlzdCBjZWxsSGVpZ2h0PXsnYXV0byd9IGNvbHM9ezEyfT5cclxuICAgICAgICAgIHtpbWdEYXRhLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZExpc3RUaWxlIGtleT17ZGF0YS5pbWd9IGNvbHM9e2RhdGEuY29scyB8fCAxfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWd9IGFsdD17ZGF0YS50aXRsZX0gLz5cclxuICAgICAgICAgICAgPC9HcmlkTGlzdFRpbGU+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWRMaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBmb290ZXIgKi99XHJcbiAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9