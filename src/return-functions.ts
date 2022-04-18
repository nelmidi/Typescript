(()=>{

    const calcTotal = (prices: number[]): number => {
      // return prices.reduce((a,b) => a+b )
      // return prices.reduce((a,b) => {return a+b})  //a toma el primer valor y lo suma con el segundo valor que es b, luego si hay más items entonces a se convierte en la suma de a+b inicial y b toma el siguiente valor
      let total = 0;
      prices.forEach(item => {
        total += item;
      });
      return total

    }

    const result1 = calcTotal([3,4,6,1]);
    console.log(result1);

    const printTotal = (prices: number[]): void =>{
      const rta = calcTotal (prices);
      console.log( `El total es ${rta}`);
    }


    printTotal([1,2,1,1,1]);


})();
