const customPrototype = {    //objeto com um método
    greet (){
        return `${this.greeting} Guys`;
    }
}

function Greetting(term) {  //criando uma função construtora (por isso maiuscula) 
    this.greeting = term;
}

Greetting.prototype = customPrototype; //atribuindo o prototype customPrototype a função Gretting

const hiGreet = new Greetting('Hi'); //criando uma instancia de Greetting

const heyGreet = {
    greetting = 'hey'
}

//segunda forma de instanciar um prototype
const helloGreet = Object.create(customPrototype);

//terceira forma de instanciar um prototype
const helloGreet2;
Object.setPrototypeOf(helloGreet2, customPrototype);