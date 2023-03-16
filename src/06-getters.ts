/*
Con get podemos acceder a una propiedad con un alcance privado, podemos obtener los datos de esa propiedad pero no modificarlos o mutarlos.

Lo podemos acceder como si fuese una propiedad más de la instancia.

Por definición, todos los getters tienen que retornar algo.
*/
export class MyFecha {
  //forma corta de hacer el constructor
  constructor(
    //valores por defecto
    public year: number = 1990,
    public month: number = 1,
    private _day: number = 1) { }

  printFormat(): string {
    const day = this.addPadding(this._day)
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
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
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
}

const mydate = new MyFecha(2003)
console.log(mydate.printFormat());
console.log(mydate.day); //parece una propiedad pero es un método
console.log(mydate.isLeapYear);





