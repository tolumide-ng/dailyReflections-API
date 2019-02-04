'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Reflection = require('../controllers/Reflection');

var _Reflection2 = _interopRequireDefault(_Reflection);

var _routerHelpers = require('../helpers/routerHelpers');

var _routerHelpers2 = _interopRequireDefault(_routerHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateBody = _routerHelpers2.default.validateBody,
    schemas = _routerHelpers2.default.schemas;


var router = _express2.default.Router();

router.post('/', validateBody(schemas.authSchema), _Reflection2.default.create);
router.get('/', _Reflection2.default.getAll);
router.get('/:id', _Reflection2.default.getOne);
router.put('/:id', validateBody(schemas.authSchema), _Reflection2.default.update);
router.delete('/:id', _Reflection2.default.delete);

exports.default = router;