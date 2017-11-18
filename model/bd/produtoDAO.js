module.exports = function criaProdutoDAO(conexao) {
    return {
        pegaLivros: function pegaLivros(callback) {
            conexao.query("SELECT * FROM livros", callback)
        }
        , salvaLivro: function (livros, cb) {
            conexao.query("INSERT INTO livros SET ?", livros, cb)

        }
    }
}



