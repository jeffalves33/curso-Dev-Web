function counter(n){
    return{
        get count(){return n++},
        set count(m){
            if(m >= n) n = m;
            else throw Error("count can only be set to larger value");
        }
    }
}

var c = counter(1000); //ou seja, atribuimos ao método get o valor 1000
console.log(c.count);
console.log(c.count);
c.count = 2000; //mesmo que c = counter(2000)
console.log(c.count);
c.count = 2000;