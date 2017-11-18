class criaProdutoDAO {
    constructor(conexao){
        this.conexao = conexao
    }
    pegaLivros(callback){
        this.conexao.query("SELECT * FROM livros", callback)
    }
}

module.exports = criaProdutoDAO