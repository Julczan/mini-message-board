const { Router } = require("express");
const { getMessageDetails } = require("../controllers/getMessageDetails");

const messageRouter = Router();

messageRouter.get('/:messageId', getMessageDetails)

module.exports = messageRouter;