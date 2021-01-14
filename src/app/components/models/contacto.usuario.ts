export class ContactoUsuario{

  public nombre: string;
  public apellido: string;
  public email: string;
  public mensaje: string;

  constructor(nombre:string, apellido:string, email:string, mensaje:string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.mensaje = mensaje;
  }

  getNombre():string{
    return this.nombre;
  }

  getApellido():string{
    return this.apellido;
  }

  getEmail():string{
    return this.email;
  }

  getMensaje():string{
    return this.mensaje;
  }

  setNombre(nombre:string):void{
    this.nombre = nombre;
  }

  setApellido(apellido:string):void{
    this.apellido = apellido;
  }

  setEmail(email:string):void{
    this.email = email;
  }

  setMensaje(mensaje:string):void{
    this.mensaje = mensaje;
  }

}
