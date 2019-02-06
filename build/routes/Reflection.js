'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

require('babel-polyfill');

var _Reflection = require('../usingJSObject/controllers/Reflection');

var _Reflection2 = _interopRequireDefault(_Reflection);

var _Reflection3 = require('../usingDB/controller/Reflection');

var _Reflection4 = _interopRequireDefault(_Reflection3);

var _routerHelpers = require('../helpers/routerHelpers');

var _routerHelpers2 = _interopRequireDefault(_routerHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('done 1'); // this would recongnise async/await in our code

_dotenv2.default.config();
var Reflection = process.env.TYPE === 'db' ? _Reflection4.default : _Reflection2.default;

var validateBody = _routerHelpers2.default.validateBody,
    schemas = _routerHelpers2.default.schemas;


console.log('done 2');
var router = _express2.default.Router();

console.log('done 3');
router.post('/', validateBody(schemas.authSchema), Reflection.create);
console.log('done 4');
router.get('/', Reflection.getAll);
console.log('done 5');
router.get('/:id', Reflection.getOne);
console.log('done 6');
router.put('/:id', validateBody(schemas.authSchema), Reflection.update);
console.log('done 7');
router.delete('/:id', Reflection.delete);

console.log('done 8');

exports.default = router;