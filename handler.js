"use strict";

module.exports.hello = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "AWS Lambda is very powerfull!",
    }),
  };

  return callback(null, response);
};
