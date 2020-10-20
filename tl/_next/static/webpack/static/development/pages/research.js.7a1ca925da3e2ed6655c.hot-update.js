webpackHotUpdate("static\\development\\pages\\research.js",{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js":
false,

/***/ "./node_modules/@material-ui/core/esm/AppBar/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Box/Box.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Box/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Button/Button.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Button/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Container/Container.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Container/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Grid/Grid.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Grid/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/GridList/GridList.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/GridList/GridList.js ***!
  \*****************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'auto',
    listStyle: 'none',
    padding: 0,
    WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.

  }
};
var GridList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function GridList(props, ref) {
  var _props$cellHeight = props.cellHeight,
      cellHeight = _props$cellHeight === void 0 ? 180 : _props$cellHeight,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$cols = props.cols,
      cols = _props$cols === void 0 ? 2 : _props$cols,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'ul' : _props$component,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 4 : _props$spacing,
      style = props.style,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["cellHeight", "children", "classes", "className", "cols", "component", "spacing", "style"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className),
    ref: ref,
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      margin: -spacing / 2
    }, style)
  }, other), react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](child)) {
      return null;
    }

    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_3__["isFragment"])(child)) {
        console.error(["Material-UI: The GridList component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    var childCols = child.props.cols || 1;
    var childRows = child.props.rows || 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](child, {
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        width: "".concat(100 / cols * childCols, "%"),
        height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
        padding: spacing / 2
      }, child.props.style)
    });
  }));
});
 true ? GridList.propTypes = {
  /**
   * Number of px for one cell height.
   * You can set `'auto'` if you want to let the children determine the height.
   */
  cellHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['auto'])]),

  /**
   * Grid Tiles that will be in Grid List.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Number of columns.
   */
  cols: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * Number of px for the spacing between tiles.
   */
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiGridList'
})(GridList));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/GridList/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/GridList/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GridList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridList */ "./node_modules/@material-ui/core/esm/GridList/GridList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _GridList__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/GridListTile/GridListTile.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/GridListTile/GridListTile.js ***!
  \*************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/isMuiElement */ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js");









var styles = {
  /* Styles applied to the root element. */
  root: {
    boxSizing: 'border-box',
    flexShrink: 0
  },

  /* Styles applied to the `div` element that wraps the children. */
  tile: {
    position: 'relative',
    display: 'block',
    // In case it's not rendered with a div.
    height: '100%',
    overflow: 'hidden'
  },

  /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
  imgFullHeight: {
    height: '100%',
    transform: 'translateX(-50%)',
    position: 'relative',
    left: '50%'
  },

  /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
  imgFullWidth: {
    width: '100%',
    position: 'relative',
    transform: 'translateY(-50%)',
    top: '50%'
  }
};

var fit = function fit(imgEl, classes) {
  if (!imgEl || !imgEl.complete) {
    return;
  }

  if (imgEl.width / imgEl.height > imgEl.parentElement.offsetWidth / imgEl.parentElement.offsetHeight) {
    var _imgEl$classList, _imgEl$classList2;

    (_imgEl$classList = imgEl.classList).remove.apply(_imgEl$classList, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.imgFullWidth.split(' ')));

    (_imgEl$classList2 = imgEl.classList).add.apply(_imgEl$classList2, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.imgFullHeight.split(' ')));
  } else {
    var _imgEl$classList3, _imgEl$classList4;

    (_imgEl$classList3 = imgEl.classList).remove.apply(_imgEl$classList3, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.imgFullHeight.split(' ')));

    (_imgEl$classList4 = imgEl.classList).add.apply(_imgEl$classList4, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.imgFullWidth.split(' ')));
  }
};

function ensureImageCover(imgEl, classes) {
  if (!imgEl) {
    return;
  }

  if (imgEl.complete) {
    fit(imgEl, classes);
  } else {
    imgEl.addEventListener('load', function () {
      fit(imgEl, classes);
    });
  }
}

