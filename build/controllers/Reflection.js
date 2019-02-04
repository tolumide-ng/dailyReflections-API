'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Reflection = require('../models/Reflection');

var _Reflection2 = _interopRequireDefault(_Reflection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Reflection = {
  create: function create(req, res) {
    console.log(req.value);
    console.log(req.value.body);
    if (!req.value.body.success || !req.value.body.lowPoint || !req.value.body.takeAway) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    console.log(req.value.body);
    var reflection = _Reflection2.default.create(req.value.body);
    return res.status(201).json([reflection]);
  },
  getAll: function getAll(req, res) {
    var reflections = _Reflection2.default.findAll();
    return res.status(200).json({ data: [reflections] });
  },
  getOne: function getOne(req, res) {
    var reflection = _Reflection2.default.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).json({ message: 'reflection not found' });
    }
    return res.status(200).json([reflection]);
  },
  update: function update(req, res) {
    console.log(req.value);
    console.log('I am here');
    console.log(req.value.body);
    var reflection = _Reflection2.default.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).json({ message: 'reflection not found' });
    }
    var updatedReflection = _Reflection2.default.update(req.params.id, req.value.body);
    return res.status(200).json([updatedReflection]);
  },
  delete: function _delete(req, res) {
    var reflection = _Reflection2.default.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).json({ message: 'Reflection not found' });
    }
    var ref = _Reflection2.default.delete(req.params.id);
    return ref.status(204).json([ref]);
  }
};

exports.default = Reflection;