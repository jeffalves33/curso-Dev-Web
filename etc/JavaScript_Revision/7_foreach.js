var counter = [2,4,6,8];
var sum = 0;
counter.forEach(function(x){
    sum+=x;
});
console.log(sum); //=>20

var data = [1,2,3,4,5];
data.forEach(function(value, indice, arr){ arr[indice] = value + 1})
console.log(data); //=> (5) [2,3,4,5,6]

/*foreach() proporciona um estulo de programação funcional*/