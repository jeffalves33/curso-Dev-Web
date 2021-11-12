function * fibonacci(){
    let [x,y] = [1,1];
    while(true){
        yield y;
        [x,y] = [y, x+y];
    }
}

var f = fibonacci();
var obj = new Array();

for(var i = 0; i < 5; i++) obj[i] = f.next();
for(var i = 0; i < 5; i++) console.log(obj[i]);
