const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insetMessage(message, username) {
  await pool.query("INSERT INTO messages (message, username) VALUES ($1, $2)", [
    message,
    username,
  ]);
}

async function getMessage(messageId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [
    messageId,
  ]);
  return rows;
}

module.exports = {
  getAllMessages,
  insetMessage,
  getMessage,
};
