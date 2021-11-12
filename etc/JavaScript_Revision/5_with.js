
const obj = {a: 1, b: 2};

console.log(obj.a)

with(obj){
    console.log(a);
}

/*em outras palavras. esse bloco de código é usado para ajudar na 
organização do código e afins*/