import { Component } from '@angular/core';
/* se importa para interactuar con los formularios de angular */
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {
  forma: FormGroup;

  /* esta seria la representación para un objeto complejo */
  usuario: Object = {
    nombrecompleto: {
      nombre: 'nombre dum',
      apellido: 'apellido'
    },
    correo: 'correo33@servidor.com'
  };

  constructor() {
    /* manejo de objetos complejos desde el formulario */
    this.forma = new FormGroup({
      nombrecompleto: new FormGroup(
        {
          nombre: new FormControl('', [
            Validators.required,
            Validators.minLength(3)
          ]),
          apellido: new FormControl('', [
            Validators.required,
            Validators.minLength(3)
          ])
        }),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ])
    });

    /*  this.forma = new FormGroup({
       nombre: new FormControl('', [
         Validators.required,
         Validators.minLength(3)
       ]),
       apellido: new FormControl('', [
         Validators.required,
         Validators.minLength(3)
       ]),
       correo: new FormControl('', [
         Validators.required,
         Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
       ])
     }); */
  }
  guardarCambios() {
    console.log(this.forma.value);
  }

}
