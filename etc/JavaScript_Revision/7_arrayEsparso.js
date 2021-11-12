var count = new Array(3)
count = [1,,3]

for(ind in count) console.log(count[ind]);
console.log(count[1])
console.log("number of elements count: " + count.length)

/*significa que podemos pular indices de vetor.
nesse exemplo, vemos que o laço não considera elementos que não
foram definidos em um array esparso*/

var x = [,2,3,5,]
console.log("number of elements x: " + x.length)
/*veja que uma virgula é desconsiderada quando há uma virgula no
inicio e no final*/

var z = [1,2,3] //3 elements
z.length = 2
console.log(z[2])
z.length = 5
console.log(z[2], z.length)
/*ou seja, quando vc diminui um array pela propriedade length, 
os elementos após esse índice deixarão de existir. da mesma forma,
se aumenta a propriedade length, vc cria um array esparso.*/