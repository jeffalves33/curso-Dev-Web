let express = require("express"); //chamando o framework

let app = express(); //instanciando o express

//req = requisição (pedido)
//res = resposta (retorno ao usuário)
app.get('/', (req, res) =>{ 
    res.send('Primeira rota com Express'); //send = mandar/enviar
});

//aonde vai escutar a aplicação
app.listen(3000, () =>{
    console.log("Funcionando na porta 3000")
});