var messages = require('./../../data/messages');
var error = require('./../utils/error');
var success = require('./../utils/success');

module.exports = {
  getMessages: function(request,response) {
    response.send(messages);

  },
  postMessage: function(request,response) {
    // write code here
    if(!request.body.message || !request.body.created_by) {
    	response.send(error);
    } else {
    	// var obj = {};
    	// obj.message = request.body.message;
    	// obj.created_by = request.body.created_by;
    	messages.push(request.body);
    	response.send(success);
    }

  }
};