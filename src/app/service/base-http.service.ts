import axios from 'axios';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dtos/Product.dto';

export class BaseHttpService<T> {
  // data: T[] = [];

  constructor(private url: string) {}

  async getAll() {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(this.url + '/' + id, changes);
    return data;
  }
}

/* const service = new BaseHttpService<string>();
service.getAll()

const service2 = new BaseHttpService<Category>();
service2.getAll()
 */

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);

  const rta = await productService.getAll();
  console.log('products', rta.length);
  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'titulo',
  });

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);

  const rta1 = await categoryService.getAll();
  console.log('categories', rta1.length);
})();
