
var x = {a:22, b: 33}
var z = x;
z.a = 222;
console.log(x.a)

//ou seja, aqui criamos uma referência e não uma cópia. 
//porém, com o ECMAScript 5, podemos ultilizar do object global um
//método.

var x2 = {a:22, b:33}
var z2 = Object.create(x2)
z2.a = 222;
console.log(x2.a)

//observe agora que usando o operador "new", também criamos uma 
//referência e não uma cópia.

var x3 = {a:22, b:33}
var z3 = new Object(x3)
z3.a = 222;
console.log(x3.a)