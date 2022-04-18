const words = ['spray', 'limit', 'elite', 'exuberant'];

const nuevoArray = [];
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length < 6 ) {
    nuevoArray.push(element)
  }
}
console.log(nuevoArray);

const rta = words.filter(item => item.length < 6);
console.log(rta);

const orders2 = [
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
  },
  {
    customerName: 'Nicolas',
    total: 20,
    delivered: false,
  }
];

const rtafilter = orders2.filter(item => item.delivered && item.total >= 100);
console.log(rtafilter);
/*
[ { customerName: 'Santiago', total: 180, delivered: true },
  { customerName: 'Valentina', total: 240, delivered: true } ]
*/

const search = (query: string) =>{
  return orders2.filter(item=> item.customerName.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
}

console.log(search('Nico'));
