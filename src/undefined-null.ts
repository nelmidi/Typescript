(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;
  let myNull: null = null;

  let myUndefined: undefined = undefined;
  let myNumber: number | null = null; //
  myNumber = 12;
  let myString: string | undefined = undefined;
  myString = 'aas';


  function hi(name: string | null) {
    let hello = 'Hello ';
    if (name) {
      hello += name;
    }else {
        hello += 'nobody';
    }
      console.log(hello);
    }
    hi('Nicolas');
    hi(null);

    function hiV2(name: string | null) {
      let hello = 'Hello ';
      hello += name?.toLocaleLowerCase() || 'nadie';
      // hello += name? name.toLocaleLowerCase() :'nadie';
      console.log(hello);
    }
    hiV2('Nelsi');
    hiV2(null);



  }) ();
