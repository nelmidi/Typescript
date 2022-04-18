//usar ctrl + shift + p y luego escoger Quokka en el current file

(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';


  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta); //hola

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed(2);
  console.log(rta2); //1212.00
})();

