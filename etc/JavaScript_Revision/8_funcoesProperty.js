uniqueInterger.counter = 0;
function uniqueInterger(){
    return uniqueInterger.counter++;
}
//console.log(uniqueInterger.counter)
uniqueInterger();
//console.log(uniqueInterger.counter)
uniqueInterger();
//console.log(uniqueInterger.counter)
/*ou seja, podemos usar isso quando queremos, por exemplo, que
uma função, nunca repita um numero...
o problema é que, um código defeituoso, pode zerar o contador
ou configuralo com um valor não inteiro. para resolver, podemos:*/

var uniqueInteger2 = (function(){
    var counter = 0;
    return function(){return counter++}; //retorna e depois atribui
    //return function(){return counter = counter + 1} //atribui e depois retorna
}()); //mais uma chave de parentes () faria a variávei ser apenas uma execução da função de retorno.
      //em outras palavras, estamos fazendo counter ser uma variável privada
console.log(uniqueInteger2());
console.log(uniqueInteger2());







