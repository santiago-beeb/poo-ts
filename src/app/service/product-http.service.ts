import axios from 'axios';

import { UpdateProductDto, CreateProductDto } from '../dtos/Product.dto';
import { ProductService } from '../models/product-service.model';
import { Product } from '../models/product.model';

export class ProductHttpService implements ProductService {
  private API = 'https://api.escuelajs.co/api/v1/products';

  async getAll() {
    const { data } = await axios.get<Product[]>('');
    return data;
  }
  async update(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put(`${this.API}/${id}`, changes);
    return data;
  }
  async create(dto: CreateProductDto) {
    const { data } = await axios.post(this.API, dto);
    return data;
  }
  async finOne(id: Product['id']) {
    const { data } = await axios.get(`${this.API}/${id}`);
    return data;
  }
}
