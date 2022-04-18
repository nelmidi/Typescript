(()=>{

  let frutas = ['apple', 'banano', 'strawberry'];
  console.log(frutas);
  frutas.push('hola', 'hello');
  console.log(frutas);
  console.log(frutas.length);
  console.log(frutas[0]);

  let masFrutas = frutas;
  console.log(masFrutas);

  let otrasFrutas: (string  | number | boolean)[] = ['nelsi',3, 20];
  otrasFrutas.push(true);
  console.log(otrasFrutas);
  otrasFrutas.pop(); //remueve el ultimo elemento
  console.log(otrasFrutas);
  otrasFrutas.unshift('de Primero'); //agrega un valor al inicio
  console.log(otrasFrutas);
  otrasFrutas.shift(); //saca el valor al inicio
  console.log(otrasFrutas);
  let posicion = otrasFrutas.indexOf(3); //nos da el valor de la posicion del elemento 3
  console.log(posicion);
  let valorPosicion = otrasFrutas[1]; //nos da el valor del elemento en la posicion 1
  console.log(valorPosicion);

  let names: string[] = ['nelsi', 'daniela', 'daniel', 'diego', 'ana'];
  function saludar(names: string){
    console.log(`Hola ${names}`)
  }

  // for(let i=0; i < names.length; i++){
  //   saludar(names[i]);
  // }

  // for(let nombre of names){
  //   saludar(nombre);
  // }
  // let i = 0;
  // while(i < names.length){
  //   saludar(names[i]);
  //   i += 1;
  // }


  // while(names.length>0){
    //   let nombre = names.shift()!; // ! sirve para decirle que no es nulo
    //   saludar(nombre);
    // }

    while(names.length>0){
      let nombre = names.shift() as string;
      saludar(nombre);
    }

    //este pedazo de codigo todavia no esta en typescript
    /*
    function auto(marca: string, modelo:string, annio:number){
      this.marca = marca;
      this.modelo = modelo;
      this.annio = annio;
    }

    let auto1= new auto('Tesla', 'Modelo3', 2022);
    console.log(auto1);
    */

    let products = [
      {name:'pencil', cost:800},
      {name: 'book', cost:3000},
      {name: 'eraser', cost:300},
      {name: 'marker', cost:3000},
      {name: 'pc', cost:50000},
    ]
    products.push({name: 'knife', cost: 7000})
    // let productsFilter = products.filter( function(product){return product.cost >=3000});
    let productsFilter = products.filter( product => {return product.cost >=3000}); //filtra por los items cuyo cost sea mayor o igual a 3000
    console.log(productsFilter);
    console.log(productsFilter.length);

    // let productsName = products.map( function(product){return product.name});
    let productsName = products.map( product => {return product.name}); //retorna el nombre de cada item de products en un array
    console.log(productsName);
    console.log(productsName.length);

    console.log('Recorrer con forEach')
    //retorna el nombre de cada item de products sin generar un array
    let productsNameForEach = products.forEach(function(product){console.log(product.name)});


    let foundProduct = products.find(product => {return product.name === 'pc'});
    console.log(foundProduct);

    let nombrefound = foundProduct?.name;
    console.log(nombrefound);

    let productsExpensive = products.some( product => {return product.cost >= 50000}); //retorna tru o false dependiendo si hay algun producto cuyo costo sea >= 50.000
    console.log(productsExpensive);

    //Reduce





})();
