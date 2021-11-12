/*concat(): concatenate = concatena.
concatena o elemento passado como parametro e o Array usado.*/
var x = [1,2,3];
var y = [4,5,6];
const z = x.concat(y)
//console.log(z) //=> (6) [1,2,3,4,5,6]

/*sort(): ordenar.
a funcaoDeComparação(a,b) muda 'a' para índice anterior a 'b' se 
retornar < 0;
deixa a e b inalterados em relação um ao outro se retornar = 0;
muda 'b' para índice anterior a 'a' se retornar > 0.*/
var a = ["jeferson", "luiz", "alves", "de", "souza"]

a.sort(function(a1,a2){
    if(a1.length < a2.length) return -1;
    else if(a1.length > a2.length) return 1;
    else return 0;
})
//console.log(a) //=> (5) ['de', 'luiz', 'alves', 'souza', 'jeferson']

var b = [{x:1},{y:2},{z:3}]
b.reduce(union)