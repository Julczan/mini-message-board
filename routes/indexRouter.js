const { Router } = require("express");
const {getMessages} = require("../controllers/getMessages");
const { getForm } = require("../controllers/getForm");


const indexRouter = Router();

indexRouter.get("/", getMessages);

indexRouter.get("/new", getForm)



module.exports = indexRouter;
