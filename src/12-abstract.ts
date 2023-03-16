/*
cada vez que implementamos una clase abstracta, no podemos crear instancias de esa clase, si no solo de las clases hijas.
se hace con la palabra abstract 
*/

import { Animal, Dog } from "./09-protected";

const animal = new Animal('caballo');
animal.greeting();


const perrito = new Dog('gufy', 'santiago');
perrito.greeting();
perrito.woof(2);
