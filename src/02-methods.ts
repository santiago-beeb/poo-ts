/* métodos => Funciones dentro de una clase propiedades o atributos => Variables dentro de una clase */


export class MyFecha {  //
  year: number;  //crear propiedades
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

const mydate = new MyFecha(2003, 7, 6)
console.log(mydate.printFormat());
mydate.add(3 ,'days');
console.log(mydate);
mydate.add(2 ,'months');
console.log(mydate);
console.log(mydate.day);



