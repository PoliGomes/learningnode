function criaProdutoDAO(conexao){
    this.conexao = conexao
}

criaProdutoDAO.prototype.pegaLivros = function pegaLivros(callback){
    this.conexao.query("SELECT * FROM livros", callback)
}

module.exports = criaProdutoDAO