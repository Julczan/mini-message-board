const message = require("../db/queries");

async function getMessageDetails(req, res) {
  const { messageId } = req.params;

  const foundMessage = await message.getMessage(messageId);

  res.render("message", { message: foundMessage[0] });
}

module.exports = { getMessageDetails };
