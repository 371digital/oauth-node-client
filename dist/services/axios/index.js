"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _constants = require("../../_constants");

var instance = _axios["default"].create({
  baseURL: _constants.oauthApiIP
});

var _default = instance;
exports["default"] = _default;