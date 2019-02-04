'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Reflection = function () {
  function Reflection() {
    _classCallCheck(this, Reflection);

    this.reflections = [];
  }

  _createClass(Reflection, [{
    key: 'create',
    value: function create(data) {
      var newReflection = {
        id: _uuid2.default.v4(),
        success: data.success || '',
        lowPoint: data.lowPoint || '',
        takeAway: data.takeAway || '',
        createdDate: _moment2.default.now(),
        modifiedDate: _moment2.default.now()
      };
      this.reflections.push(newReflection);
      return newReflection;
    }
  }, {
    key: 'findOne',
    value: function findOne(id) {
      return this.reflections.find(function (reflect) {
        return reflect.id === id;
      });
    }
  }, {
    key: 'findAll',
    value: function findAll() {
      return this.reflections;
    }
  }, {
    key: 'update',
    value: function update(id, data) {
      var reflection = this.findOne(id);
      var index = this.reflections.indexOf(reflection);
      this.reflections[index].success = data.success || reflection.success;
      this.reflections[index].lowPoint = data.lowPoint || reflection.lowPoint;
      this.reflections[index].takeAway = data.takeAway || reflection.takeAway;
      this.reflections[index].modifiedDate = _moment2.default.now();
      return this.reflections[index];
    }
  }, {
    key: 'delete',
    value: function _delete(id) {
      var reflection = this.findOne(id);
      var index = this.reflections.indexOf(reflection);
      this.reflections.splice(index, 1);
      return {};
    }
  }]);

  return Reflection;
}();

exports.default = new Reflection();