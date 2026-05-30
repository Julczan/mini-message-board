const { messages } = require("./getMessages");

function getMessageDetails(req, res, next){
    const {messageId} = req.params
    
    const message = messages.find(message => message.id = messageId);
    
    res.render("message", {message: message})
}

module.exports = {getMessageDetails}