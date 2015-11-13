var deniedObj = require('./denied');

module.exports = function(request, response, next) {
	
	if(request.headers.authorization === 'Basic secret_key') {
		next();
	} else {
		response.send(deniedObj);
	}

}