module.exports = function(server){
    var getConnection = require("../model/bd/connectionFactory")
var criaProdutoDAO = require("../model/bd/produtoDAO")

server.get("/",function(req, res) {
	var	connection	=	getConnection();
	var	produtos	=	new	criaProdutoDAO(connection);
	produtos.lista(function(error,results,fields){
		res.render('home/index',{livros:results});
	});
		connection.end();
});

server.get("/produtos/lista", function (req, resp, next) {
    var conexao = getConnection()
    var produtoDAO = new criaProdutoDAO(conexao)

    produtoDAO.pegaLivros(function (error, lista,) {
        if (!error) {
            resp.format({
                html: function () {
                    resp.render("produtos/lista", {
                        livros: lista,
                        msgErro: ""
                    })
                }
                ,json: function () {
                    resp.send(lista)
                }
            })
        }else {
            next(erro)
        }
    })
})

server.get("/produtos/form", function (req, resp) {
    resp.render("produtos/form", {
        validationErrors: []
    })
})

server.get("/produtos/lista/:id", function (req, resp) {
    resp.render("produtos/lista", {
        validationErrors: []
    })
})

server.post("/produtos", function (req, resp, next) {
    var conexao = getConnection()
    var produtoDAO = new criaProdutoDAO(conexao)

    req.assert("preco", "Número inválido").isFloat()
    var listaDeErros = req.getValidationResult()

        if(!listaDeErros.length){
            
            var livro = req.body

    produtoDAO.salvaLivro(livro, function (erro, resultado) {
        if (!erro) {
            resp.redirect("/produtos/lista")
        } else {
            next(erro)
        }
    })
        }else {
            resp.status(400).render("produtos/form", {
                validationErrors: listaDeErros
            })
        }
    
})


server.use(function(error, req, resp, next){
    resp.format({
            html: function(){
                resp.status(500).render("erros/500",{
                    erro: error   
                })
            }
            ,json: function () {
                resp.status(500).send(error)
            }
    })
})
}
