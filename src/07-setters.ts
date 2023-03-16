/*
Es parecido a un get, solo que este no retorna nada, es un método void, pero no hace falta colocarle lo que retorna, ya que va a dar error.

A set lo podemos usar para tener reglas de modificación para nuestros parámetros.
*/
export class MyFecha {
  constructor(
    public year: number = 1990,
    private _month: number = 1,
    private _day: number = 1) { }

  printFormat(): string {
    const day = this.addPadding(this._day)
    const month = this.addPadding(this._month)
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value <= 9) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() { //palabra reservada get
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true
    if (this.year % 100 === 0) return false
    return this.year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  //no puedo retornar nada, solo modificar
  set month(newValue: number) {
    if(newValue >= 1 && newValue <= 12) {
      this._month = newValue
    } else {
      throw new Error('Invalid month');
    }
  }
}

const mydate = new MyFecha(2003)
console.log(mydate.printFormat());
mydate.month = 12
console.log(mydate.month);
