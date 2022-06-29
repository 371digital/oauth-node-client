"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Container = /*#__PURE__*/function () {
  function Container() {
    (0, _classCallCheck2["default"])(this, Container);
    this.map = new Map();
  }

  (0, _createClass2["default"])(Container, [{
    key: "set",
    value: function set(key, value) {
      this.map.set(key, value);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.map.get(key);
    }
  }]);
  return Container;
}();

;

var _default = new Container();

exports["default"] = _default;