var server = require("./config-server")

require("./routes/produtos")

server.listen(3002, "localhost", function(){
	console.log("Servidor ok")

})