var GridListTile = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function GridListTile(props, ref) {
  // cols rows default values are for docs only
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$cols = props.cols,
      cols = _props$cols === void 0 ? 1 : _props$cols,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'li' : _props$component,
      _props$rows = props.rows,
      rows = _props$rows === void 0 ? 1 : _props$rows,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "cols", "component", "rows"]);

  var imgRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    ensureImageCover(imgRef.current, classes);
  });
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    var handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
      fit(imgRef.current, classes);
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [classes]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: classes.tile
  }, react__WEBPACK_IMPORTED_MODULE_3__["Children"].map(children, function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"](child)) {
      return null;
    }

    if (child.type === 'img' || Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__["default"])(child, ['Image'])) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](child, {
        ref: imgRef
      });
    }

    return child;
  })));
});
 true ? GridListTile.propTypes = {
  /**
   * Theoretically you can pass any node as children, but the main use case is to pass an img,
   * in which case GridListTile takes care of making the image "cover" available space
   * (similar to `background-size: cover` or to `object-fit: cover`).
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Width of the tile in number of grid cells.
   */
  cols: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * Height of the tile in number of grid cells.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiGridListTile'
})(GridListTile));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/GridListTile/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/GridListTile/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GridListTile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridListTile */ "./node_modules/@material-ui/core/esm/GridListTile/GridListTile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _GridListTile__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js":
false,

/***/ "./node_modules/@material-ui/core/esm/IconButton/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Link/Link.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Link/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Paper/Paper.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Paper/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js":
false,

