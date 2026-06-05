const { getAllMessages } = require("../db/queries");

async function getMessages(req, res) {
  const messages = await getAllMessages();

  res.render("index", { messages: messages });
}

module.exports = { getMessages };
