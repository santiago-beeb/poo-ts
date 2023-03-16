/*
Singleton nos previene crear múltiples instancias de una clase.

Esto es muy usado en Arquitectura de Software, pues nos ayuda a ahorrar uso de memoria.
*/

export class MyService {

  static instance: MyService | null = null;

  private constructor(private name: string) {

  }

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('entra una vez');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('servicio 1');
console.log(myService1.getName());
const myService2 = MyService.create('servicio 2');
console.log(myService2.getName());

console.log(myService1 === myService2);


