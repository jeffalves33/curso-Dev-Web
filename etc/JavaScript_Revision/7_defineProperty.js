//"use strict"
var z = [1,2,3] //3 elements
Object.defineProperty(z, "length",{value: 3, writable: false});
z.length = 1;
console.log(z) //=> (3) [1,2,3]
/*significa que a propriedade não pode ser mudada*/
/*uma outra propriedade de objeto é a Object.freeze(). ela "congela"
o elemento. não permite que suas propriedades sejam mutaveis,
excluidas ou que novas propriedades sejam adicionada ao objeto*/