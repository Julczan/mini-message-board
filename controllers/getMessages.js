const message = require("../db/queries");

async function getMessages(req, res) {
  const messages = await message.getAllMessages();

  res.render("index", { messages: messages });
}

module.exports = { getMessages };
