import axios from "axios";

import { Product } from "./models/product.model";

(async () => {

  const API = 'https://api.escuelajs.co/api/v1/products'

  async function getProducts() {
    const { data } = await axios.get<Product[]>(API);
    return data;
  }

  const products = await getProducts();
  console.log(products.map(item => `${item.id} - ${item.title}`));
})()

