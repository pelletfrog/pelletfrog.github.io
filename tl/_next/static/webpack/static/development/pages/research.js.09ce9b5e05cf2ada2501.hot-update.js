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
    },
    imgTitle: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#B21016'
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
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx(_src_Nav__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx(_src_BannerTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "\u8CF4\u5A77\u9234\u8001\u5E2B\u500B\u4EBA\u7DB2\u7AD9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h2",
    gutterBottom: true,
    className: classes.imgTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, "\u79D1\u5B78\u8ABF\u67E5\u5BE6\u9A57\u5BA4 - \u795E\u79D8\u7684\u6469\u96FB\u7403"), __jsx(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    cellHeight: 300,
    cols: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, imgData.map(function (data) {
    return __jsx(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: data.img,
      cols: data.cols || 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: data.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }
    }));
  }))), __jsx(_src_Copyright__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXNlYXJjaC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJncmlkTGlzdCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1nVGl0bGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsImltZ0RhdGEiLCJpbWciLCJjb2xzIiwiSW5kZXgiLCJjbGFzc2VzIiwibWFwIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxjQUFRLEVBQUUsTUFGTjtBQUdKQyxvQkFBYyxFQUFFLGNBSFo7QUFJSkMsY0FBUSxFQUFFLFFBSk47QUFLSkMscUJBQWUsRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDO0FBTHRDLEtBRGlDO0FBUXZDQyxZQUFRLEVBQUU7QUFDUkMsV0FBSyxFQUFFLEdBREM7QUFFUkMsWUFBTSxFQUFFO0FBRkEsS0FSNkI7QUFZdkNDLFlBQVEsRUFBRTtBQUNSQyxjQUFRLEVBQUUsTUFERjtBQUVSQyxnQkFBVSxFQUFFLEtBRko7QUFHUkMsV0FBSyxFQUFFO0FBSEM7QUFaNkIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFvQkEsSUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsS0FBRyxFQUFFLFNBRFA7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FEYyxFQUtkO0FBQ0VELEtBQUcsRUFBRSxTQURQO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBTGMsRUFTZDtBQUNFRCxLQUFHLEVBQUUsU0FEUDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQVRjLEVBYWQ7QUFDRUQsS0FBRyxFQUFFLFNBRFA7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FiYyxFQWlCZDtBQUNFRCxLQUFHLEVBQUUsU0FEUDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQWpCYyxFQXFCZDtBQUNFRCxLQUFHLEVBQUUsU0FEUDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQXJCYyxDQUFoQjtBQTJCZSxTQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQzlCLE1BQU1DLE9BQU8sR0FBR3ZCLFNBQVMsRUFBekI7QUFFQSxTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBS0UsTUFBQyx3REFBRDtBQUNFLFNBQUssRUFBQyx3REFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFVRSxNQUFDLG1FQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLG9FQUFEO0FBQ00sV0FBTyxFQUFDLElBRGQ7QUFFTSxnQkFBWSxNQUZsQjtBQUdNLGFBQVMsRUFBRXVCLE9BQU8sQ0FBQ1IsUUFIekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RkFEQSxFQVFFLE1BQUMsa0VBQUQ7QUFBVSxjQUFVLEVBQUUsR0FBdEI7QUFBMkIsUUFBSSxFQUFFLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0ksT0FBTyxDQUFDSyxHQUFSLENBQVksVUFBQ0MsSUFBRDtBQUFBLFdBQ1gsTUFBQyxzRUFBRDtBQUFjLFNBQUcsRUFBRUEsSUFBSSxDQUFDTCxHQUF4QjtBQUE2QixVQUFJLEVBQUVLLElBQUksQ0FBQ0osSUFBTCxJQUFhLENBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUksSUFBSSxDQUFDTCxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURXO0FBQUEsR0FBWixDQURILENBUkYsQ0FWRixFQTRCRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1QkYsQ0FERjtBQWdDRDs7R0FuQ3VCRSxLO1VBQ050QixTOzs7S0FETXNCLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJlc2VhcmNoLmpzLjA5Y2U5YjVlMDVjZjJhZGEyNTAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IEdyaWRMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0JztcclxuaW1wb3J0IEdyaWRMaXN0VGlsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGUnO1xyXG5pbXBvcnQgQmFubmVyVGl0bGUgZnJvbSAnLi4vc3JjL0Jhbm5lclRpdGxlJztcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9zcmMvTmF2JztcclxuaW1wb3J0IENvcHlyaWdodCBmcm9tICcuLi9zcmMvQ29weXJpZ2h0JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG4gIGdyaWRMaXN0OiB7XHJcbiAgICB3aWR0aDogNTAwLFxyXG4gICAgaGVpZ2h0OiA0NTAsXHJcbiAgfSxcclxuICBpbWdUaXRsZToge1xyXG4gICAgZm9udFNpemU6ICcyNHB4JyxcclxuICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgY29sb3I6ICcjQjIxMDE2JyxcclxuICB9LFxyXG59KSk7XHJcblxyXG5cclxuY29uc3QgaW1nRGF0YSA9IFtcclxuICB7XHJcbiAgICBpbWc6ICcvMDEucG5nJyxcclxuICAgIGNvbHM6IDQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcvMDIucG5nJyxcclxuICAgIGNvbHM6IDgsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcvMDMucG5nJyxcclxuICAgIGNvbHM6IDYsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcvMDQucG5nJyxcclxuICAgIGNvbHM6IDYsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcvMDUucG5nJyxcclxuICAgIGNvbHM6IDYsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcvMDYucG5nJyxcclxuICAgIGNvbHM6IDYsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgey8qIG5hdiAqL31cclxuICAgICAgPE5hdiAvPlxyXG5cclxuICAgICAgey8qIHRpdGxlICovfVxyXG4gICAgICA8QmFubmVyVGl0bGVcclxuICAgICAgICB0aXRsZT1cIuiztOWpt+mItOiAgeW4q+WAi+S6uue2suermVwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7LyogY29udGV4dCAqL31cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XHJcbiAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoMlwiXHJcbiAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nVGl0bGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIOenkeWtuOiqv+afpeWvpumpl+WupCAtIOelnuenmOeahOaRqembu+eQg1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxHcmlkTGlzdCBjZWxsSGVpZ2h0PXszMDB9IGNvbHM9ezEyfT5cclxuICAgICAgICAgIHtpbWdEYXRhLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZExpc3RUaWxlIGtleT17ZGF0YS5pbWd9IGNvbHM9e2RhdGEuY29scyB8fCAxfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWd9IC8+XHJcbiAgICAgICAgICAgIDwvR3JpZExpc3RUaWxlPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkTGlzdD5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICB7LyogZm9vdGVyICovfVxyXG4gICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==