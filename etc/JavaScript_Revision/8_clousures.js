function contfuncs(){
    var funcs = [];
    for(var i = 0; i < 10; i++){
        funcs[i] = (function(){return i;});
      //funcs[i] = (function(){return i;}());
    }
    return funcs;
}
var x = contfuncs();
console.log(x[1])
/*a diferença é que na linha 4, os indices do vetor, recebem
uma instância não executada. isso faz com que quando chamo 
essa função por índices, e as executo (como na linha 10), 
ela retorna o valor de i naquele momento da crianção, que
no caso, era 10.
quando usamos a função já executada (como na linha 11), nós
pegamos os valores de i DAQUELE momento em que foi atribuída.*/