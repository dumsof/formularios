import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario: Object = {
    nombre: 'Dum',
    apellido: 'Urru',
    correo: 'dun34@hotmail.com'
  };

  constructor() { }

  guardar(formulario: NgForm) {
    console.log('formulario posteado');
    console.log('valor formulario : ', formulario.value);
    console.log('NgForm', formulario);
    console.log('Usuario', this.usuario);
  }

}
