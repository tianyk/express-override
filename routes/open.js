var express = require('express');
var router = express.Router();

router.get('/_test', function(req, res, next) {
	res.json({ code: 'SUCCESS', msg: 'OK' });
});

module.exports = router;
