import { ProductMemoryService } from "./service/Product-memory.service";

const productService = new ProductMemoryService();

productService.create({
  title: 'producto 1',
  price: 100,
  description: 'producto 1',
  images: [],
  categoryId: 2,
})

const products = productService.get();
const productId = products[0].id;

productService.update(productId, {
  title: 'cambiar nombre'
});

const rta = productService.findOne(productId);
console.log(rta);



