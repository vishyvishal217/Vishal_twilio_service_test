exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello Vishal! Welcome to Twilio"
    }

    callback(null, result);
  };
