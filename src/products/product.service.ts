import { Product } from './product.model';

const products: Product[] = [];
const addProduct = (data: Product) => {
  products.push(data);
}

const calcStock = (): number =>{

  return products.reduce((a , b) => a + b.stock, 0) //en este caso (a+b) es (previousValue: number, currentValue: Product), y a comenzara con un valor de 0
  // let total = 0;
  // products.forEach(item=>{
  //   total += item.stock;
  // }
  // return total;
}

export {products, addProduct, calcStock}
