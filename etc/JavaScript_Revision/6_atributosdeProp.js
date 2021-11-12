"use strict"
var conta = {
    value: 0,
    juros: 10,

    get moeda() {
        return 'R$' + this.value.toFixed(2).replace('.',',');
    },
    get int() {
        return this.value;
    },
    set int(i) {
        this.value = i;
    }
}

//vamos criar uma nova propriedade de juros que é fixa e n pode ser modificada
Object.defineProperty(conta, "juros", {value: 13, 
                                     writable: false,
                                     enumerable: true,
                                     configurable: false});


console.log(conta)