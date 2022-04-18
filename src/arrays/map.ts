const letters2 = ['a', 'b','c', 'd'];
// const newArray = [];
// for (let index = 0; index < letters2.length; index++) {
//     const element = letters2[index];
//     newArray.push(element + '++');
// }

const newArray = letters2.map(item => item + '++');
console.log('original', letters2);
console.log('new', newArray);
