"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./popover.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DraggablePopover = function DraggablePopover(_ref) {
  var open = _ref.open,
    onClose = _ref.onClose,
    anchorElement = _ref.anchorElement,
    position = _ref.position,
    children = _ref.children,
    header = _ref.header;
  var calculatePosition = function calculatePosition() {
    if (position) {
      return {
        left: position.horizontal || 0,
        top: position.vertical || 0
      };
    } else if (anchorElement) {
      var anchorRect = anchorElement.getBoundingClientRect();
      return {
        left: anchorRect.left,
        top: anchorRect.bottom
      };
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  };
  var style = _objectSpread({
    position: "absolute"
  }, calculatePosition());
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, open && /*#__PURE__*/_react["default"].createElement("div", {
    className: "popover",
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "popover_header"
  }, header ? /*#__PURE__*/_react["default"].createElement("h3", null, header) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "handle"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "close_btn",
    onClick: onClose
  }, "X"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "popover_body"
  }, children)));
};
var _default = exports["default"] = DraggablePopover;