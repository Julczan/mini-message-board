const { messages } = require("./getMessages");

function getMessageDetails(req, res, next){
    const {messageId} = req.params
    
    const foundMessage = messages.find(message => message.id === messageId.toString());
    
    
    res.render("message", {message: foundMessage})
}

module.exports = {getMessageDetails}