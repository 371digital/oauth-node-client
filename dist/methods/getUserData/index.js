"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _services = require("../../services");

var _constants = require("../../_constants");

var getUserData = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userId) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!_services.container.get(userId)) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return _services.axios.get(_constants.endPoints.getProfile, {
              headers: {
                "x-access-token": _services.container.get(userId)
              }
            }).then(function (res) {
              return res.data;
            });

          case 3:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 5:
            return _context.abrupt("return", {
              code: 400,
              message: "UserId not found in container."
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUserData(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getUserData;
exports["default"] = _default;