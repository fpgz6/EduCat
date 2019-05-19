var express = require('express');
var apiv1 = express.Router();


apiv1.use('/users', require('../users'))
apiv1.use('/search', require('../search'))

module.exports = apiv1;
