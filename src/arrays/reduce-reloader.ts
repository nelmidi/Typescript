const items = [1,3,2,3, 1, 2, 2];

const respuesta = items.reduce((obj: any, item) => {
  if(!obj[item]){
    obj[item] = 1;
  }else{
    obj[item] +=  1;
  }
  return obj;
}, {});

console.log(respuesta);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const respuesta1 = data
.map(item => item.level)
.reduce((obj: any, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(respuesta1);
