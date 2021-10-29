/* ============== funções para index.html ============== */
function iniciaJogo(){
    const nivel = document.getElementById('nivel').value == null ? 1 : document.getElementById('nivel').value;
    
    /* esse método froça a mudança do href do navegador */
    /* esse atributo '...?' + nivel é uma forma de envio de parametros via get */
    window.location.href = 'jogo.html?' + nivel;
}


/* ============== funções para jogo.html ============== */
var timeId = null; //armazenaa chamada da função setTimealt

function iniciaJogo2(){
    
    //pegar a parte queue string da URL
    const URL = parseInt(window.location.search.replace("?",""));
    
    //1 fácil   = 120s
    //2 normal  = 60s
    //3 difícil = 30s
    var time = 0;

    switch(URL){
        case 1:
            time = 120;
            break;
        case 2:
            time = 60;
            break;
        case 3:
            time = 30;
            break;
        default:
            alert("algo deu errado :( \nrecarregue a partida da página anterior.")
            break;
    }

    //inserindo segundos no jogo.html
    document.getElementById('cronometro').innerHTML = time;

    //quantidade de balões
    var qtdBaloes = 120;
    criaBaloes(qtdBaloes);

    //imprime qtd baloes inteiros e estourados
    document.getElementById('baloesInteiros').innerHTML = qtdBaloes;
    document.getElementById('baloesEstourados').innerHTML = 0;

    contagem(time + 1);
}

//aqui iremos criar uma tag img a partir da quantidade de balões que 
//queremos colocar no cenário
function criaBaloes(qtdBaloes){

    for(var i = 1; i <= qtdBaloes; i++){
        
        var balao = document.createElement('img');
        balao.src = 'img/balao_azul_pequeno.png';
        balao.style.margin = '7px';
        balao.id = 'b' + i;
        balao.estouro = 1;
        balao.onclick = function(){ estourar(this);}

        //appendChild: coloca essas tags img dentro da div
        document.getElementById('cenario').appendChild(balao);
    }
}

function estourar(e){
    const idBalao = e.id;

    if(document.getElementById(idBalao).estouro == 0) return;
    document.getElementById(idBalao).src = 'img/balao_azul_pequeno_estourado.png';
    document.getElementById(idBalao).estouro = 0;
    pontuacao(-1)
}

function pontuacao(acao){
    //conferir se já foi clicado
    var baloesInteiros   = parseInt(document.getElementById('baloesInteiros').innerHTML);
    var baloesEstourados = parseInt(document.getElementById('baloesEstourados').innerHTML);

    document.getElementById('baloesInteiros').innerHTML   = baloesInteiros + acao;
    document.getElementById('baloesEstourados').innerHTML = baloesEstourados - acao;
}

function contagem(time){

    time = time - 1;

    if(time == -1 && document.getElementById('baloesInteiros').innerHTML > 0){
        clearTimeout(timeId); //para execução de setTimeout
        alert('fim de jogo, você perdeu :(');
        return false;
    }
    if(document.getElementById('baloesInteiros').innerHTML == 0){
        alert('fim de jogo, VOCÊ VENCEU :)');
        clearTimeout(timeId);
        return false;
    }
    document.getElementById('cronometro').innerHTML = time;
    timeId = setTimeout("contagem("+time+")", 1000);
}
