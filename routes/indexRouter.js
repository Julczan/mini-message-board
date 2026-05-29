const { Router } = require("express");
const {getMessages} = require("../controllers/getMessages");
const { getForm } = require("../controllers/getForm");
const { postMessage } = require("../controllers/postMessage");


const indexRouter = Router();

indexRouter.get("/", getMessages);

indexRouter.get("/new", getForm)

indexRouter.post("/new", postMessage)

module.exports = indexRouter;
