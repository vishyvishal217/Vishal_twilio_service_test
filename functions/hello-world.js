exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello Vishal !"
    }

    callback(null, result);
  };
