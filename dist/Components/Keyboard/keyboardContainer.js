"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _PopOver = _interopRequireDefault(require("../PopOver"));
var _index = _interopRequireDefault(require("./index"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var VirtualKeyboard = /*#__PURE__*/(0, _react.forwardRef)(function KeyboardContainer(_ref, ref) {
  var show = _ref.show,
    output = _ref.output,
    anchor = _ref.anchor,
    onClose = _ref.onClose,
    layoutName = _ref.layoutName,
    changeButtonsDisplay = _ref.changeButtonsDisplay;
  var keyboard = (0, _react.useRef)();
  var onKeyPress = function onKeyPress(btn) {
    if (output) {
      output(btn);
    }
  };
  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
  return /*#__PURE__*/_react["default"].createElement(_PopOver["default"], {
    open: show,
    onClose: onClose,
    position: anchor,
    header: "Virtual Keyboard",
    anchorElement: ref
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    keyboardRef: function keyboardRef(r) {
      return keyboard.current = r;
    },
    onKeyPress: onKeyPress,
    keyboardLayoutName: layoutName,
    customDisplayBtns: changeButtonsDisplay
  })));
});
var _default = exports["default"] = VirtualKeyboard;