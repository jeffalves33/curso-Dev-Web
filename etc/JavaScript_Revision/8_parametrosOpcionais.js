var obj = {
    operator1: 12,
    operator2: 21,
    sum: function() {
        this.newProperty = this.operator1 + this.operator2;
    }
}
obj.sum();

function getNames(obj, a){
    a = a || []; //if(a === undefined) a = [];
    for(var property in obj) a.push(property);
    return a;
}

function getNames2(a,b,c){
    console.log(arguments.length);
}

console.log(getNames(obj));
console.log(getNames2(1,2,3,4));
/*uma função pode receber tao menos parametros que o esperado, quanto mais.*/


