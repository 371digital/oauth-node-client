"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSuccessRequest = void 0;

var isSuccessRequest = function isSuccessRequest(response) {
  return response.code === 200;
};

exports.isSuccessRequest = isSuccessRequest;