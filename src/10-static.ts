console.log(Math.PI);
console.log(Math.max(5, 6, 54, 53, 65, 5, 6, 9, 8, 5, 56132,));

//con las propiedades static no se necesita hacer una instancia de la clase para acceder a ellas
//tambien funciona para los metodos

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max : item);
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(-51, -51, -5, -9));

