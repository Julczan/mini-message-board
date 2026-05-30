const { messages } = require("./getMessages");

function postMessage(req, res, next){
   const newMessage = {
      id: crypto.randomUUID(),
      text: req.body.message,
      user: req.body.author,
      added: new Date(),
   }

   messages.push(newMessage);

   res.redirect("/")
}

module.exports = {postMessage}