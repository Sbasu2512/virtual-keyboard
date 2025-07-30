"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./virtualKeyboard.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var internalDefaultLayout = {
  'default': ['` 1 2 3 4 5 6 7 8 9 0 - = bksp', 'tab q w e r t y u i o p [ ] \\', 'lock a s d f g h j k l ; \' enter', 'shift z x c v b n m , . / shift', '.com @ space'],
  'uppercase': ['~ ! @ # $ % ^ &amp; * ( ) _ + bksp', 'tab Q W E R T Y U I O P { } |', 'lock A S D F G H J K L : " enter', 'shift Z X C V B N M &lt; &gt; ? shift', '.com @ space']
};
var VirtualKeyboard = function VirtualKeyboard(_ref) {
  var onKeyPress = _ref.onKeyPress,
    keyboardLayoutName = _ref.keyboardLayoutName,
    customLayout = _ref.customLayout,
    customDisplayBtns = _ref.customDisplayBtns;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    layout = _useState2[0],
    setLayout = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    pressedKey = _useState4[0],
    setPressedKey = _useState4[1];
  (0, _react.useEffect)(function () {
    if (customLayout) {
      if (customDisplayBtns && Object.entries(customDisplayBtns)) {
        setLayout(replaceKeys(customLayout, customDisplayBtns));
      } else {
        setLayout(customLayout);
      }
    } else if (keyboardLayoutName) {
      if (keyboardLayoutName === 'default') {
        if (customDisplayBtns && Object.entries(customDisplayBtns)) {
          setLayout(replaceKeys(internalDefaultLayout["default"], customDisplayBtns));
        } else {
          setLayout(internalDefaultLayout["default"]);
        }
      } else if (keyboardLayoutName === 'Upper') {
        if (customDisplayBtns && Object.entries(customDisplayBtns)) {
          setLayout(replaceKeys(internalDefaultLayout.uppercase, customDisplayBtns));
        } else {
          setLayout(internalDefaultLayout.uppercase);
        }
      }
    } else {
      if (customDisplayBtns && Object.entries(customDisplayBtns)) {
        setLayout(replaceKeys(internalDefaultLayout["default"], customDisplayBtns));
      } else {
        setLayout(internalDefaultLayout["default"]);
      }
    }
  }, [keyboardLayoutName, customDisplayBtns]);
  function replaceKeys(array, replacements) {
    return array.map(function (row) {
      return row.split(' ').map(function (key) {
        return replacements[key] || key;
      }).join(' ');
    });
  }

  // Function to handle key press
  var handleKeyPress = function handleKeyPress(key) {
    setPressedKey(key);
    onKeyPress(key);
    // Remove the class after animation completes
    setTimeout(function () {
      setPressedKey(null);
    }, 300); // Duration should match the CSS animation duration
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "margin_1"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "keyboard container-fluid"
  }, layout.map(function (row, i) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "keyboard_row",
      key: i
    }, row.split(" ").map(function (key, j) {
      return /*#__PURE__*/_react["default"].createElement("button", {
        key: j,
        className: "".concat(pressedKey === key ? 'button_styles_clicked' : 'button_styles', " button"),
        onClick: function onClick() {
          return handleKeyPress(key);
        }
      }, key);
    })));
  })));
};
var _default = exports["default"] = VirtualKeyboard;