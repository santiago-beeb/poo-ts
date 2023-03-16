//consumir objeto, se crea la instancia del objeto y se comienza a manipular con sus metodos

const fecha = new Date(); //Date es una clase y con ella creamos una instancia que seria la variable fecha
fecha.getHours(); //la instancia fecha tiene varios metodos

const fecha2 = new Date(1992, 1, 12); //clase con parametros pero con los mismo metodos
fecha2.getHours();

console.log(fecha);
console.log(fecha2);

export class MyFecha {  //
  year: number;  //crear propiedades
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myfecha = new MyFecha(2022, 2, 3)
console.log(myfecha);



