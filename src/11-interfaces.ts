//interfaces normal
export interface Driver {
  database: string; //atributos
  password: string;
  port: number;

  connect(): void;//metodo
  disconnect(): void;
  isConnected(name: string): boolean;
}
/* const driver: Driver = {
  database: 'postgres',
  password: '',
  port: 5432,
  connect: function (): void {
    throw new Error("Function not implemented.");
  }
} */


//esta clase debe implementar los atributos o metodos puestos en una interfaz con la palabra implements y el nombre de la interfaz
class PostgresDriver implements Driver {
  constructor(
    //debe cumplir con los estandares puestos en la interfaz, sino, lanza error, pero se le pueden agregar mas atributos que no esten en la intefaz
    public database: string,
    public password: string,
    public port: number
  ) { }
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }
  connect(): void {
    //code
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) { }
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }
  connect(): void {
    //code
  }
}


