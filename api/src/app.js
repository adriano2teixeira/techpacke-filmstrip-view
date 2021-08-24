const express = require("express")
const endpoints = require("./endpoints")
const cors = require("cors")

const App = express()
App.use(cors())
App.use(endpoints) // attaching the endpoints to the express app instance


module.exports = App