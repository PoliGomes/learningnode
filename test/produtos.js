        var server = require("../config-server")
        var supertest = require("supertest")
        var serverTest = supertest(server)

describe("Produtos", function(){
    it("não aceita preço inválido", function(next){

        serverTest
            .post("/produtos")
            .send({
                titulo: "oi"
                ,preco: "preco doido"
                ,descricao: "dabrdfxtg"
            })

            .set("Content-Type", "application/json")
            .expect(400, next)
       
       
    })
})