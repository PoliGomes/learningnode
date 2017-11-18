var express = require('express')
var server = express()
server.set("view engine", "ejs")
server.use(express.static("./public"))

var bodyParser = require("body-parser")
var expressValidator = require("express-validator")

server.use(bodyParser.urlencoded())
server.use(bodyParser.json())
server.use(expressValidator())

require("./routes/produtos")(server)


server.use(function(req, resp){
    resp.send("Não existe")
})

module.exports = server