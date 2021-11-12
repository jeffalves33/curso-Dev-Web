var a = 1;
const b = [1];
var c = "1";
var d = 1;

console.log("a = " + typeof(a) + " = " + a)
console.log("b = " + typeof(b) + " = " + b)
console.log("c = " + typeof(c) + " = " + c)
console.log("d = " + typeof(d) + " = " + d)

if(a == b) console.log("a == b"); //true
if(a === b) console.log("a === b"); //false
if(a == c) console.log("a == c"); //true
if(a === c) console.log("a === c"); //false
if(a == d) console.log("a == d"); //true
if(a === d) console.log("a === d"); //true

/*ou seja, o operador de == ele converte o valor de ante mão para
fazer a comparação, enquanto o operador === não converte, avaliando
exatamente o tipo. fazendo com que a comparação seja em seus
construtores.*/