const { Router } = require("express")
const TemplateController = require("./controllers/templates")


const route = Router()

route.get("/", (req, res) => res.json({ msg: "Welcome to Filmstrip api"}))
route.get("/templates", TemplateController.serve)

module.exports = route