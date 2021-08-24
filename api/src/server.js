const http = require("http")
const api = require("./app")

const server = http.createServer(api)

server.listen(3001, () => console.log(`Server Listeing to http://localhost:3001`))