/* Si no le defines el acceso a ninguna variable por default sera pública.
si es publica se puede acceder a propiedades y modificarlas
*/
export class MyFecha {
  public year: number;
  public month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
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
console.log(mydate.day);
mydate.day=15  //acceder a propiedades y modificarlas
console.log(mydate);



