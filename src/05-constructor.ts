/*
constructor simplificado
*/
export class MyFecha {
  //forma corta de hacer el constructor
  constructor(
    //valores por defecto
    public year: number = 1990,
    public month: number = 1,
    private day: number = 1) { }

  printFormat(): string {
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
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
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  getday() {
    return this.day;
  }
}

const mydate = new MyFecha(2003)
console.log(mydate.printFormat());
console.log(mydate.getday());




