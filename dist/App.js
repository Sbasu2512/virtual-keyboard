"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
require("./App.css");
var _keyboardContainer = _interopRequireDefault(require("./Components/Keyboard/keyboardContainer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // App.js — Demo/Test Only
function App() {
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showVK = _useState4[0],
    setShowVK = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    focusedInputName = _useState6[0],
    setFocusedInputName = _useState6[1];
  var _useState7 = (0, _react.useState)("default"),
    _useState8 = _slicedToArray(_useState7, 2),
    layoutName = _useState8[0],
    setLayoutName = _useState8[1];
  var handleInputChange = function handleInputChange(e) {
    setInputValue(e.target.value);
  };
  var handleInputClick = function handleInputClick(e) {
    if (e.target.name) {
      setFocusedInputName(e.target.name);
      setShowVK(true);
    }
  };
  var onKeyPress = function onKeyPress(btn) {
    if (btn === "{shift}") {
      setLayoutName(function (prev) {
        return prev === "default" ? "Upper" : "default";
      });
      return;
    }
    setInputValue(function (prev) {
      return prev + btn;
    }); // Append input
  };
  var handleVKClose = function handleVKClose() {
    setShowVK(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("header", {
    className: "App-header"
  }, "VK Demo"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Input Text"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "dummy1",
    value: inputValue,
    onChange: handleInputChange,
    onClick: handleInputClick
  }), /*#__PURE__*/React.createElement(_keyboardContainer["default"], {
    changeButtonsDisplay: {
      "{bksp}": "backspace",
      "{enter}": "< enter",
      "@": "at",
      "{space}": "space"
    },
    layoutName: layoutName,
    onClose: handleVKClose,
    show: showVK,
    output: onKeyPress
  })));
}
var _default = exports["default"] = App;