//chamada de função
chamadaFuncao(); //içamento
function chamadaFuncao(){
    //console.log("chamadaFuncao\n");
}

//chamada de método

var obj = { 
    operator1: 2,
    operator2: 3,
    adiciona: function(){ 
        this.newProperty = this.operator1 + this.operator2
    } //criando uma nova propriedade do objeto
};
//necessário chamar antes pois diferentes das normais, funções
//atribuidas a propriedades de um objeto não são içadas
obj.adiciona(); 
//console.log(obj.newProperty);

//chamada de construtura
var obj2 = new Object(); //ou => new obj; (já que não tem parametros)

//chamada indireta 
function f(){
    console.log(this.operator1);
}

f.call(obj); //mesmo que => obj.m = f; obj.m();
//f.apply(obj) neste caso, a mesma coisa
f.bind(obj);
/*o método call e apply usa uma proproedade ou função
de um objeto em outro. já o método bind, ele atribui ao 
objeto a função usada        ?*/















