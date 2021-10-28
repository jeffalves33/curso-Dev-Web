function Calcular(){
    const number1  = parseFloat(document.getElementById('number1').value  != null ? document.getElementById('number1').value  : 0);
    const number2  = parseFloat(document.getElementById('number2').value  != null ? document.getElementById('number2').value  : 0);
    const operacao = parseFloat(document.getElementById('operacao').value != 0    ? document.getElementById('operacao').value : 0);


    switch(operacao){
        case 1:
            document.getElementById('resultado').value = number1 - number2;
            break;
        case 2:
            document.getElementById('resultado').value = number1 + number2;
            break;
        case 3:
            document.getElementById('resultado').value = number1 * number2;
            break;
        case 4:
            document.getElementById('resultado').value = number2 == 0 ? 0 : number1 / number2;
            break;
        default:
            alert('selecione uma operação valida');
            break
    }
}