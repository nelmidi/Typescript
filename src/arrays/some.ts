const numbersSome = [1, 2, 3, 4];

let rtaSome = false;
for(let index=0 ; index < numbersSome.length; index++){
  let element = numbersSome[index];
  if (element % 2 === 0) {
    rtaSome = true;
    break;
  }
}
console.log(rtaSome);
const rta2Some = numbersSome.some(item => item % 2 === 0);
console.log('rta2', rta2Some);
