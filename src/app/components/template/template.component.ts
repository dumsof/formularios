import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


/* se agrega en los estilos la validacion que permite que los bordes
   de las cajas de texto se coloquen rojas cuando no cumplen las validaciones
*/
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      }
  `]
})


export class TemplateComponent {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: ''
  };
  paises = [{
    codigo: 'CRI',
    nombre: 'Costa Rica'
  },
  {
    codigo: 'ESP',
    nombre: 'España'
  }];
  constructor() { }

  guardar(formulario: NgForm) {
    console.log('formulario posteado');
    console.log('valor formulario : ', formulario.value);
    console.log('NgForm', formulario);
    console.log('Usuario', this.usuario);
  }

}
