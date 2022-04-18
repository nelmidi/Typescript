(() => {
  const login1 = (email: string, password: string) => {
    console.log(email, password)
  }

  login1('demo@demo.com', 'passwordemo');

  //ahora con objetos

  const login2 = (data: { email: string, password: string }) => {
    console.log(data.email, data.password)
  }
  login2({ email: 'demo@demo.com', password: 'passwordemo' });

  //otro ejemplo

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12
  });
  addProduct({
    title: 'Pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'XL'
  })

  console.log(products);


})();
