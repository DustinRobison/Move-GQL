const rp = require("request-promise");

const Requester = (host, path, key, body) => {
  const postOptions = {
    uri: `${host}/api/${path}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "MOVE-SESSION-ID": key
    },
    body,
    json: true
  };
  rp(postOptions)
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log(`Error calling ${path}`);
      console.log(err);
      return {
        error: true,
        code: err.statusCode,
        message: err.message
      };
    });
};

module.exports = Requester;
