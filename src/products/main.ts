import { products, addProduct, calcStock } from './product.service';

addProduct({
  title: 'Pro1',
  createdAt: new Date(1993, 1, 1),
  stock: 12
});
addProduct({
  title: 'Pro2',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
  size: 'XL'
});

products.push({
  title: 'Prod3',
  createdAt: new Date(1992, 1, 1),
  stock: 12,
  size: 'S'
})

const total = calcStock();

console.log(products);
console.log(total);

