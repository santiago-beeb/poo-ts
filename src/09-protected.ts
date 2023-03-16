/*
Para que otras clases herenden los atributos de un constructor principal esta debe la palabra reservada extends
*/

export class Animal {
  constructor(protected name: string) { }

  move() {
    console.log('moving');
  }

  greeting() {
    return `hi, Im ${this.name}`
  }

  protected doSomething(){
    console.log('doo');
  }
}

export class Dog extends Animal {

  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('woof!', this.name);
    }
    this.doSomething();
  }

  move() {
    console.log('moving as a dog');
    super.move()
  }
}

const perro = new Dog('peerito', 'santi')
//perro.name = 'perrote'
perro.woof(3);
perro.move()
