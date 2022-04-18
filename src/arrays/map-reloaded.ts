const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  }
];

const rta1 = orders.map(order => order.total);
console.log(rta1);

// const rta2 = orders.map(item => {
//   item.tax = .19; //no me va adejar porque iunicialmente no existe ese campo en item-- mutabilidad
//   return item;
// })
// console.log('rta2', rta2);

const rta3 = orders.map(item => {
  return {
    ...item, //crea una copia de items
    tax: .19
  }
})
console.log('rta3', rta3);

/*

rta3 [ { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 }, 
  { customerName: 'Zulema', 
    total: 120, 
    delivered: false, 
    tax: 0.19 }, 
  { customerName: 'Santiago', 
    total: 180, 
    delivered: true, 
    tax: 0.19 }, 
  { customerName: 'Valentina', 
    total: 240, 
    delivered: true, 
    tax: 0.19 } ] 

*/
