//librerias que no soportan typescript

import _, { keys } from 'lodash';


const data = [
  {
    username: 'nelsi',
    role: 'admin'
  },
  {
    username: 'paola',
    role: 'seller'
  },
  {
    username: 'danilo',
    role: 'seller'
  },
  {
    username: 'natalia',
    role: 'customer'
  },
  {
    username: 'vanessa',
    role: 'seller'
  },
]

const rta = _.groupBy(data, (item) => item.role);

// let grupos:  any = {};
// data.forEach(alumno =>{
//   const nombreGrupo = alumno.role;
//   if (!grupos[nombreGrupo]){
//     grupos[nombreGrupo] = [];
//   }
//     grupos[nombreGrupo].push(alumno);

// })


// let dataAgrupada = data.reduce((acumulador: any, data) => {
//   if (!acumulador[data.role]) {
//     acumulador[data.role] = [];
//   }
//   acumulador[data.role].push(data);
//   return acumulador

// }, {}
// )

console.log('Grupos', rta);
