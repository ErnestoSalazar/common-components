"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  var message = _ref.message,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick
  }, " ", message);
}

Button.propTypes = {
  message: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func.isRequired
};
;
var _default = Button;
exports.default = _default;
//# sourceMappingURL=index.js.map