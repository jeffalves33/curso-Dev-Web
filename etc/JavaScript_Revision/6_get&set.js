var variavel = {
    valor: 0,
    
    get moeda() { // define o get moeda
      return "R$ " + this.valor.toFixed(2).replace(".",",");
    },
    get int() { // define o get integer
      return this.valor;
    },  
    set int(i) {  // define o set
        this.valor = i;
    }
  }
  
  console.log(variavel.moeda);
  variavel.int = 123;
  console.log(variavel.moeda);
  variavel.int = 456;
  console.log(variavel.int);
  console.log(variavel.moeda);

  /*usamos métodos getters e setters quando queremos tratar os valores antes*/