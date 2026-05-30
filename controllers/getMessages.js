const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

function getMessages(req, res, next){
    res.render("index", {messages: messages})
}

module.exports = {getMessages, messages};