//necessário para conferir os cliques
let cont = 0;
//elemento x e bolinha
let x = document.querySelector(".x")
let o = document.querySelector(".o")
//todos os blocos
let boxes = document.querySelectorAll(".box");


function game(id){

    /* parte da função destinada a adicionar elemento */
    //primeiro verificamos se o id já foi preenchido ou não
    if(document.getElementById(id).textContent != ""){
        //som
        return;
    }

    //caso não tenha sido preenchido, vamos verificar a variavel e add elemento
    else{

        //vez do x
        if(cont % 2 == 0){
            let el = x.cloneNode(true); //faz uma copia e não uma referência  
            document.getElementById(id).appendChild(el);
        }

        //vez da o
        else{
            let el = o.cloneNode(true); //faz uma copia e não uma referência  
            document.getElementById(id).appendChild(el);
        }
        cont++;
    }


    /* verificação de vitória */
    checkCondition()
}

function checkCondition(){

    //verifica primeira linha
    if(boxes[0].childNodes.length > 0 && boxes[1].childNodes.length > 0 && boxes[2].childNodes.length > 0){

        //pegando referências da primeira linha
        let b0 = boxes[0].childNodes[0].className;
        let b1 = boxes[1].childNodes[0].className;
        let b2 = boxes[2].childNodes[0].className;

        //x venceu
        if(b0 == "x" && b1 == "x" && b2 == "x") callResult("x");

        //o venceu
        else if(b0 == "o" && b1 == "o" && b2 == "o") callResult("o");
    }

    
    //verifica segunda linha
    if(boxes[3].childNodes.length > 0 && boxes[4].childNodes.length > 0 && boxes[5].childNodes.length > 0){

        //pegando referências da primeira linha
        let b3 = boxes[3].childNodes[0].className;
        let b4 = boxes[4].childNodes[0].className;
        let b5 = boxes[5].childNodes[0].className;

        //x venceu
        if(b3 == "x" && b4 == "x" && b5 == "x") callResult("x");

        //o venceu
        else if(b3 == "o" && b4 == "o" && b5 == "o") callResult("0");
    }

    //verifica terceira linha
    if(boxes[6].childNodes.length > 0 && boxes[7].childNodes.length > 0 && boxes[8].childNodes.length > 0){

        //pegando referências da primeira linha
        let b6 = boxes[6].childNodes[0].className;
        let b7 = boxes[7].childNodes[0].className;
        let b8 = boxes[8].childNodes[0].className;

        //x venceu
        if(b6 == "x" && b7 == "x" && b8 == "x") callResult("x");

        //o venceu
        else if(b6 == "o" && b7 == "o" && b8 == "o") callResult("o");
    }

    //verifica primeira coluna
    if(boxes[0].childNodes.length > 0 && boxes[3].childNodes.length > 0 && boxes[6].childNodes.length > 0){

        //pegando referências da primeira linha
        let b0 = boxes[0].childNodes[0].className;
        let b3 = boxes[3].childNodes[0].className;
        let b6 = boxes[6].childNodes[0].className;

        //x venceu
        if(b0 == "x" && b3 == "x" && b6 == "x") callResult("x");

        //o venceu
        else if(b0 == "o" && b3 == "o" && b6 == "o") callResult("o");
    }

    //verifica segunda coluna
    if(boxes[1].childNodes.length > 0 && boxes[4].childNodes.length > 0 && boxes[7].childNodes.length > 0){

        //pegando referências da primeira linha
        let b1 = boxes[1].childNodes[0].className;
        let b4 = boxes[4].childNodes[0].className;
        let b7 = boxes[7].childNodes[0].className;

        //x venceu
        if(b1 == "x" && b4 == "x" && b7 == "x") callResult("x");

        //o venceu
        else if(b1 == "o" && b4 == "o" && b7 == "o") callResult("o");
    }

    //verifica terceira coluna
    if(boxes[2].childNodes.length > 0 && boxes[5].childNodes.length > 0 && boxes[8].childNodes.length > 0){

        //pegando referências da primeira linha
        let b2 = boxes[2].childNodes[0].className;
        let b5 = boxes[5].childNodes[0].className;
        let b8 = boxes[8].childNodes[0].className;

        //x venceu
        if(b2 == "x" && b5 == "x" && b8 == "x") callResult("x");

        //o venceu
        else if(b2 == "o" && b5 == "o" && b8 == "o") callResult("o");
    }

    //verifica diagonal 1
    if(boxes[0].childNodes.length > 0 && boxes[4].childNodes.length > 0 && boxes[8].childNodes.length > 0){

        //pegando referências da primeira linha
        let b0 = boxes[0].childNodes[0].className;
        let b4 = boxes[4].childNodes[0].className;
        let b8 = boxes[8].childNodes[0].className;

        //x venceu
        if(b0 == "x" && b4 == "x" && b8 == "x") callResult("x");

        //o venceu
        else if(b0 == "o" && b4 == "o" && b8 == "o") callResult("o");
    }

    //verifica diagonal 2
    if(boxes[2].childNodes.length > 0 && boxes[4].childNodes.length > 0 && boxes[6].childNodes.length > 0){

        //pegando referências da primeira linha
        let b2 = boxes[2].childNodes[0].className;
        let b4 = boxes[4].childNodes[0].className;
        let b6 = boxes[6].childNodes[0].className;

        //x venceu
        if(b2 == "x" && b4 == "x" && b6 == "x") callResult("x");

        //o venceu
        else if(b2 == "o" && b4 == "o" && b6 == "o") callResult("o");
    }

    //se nenhuma das codições for obedecida, então deu velha
    if( cont == 9 ) callResult();
}

//limpa jogo, declara vencedor e atualiza o placar
function callResult(winner = "velha"){
    
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");
    let messageContainer = document.querySelector("#message");
    let p = document.querySelector("#message p");

    //x venceu
    if(winner == "x"){
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        p.innerHTML = "X venceu!!!"
    }
    //O venceu
    else if(winner == "o"){
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        p.innerHTML = "O venceu!!!"
    }

    else p.innerHTML = "Deu velha!!!"


}