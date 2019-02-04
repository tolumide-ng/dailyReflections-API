'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var joiValidation = {
  validateBody: function validateBody(schema) {
    return function (req, res, next) {
      var result = _joi2.default.validate(req.body, schema);
      if (result.error) {
        return res.status(400).json(result.error);
      }
      if (!req.value) {
        req.value = {};
      }
      req.value['body'] = result.value;
      next();
    };
  },

  schemas: {
    authSchema: _joi2.default.object().keys({
      success: _joi2.default.string().required(),
      lowPoint: _joi2.default.string().required(),
      takeAway: _joi2.default.string().required()
    })
  }
};

exports.default = joiValidation;