function easyCopy(arg){
    return new Object({name: arg.name,
                      _CPF: arg._CPF || "não atribuido",
                      idade: arg.idade,
                      pai: arg.pai || "não atribuido",
                      mae: arg.mae});
}

var a = easyCopy({name: "Jeferson", idade: 21, 
                  mae:"Cleidimar", pai: "Jocimar"});
console.log(a);

/*ou seja, as vezes é mais viável passarmos os parametros
para as funções em formato de objeto para facilitar o 
entendimento do programador e para ter um código mais 
robusto*/
