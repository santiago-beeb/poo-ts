import { ProductHttpService } from './service/product-http.service';

(async () => {
  const productService = new ProductHttpService();

  try {
    console.log('..'.repeat(10));
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map((item) => item.price));

    const productId = products[0].id;
    await productService.update(productId, {
      price: 10000,
      title: 'nuevo titulo',
      description: 'string description',
    });
    const product = await productService.finOne(productId);
    console.log(product);
  } catch (err) {
    console.error(err);
  }
})();
