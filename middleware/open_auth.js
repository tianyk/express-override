module.exports = (req, res, next) => {
	// proxy res.json() 
	const _json = res.json;
	res.json = function json(body) {
		body.sign = 'signstr';
		_json.call(res, body);
	}

	// 有一个console.log 或者 直接 next(); 程序表现正常
	// console.log('proxy');
	// next();

	(async () => {
		next();
	})().catch(next);
};

// http://localhost:3000/open/_test