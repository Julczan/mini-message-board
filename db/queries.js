const pool = require("./pool");

class Message {
  async getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  }

  async insertMessage({ message, username }) {
    await pool.query(
      "INSERT INTO messages (message, username) VALUES ($1, $2)",
      [message, username],
    );
  }
  async getMessage(messageId) {
    const { rows } = await pool.query(
      "SELECT * FROM messages WHERE id = ($1)",
      [messageId],
    );
    return rows;
  }
}

const message = new Message();

module.exports = message;
