/* function getValue(value: unknown){
  return value;
}
 */

import { Dog } from "./09-protected";

//infiere el tipo flexiblemente pasando dos tipos
/* function getValue<Type, Type2>(value: Type){
  const array: Type[] = [value];
  return value;
} */

function getValue<T>(value: T){
  const array: T[] = [value];
  return value;
}

//enviar tipo por parametros
getValue<number>(12).toFixed();
getValue<string>('12').toLocaleLowerCase();
getValue<number[]>([1,3,6,5,]).forEach;
const perro = new Dog('fifi', 'santi')
getValue<Dog>(perro).greeting
/* Promise<boolean>
axios.get<string[]> */

