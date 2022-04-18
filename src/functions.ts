(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }
    const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
    console.log(producto1)
    console.log(producto1.title)

  //con arrow function ()=>{}
  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJsonV2('P2', new Date(), 5, 'XL');
  console.log(producto2)
  console.log(producto2.title)

  const producto3 = createProductToJsonV2('P3', new Date(), 7);
  console.log(producto3)


  }) ();
