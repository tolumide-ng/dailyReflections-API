'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Middelwares
app.use(_express2.default.json());
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());

//Routes
app.get('/', function (req, res) {
    return res.status(200).send({ 'message': 'YAY! Congratulations on your first endpoint' });
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('listening on port ' + port);
});