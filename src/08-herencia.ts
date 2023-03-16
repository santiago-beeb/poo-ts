/*
Para que otras clases herenden los atributos de un constructor principal esta debe la palabra reservada extends
*/

export class Animal {
  constructor(public name: string) { }

  move() {
    console.log('moving');
  }

  greeting() {
    return `hi, Im ${this.name}`
  }
}

export class Dog extends Animal {

  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}

const gato = new Animal('terminator')
gato.move();
console.log(gato.greeting());


const perro = new Dog('peerito','santi')
perro.move();
console.log(perro.greeting());
perro.woof(3);
console.log(perro.owner);
