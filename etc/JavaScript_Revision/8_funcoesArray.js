var math = [function (x,y){return x+y},     /*array literal*/
            function (x,y){return x-y},
            function (x,y){return x*y},
            function (x,y){return y == 0 ? y : x/y},
            value1 = 2,
            3,
            0];

console.log("sum(2,3) " + math[0](math[4],math[5]));
console.log("subtration(2,3) " + math[1](math[4],math[5]));
console.log("multiplication(2,3) " + math[2](math[4],math[5]));
console.log("division(2,0) " + math[3](math[4],math[6]));
console.log("length " + math.length);