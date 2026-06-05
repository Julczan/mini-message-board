const { insertMessage } = require("../db/queries");

async function postMessage(req, res) {
  const newMessage = {
    message: req.body.message,
    username: req.body.author,
  };

  await insertMessage(newMessage);

  res.redirect("/");
}

module.exports = { postMessage };
