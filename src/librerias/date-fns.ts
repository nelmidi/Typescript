//librerias que sí soportan Typescript

import { subDays, format } from 'date-fns'

const date = new Date (1998, 1, 28); // 0=enero, 1=febrero
const rta = subDays(date, 30); // a la fecha de date se le va a restar 30 días
const str = format(rta, 'yyyy/MM/dd'); // para dar formato

console.log(str);


