"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _services = require("../../services");

var _utils = require("../../utils");

var _constants = require("../../_constants");

var verifyToken = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(token) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _services.axios.get(_constants.endPoints.verifyToken, {
              params: {
                token: token
              }
            }).then(function (res) {
              return res.data;
            });

          case 2:
            data = _context.sent;

            if ((0, _utils.isSuccessRequest)(data)) {
              _services.container.set(data.data.userId, token);
            }

            ;
            return _context.abrupt("return", data);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function verifyToken(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = verifyToken;
exports["default"] = _default;