/***/ "./node_modules/@material-ui/core/esm/SvgIcon/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Toolbar/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Typography/Typography.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Typography/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/capitalize.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/debounce.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/debounce.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 166;
  var timeout;

  function debounced() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // eslint-disable-next-line consistent-this
    var that = this;

    var later = function later() {
      func.apply(that, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = function () {
    clearTimeout(timeout);
  };

  return debounced;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/isMuiElement.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isMuiElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](element) && muiNames.indexOf(element.type.muiName) !== -1;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/requirePropFactory.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/setRef.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/useForkRef.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js":
false,

/***/ "./node_modules/@material-ui/icons/Menu.js":
false,

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
false,

/***/ "./node_modules/dom-helpers/esm/addClass.js":
false,

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
false,

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/native-url/dist/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
false,

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
false,

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
false,

/***/ "./node_modules/react-transition-group/esm/Transition.js":
false,

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
false,

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
false,

/***/ "./node_modules/react-transition-group/esm/config.js":
false,

/***/ "./node_modules/react-transition-group/esm/index.js":
false,

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
false,

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false,

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
/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

function ImageGridList() {
  _s();

  var _this = this;

  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cellHeight: 160,
    className: classes.gridList,
    cols: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, tileData.map(function (tile) {
    return __jsx(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: tile.img,
      cols: tile.cols || 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: tile.img,
      alt: tile.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
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

/***/ }),

/***/ "./src/BannerTitle.js":
false,

/***/ "./src/Copyright.js":
false,

/***/ "./src/Link.js":
false,

/***/ "./src/Nav.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0dyaWRMaXN0L0dyaWRMaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vR3JpZExpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9HcmlkTGlzdFRpbGUvR3JpZExpc3RUaWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vR3JpZExpc3RUaWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9pc011aUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVzZWFyY2guanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImp1c3RpZnlDb250ZW50Iiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwiZ3JpZExpc3QiLCJ3aWR0aCIsImhlaWdodCIsIkltYWdlR3JpZExpc3QiLCJjbGFzc2VzIiwidGlsZURhdGEiLCJtYXAiLCJ0aWxlIiwiaW1nIiwiY29scyIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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Y2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJlc2VhcmNoLmpzLjdhMWNhOTI1ZGEzZTJlZDY2NTVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0ZyYWdtZW50IH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnIC8vIEFkZCBpT1MgbW9tZW50dW0gc2Nyb2xsaW5nLlxuXG4gIH1cbn07XG52YXIgR3JpZExpc3QgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBHcmlkTGlzdChwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkY2VsbEhlaWdodCA9IHByb3BzLmNlbGxIZWlnaHQsXG4gICAgICBjZWxsSGVpZ2h0ID0gX3Byb3BzJGNlbGxIZWlnaHQgPT09IHZvaWQgMCA/IDE4MCA6IF9wcm9wcyRjZWxsSGVpZ2h0LFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbHMgPSBwcm9wcy5jb2xzLFxuICAgICAgY29scyA9IF9wcm9wcyRjb2xzID09PSB2b2lkIDAgPyAyIDogX3Byb3BzJGNvbHMsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ3VsJyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkc3BhY2luZyA9IHByb3BzLnNwYWNpbmcsXG4gICAgICBzcGFjaW5nID0gX3Byb3BzJHNwYWNpbmcgPT09IHZvaWQgMCA/IDQgOiBfcHJvcHMkc3BhY2luZyxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2VsbEhlaWdodFwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbHNcIiwgXCJjb21wb25lbnRcIiwgXCJzcGFjaW5nXCIsIFwic3R5bGVcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpLFxuICAgIHJlZjogcmVmLFxuICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICBtYXJnaW46IC1zcGFjaW5nIC8gMlxuICAgIH0sIHN0eWxlKVxuICB9LCBvdGhlciksIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpc0ZyYWdtZW50KGNoaWxkKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgR3JpZExpc3QgY29tcG9uZW50IGRvZXNuJ3QgYWNjZXB0IGEgRnJhZ21lbnQgYXMgYSBjaGlsZC5cIiwgJ0NvbnNpZGVyIHByb3ZpZGluZyBhbiBhcnJheSBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hpbGRDb2xzID0gY2hpbGQucHJvcHMuY29scyB8fCAxO1xuICAgIHZhciBjaGlsZFJvd3MgPSBjaGlsZC5wcm9wcy5yb3dzIHx8IDE7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICAgIHdpZHRoOiBcIlwiLmNvbmNhdCgxMDAgLyBjb2xzICogY2hpbGRDb2xzLCBcIiVcIiksXG4gICAgICAgIGhlaWdodDogY2VsbEhlaWdodCA9PT0gJ2F1dG8nID8gJ2F1dG8nIDogY2VsbEhlaWdodCAqIGNoaWxkUm93cyArIHNwYWNpbmcsXG4gICAgICAgIHBhZGRpbmc6IHNwYWNpbmcgLyAyXG4gICAgICB9LCBjaGlsZC5wcm9wcy5zdHlsZSlcbiAgICB9KTtcbiAgfSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBHcmlkTGlzdC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgcHggZm9yIG9uZSBjZWxsIGhlaWdodC5cbiAgICogWW91IGNhbiBzZXQgYCdhdXRvJ2AgaWYgeW91IHdhbnQgdG8gbGV0IHRoZSBjaGlsZHJlbiBkZXRlcm1pbmUgdGhlIGhlaWdodC5cbiAgICovXG4gIGNlbGxIZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSldKSxcblxuICAvKipcbiAgICogR3JpZCBUaWxlcyB0aGF0IHdpbGwgYmUgaW4gR3JpZCBMaXN0LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBjb2x1bW5zLlxuICAgKi9cbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBweCBmb3IgdGhlIHNwYWNpbmcgYmV0d2VlbiB0aWxlcy5cbiAgICovXG4gIHNwYWNpbmc6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUdyaWRMaXN0J1xufSkoR3JpZExpc3QpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0dyaWRMaXN0JzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uL3V0aWxzL2RlYm91bmNlJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBpc011aUVsZW1lbnQgZnJvbSAnLi4vdXRpbHMvaXNNdWlFbGVtZW50JztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZmxleFNocmluazogMFxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgZGl2YCBlbGVtZW50IHRoYXQgd3JhcHMgdGhlIGNoaWxkcmVuLiAqL1xuICB0aWxlOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAvLyBJbiBjYXNlIGl0J3Mgbm90IHJlbmRlcmVkIHdpdGggYSBkaXYuXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gYW4gYGltZ2AgZWxlbWVudCBjaGlsZCwgaWYgbmVlZGVkIHRvIGVuc3VyZSBpdCBjb3ZlcnMgdGhlIHRpbGUuICovXG4gIGltZ0Z1bGxIZWlnaHQ6IHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBsZWZ0OiAnNTAlJ1xuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIGFuIGBpbWdgIGVsZW1lbnQgY2hpbGQsIGlmIG5lZWRlZCB0byBlbnN1cmUgaXQgY292ZXJzIHRoZSB0aWxlLiAqL1xuICBpbWdGdWxsV2lkdGg6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgIHRvcDogJzUwJSdcbiAgfVxufTtcblxudmFyIGZpdCA9IGZ1bmN0aW9uIGZpdChpbWdFbCwgY2xhc3Nlcykge1xuICBpZiAoIWltZ0VsIHx8ICFpbWdFbC5jb21wbGV0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbWdFbC53aWR0aCAvIGltZ0VsLmhlaWdodCA+IGltZ0VsLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggLyBpbWdFbC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCkge1xuICAgIHZhciBfaW1nRWwkY2xhc3NMaXN0LCBfaW1nRWwkY2xhc3NMaXN0MjtcblxuICAgIChfaW1nRWwkY2xhc3NMaXN0ID0gaW1nRWwuY2xhc3NMaXN0KS5yZW1vdmUuYXBwbHkoX2ltZ0VsJGNsYXNzTGlzdCwgX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMuaW1nRnVsbFdpZHRoLnNwbGl0KCcgJykpKTtcblxuICAgIChfaW1nRWwkY2xhc3NMaXN0MiA9IGltZ0VsLmNsYXNzTGlzdCkuYWRkLmFwcGx5KF9pbWdFbCRjbGFzc0xpc3QyLCBfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3Nlcy5pbWdGdWxsSGVpZ2h0LnNwbGl0KCcgJykpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2ltZ0VsJGNsYXNzTGlzdDMsIF9pbWdFbCRjbGFzc0xpc3Q0O1xuXG4gICAgKF9pbWdFbCRjbGFzc0xpc3QzID0gaW1nRWwuY2xhc3NMaXN0KS5yZW1vdmUuYXBwbHkoX2ltZ0VsJGNsYXNzTGlzdDMsIF90b0NvbnN1bWFibGVBcnJheShjbGFzc2VzLmltZ0Z1bGxIZWlnaHQuc3BsaXQoJyAnKSkpO1xuXG4gICAgKF9pbWdFbCRjbGFzc0xpc3Q0ID0gaW1nRWwuY2xhc3NMaXN0KS5hZGQuYXBwbHkoX2ltZ0VsJGNsYXNzTGlzdDQsIF90b0NvbnN1bWFibGVBcnJheShjbGFzc2VzLmltZ0Z1bGxXaWR0aC5zcGxpdCgnICcpKSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGVuc3VyZUltYWdlQ292ZXIoaW1nRWwsIGNsYXNzZXMpIHtcbiAgaWYgKCFpbWdFbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbWdFbC5jb21wbGV0ZSkge1xuICAgIGZpdChpbWdFbCwgY2xhc3Nlcyk7XG4gIH0gZWxzZSB7XG4gICAgaW1nRWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZpdChpbWdFbCwgY2xhc3Nlcyk7XG4gICAgfSk7XG4gIH1cbn1cblxudmFyIEdyaWRMaXN0VGlsZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEdyaWRMaXN0VGlsZShwcm9wcywgcmVmKSB7XG4gIC8vIGNvbHMgcm93cyBkZWZhdWx0IHZhbHVlcyBhcmUgZm9yIGRvY3Mgb25seVxuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbHMgPSBwcm9wcy5jb2xzLFxuICAgICAgY29scyA9IF9wcm9wcyRjb2xzID09PSB2b2lkIDAgPyAxIDogX3Byb3BzJGNvbHMsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2xpJyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkcm93cyA9IHByb3BzLnJvd3MsXG4gICAgICByb3dzID0gX3Byb3BzJHJvd3MgPT09IHZvaWQgMCA/IDEgOiBfcHJvcHMkcm93cyxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xzXCIsIFwiY29tcG9uZW50XCIsIFwicm93c1wiXSk7XG5cbiAgdmFyIGltZ1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBlbnN1cmVJbWFnZUNvdmVyKGltZ1JlZi5jdXJyZW50LCBjbGFzc2VzKTtcbiAgfSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZVJlc2l6ZSA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZpdChpbWdSZWYuY3VycmVudCwgY2xhc3Nlcyk7XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZVJlc2l6ZS5jbGVhcigpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW2NsYXNzZXNdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRpbGVcbiAgfSwgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ2ltZycgfHwgaXNNdWlFbGVtZW50KGNoaWxkLCBbJ0ltYWdlJ10pKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICByZWY6IGltZ1JlZlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBHcmlkTGlzdFRpbGUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlb3JldGljYWxseSB5b3UgY2FuIHBhc3MgYW55IG5vZGUgYXMgY2hpbGRyZW4sIGJ1dCB0aGUgbWFpbiB1c2UgY2FzZSBpcyB0byBwYXNzIGFuIGltZyxcbiAgICogaW4gd2hpY2ggY2FzZSBHcmlkTGlzdFRpbGUgdGFrZXMgY2FyZSBvZiBtYWtpbmcgdGhlIGltYWdlIFwiY292ZXJcIiBhdmFpbGFibGUgc3BhY2VcbiAgICogKHNpbWlsYXIgdG8gYGJhY2tncm91bmQtc2l6ZTogY292ZXJgIG9yIHRvIGBvYmplY3QtZml0OiBjb3ZlcmApLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBXaWR0aCBvZiB0aGUgdGlsZSBpbiBudW1iZXIgb2YgZ3JpZCBjZWxscy5cbiAgICovXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBIZWlnaHQgb2YgdGhlIHRpbGUgaW4gbnVtYmVyIG9mIGdyaWQgY2VsbHMuXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMubnVtYmVyXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUdyaWRMaXN0VGlsZSdcbn0pKEdyaWRMaXN0VGlsZSk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vR3JpZExpc3RUaWxlJzsiLCIvLyBDb3JyZXNwb25kcyB0byAxMCBmcmFtZXMgYXQgNjAgSHouXG4vLyBBIGZldyBieXRlcyBwYXlsb2FkIG92ZXJoZWFkIHdoZW4gbG9kYXNoL2RlYm91bmNlIGlzIH4zIGtCIGFuZCBkZWJvdW5jZSB+MzAwIEIuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jKSB7XG4gIHZhciB3YWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxNjY7XG4gIHZhciB0aW1lb3V0O1xuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtdGhpc1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uIGxhdGVyKCkge1xuICAgICAgZnVuYy5hcHBseSh0aGF0LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgfVxuXG4gIGRlYm91bmNlZC5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gIH07XG5cbiAgcmV0dXJuIGRlYm91bmNlZDtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc011aUVsZW1lbnQoZWxlbWVudCwgbXVpTmFtZXMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSAmJiBtdWlOYW1lcy5pbmRleE9mKGVsZW1lbnQudHlwZS5tdWlOYW1lKSAhPT0gLTE7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdCc7XHJcbmltcG9ydCBHcmlkTGlzdFRpbGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlJztcclxuLy8gaW1wb3J0IHRpbGVEYXRhIGZyb20gJy4vdGlsZURhdGEnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgZ3JpZExpc3Q6IHtcclxuICAgIHdpZHRoOiA1MDAsXHJcbiAgICBoZWlnaHQ6IDQ1MCxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogVGhlIGV4YW1wbGUgZGF0YSBpcyBzdHJ1Y3R1cmVkIGFzIGZvbGxvd3M6XHJcbiAqXHJcbiAqIGltcG9ydCBpbWFnZSBmcm9tICdwYXRoL3RvL2ltYWdlLmpwZyc7XHJcbiAqIFtldGMuLi5dXHJcbiAqXHJcbiAqIGNvbnN0IHRpbGVEYXRhID0gW1xyXG4gKiAgIHtcclxuICogICAgIGltZzogaW1hZ2UsXHJcbiAqICAgICB0aXRsZTogJ0ltYWdlJyxcclxuICogICAgIGF1dGhvcjogJ2F1dGhvcicsXHJcbiAqICAgICBjb2xzOiAyLFxyXG4gKiAgIH0sXHJcbiAqICAge1xyXG4gKiAgICAgW2V0Yy4uLl1cclxuICogICB9LFxyXG4gKiBdO1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VHcmlkTGlzdCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEdyaWRMaXN0IGNlbGxIZWlnaHQ9ezE2MH0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRMaXN0fSBjb2xzPXszfT5cclxuICAgICAgICB7dGlsZURhdGEubWFwKCh0aWxlKSA9PiAoXHJcbiAgICAgICAgICA8R3JpZExpc3RUaWxlIGtleT17dGlsZS5pbWd9IGNvbHM9e3RpbGUuY29scyB8fCAxfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3RpbGUuaW1nfSBhbHQ9e3RpbGUudGl0bGV9IC8+XHJcbiAgICAgICAgICA8L0dyaWRMaXN0VGlsZT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9HcmlkTGlzdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==