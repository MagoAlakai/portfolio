import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from './../models/contacto.usuario';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_xWHAsizuYn8plxh4cTDy6");

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

  onSubmit(e: Event, form) {
    emailjs.sendForm('gmail', 'template_acs7is5', e.target as HTMLFormElement, 'user_xWHAsizuYn8plxh4cTDy6')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    form.reset();
    this.enviarAlert();
  }

  enviarAlert (){
    const editor: HTMLDivElement = (document.getElementById('alert') as HTMLDivElement);
    editor.classList.remove('d-none');
    setTimeout(()=> editor.classList.add('d-none'), 4000);
  }



}
