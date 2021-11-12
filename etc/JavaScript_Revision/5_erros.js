function div(dividendo, divisor){
    if(divisor == 0) throw new Error(); //throw(lançar) funciona como um tipo de retorno
    else return dividendo/divisor;
}

function main(){
    var x1 = 5;
    var x2 = 0;
    try{ //o erro deve estar contido dentro. se uma função chamada der erro, isso n constará.
        if(x2 == 0) throw new Error("divisor zero");
        console.log("there was no error");
    }
    catch(e){ //parametro adiciona um objeto que contenha as informações do erro.
        console.log("gave error");
        console.log("typed ERROR: " + e.message)
    }
    finally{
        if(x2 != 0) console.log("divisão: " + x1/x2)
        else console.log("dividendo: " + x1)
    }
}

main()