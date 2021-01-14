import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from './../models/contacto.usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactoUsuario:ContactoUsuario;
  public contactosUsuarios: ContactoUsuario[] = [];

  constructor(
    private router: Router
  ) {
    this.contactoUsuario = new ContactoUsuario('', '', '', '');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.contactoUsuario);
    this.contactosUsuarios.push(this.contactoUsuario);
    console.log(this.contactosUsuarios);
    form.reset();
    this.enviarAlert();
  }

  enviarAlert (){
    const editor: HTMLDivElement = (document.getElementById('alert') as HTMLDivElement);
    editor.classList.remove('d-none');
    setTimeout(()=> editor.classList.add('d-none'), 4000);
    this.irHome();
  }

  irHome(): void{
    setTimeout(()=> this.router.navigate(['/home']), 4000);
  }

}
