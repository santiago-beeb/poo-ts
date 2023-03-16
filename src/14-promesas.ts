import axios from "axios";

//promesas


(async () => {

  const API = 'https://api.escuelajs.co/api/v1/products'


  function delay () {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(()=>{
        resolve(true)
      },2000);
    })
    return promise;
  }

  function getProducts(){
    const promise = axios.get(API);
    return promise;
  }
  async function getProductsAsync(){
    const rta = await axios.get(API);
    return rta.data;
  }

  console.log('---'.repeat(10));
  const rta = await delay();
  console.log(rta);

  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log(products.data);
  const products2 = await getProductsAsync();
  console.log(products2);



})()

