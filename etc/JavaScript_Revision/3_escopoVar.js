var i = "global"

function escopoVar (){
    console.log(i)
    var i = 0;
    x = 200;
    if(i == 0){
        var j = 100;
        for(var k = 0; k < 10; k++){
            console.log(k);
        }
        console.log("k fora do laço: " + k);
    }
    console.log("j fora da condicional: " + j);
}
escopoVar();

console.log("i fora da função: " + x);

/*em JS, as variáveis são visiveis ainda que fora dos laços e das 
condicionais, sendo devolvidas a memória só quando o bloco da função
termina. isso significa que as variáveis mesmo anets de serem eclaradas,
já são visiveis pelo programa. isso é chamado de içamento.
obs.: isso só acontece com VARIAVEIS (var) e não com CONSTANTES (const)*/

/*perceba o funcionamento do içamento na linha 4, variável i.
quando o leitor entra nessa função, ele lê todas as variáveis e 
setas elas para undefined até chegar ao código a parte aonde a 
variável será declarada. por isso que o console.log(i) returna 
"undefined".*/

/* a linha 18 mostra que variáveis não declaradas, SEMPRE SÃO GLOBAIS*/
