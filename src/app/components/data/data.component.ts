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
  usuario: any = {
    nombrecompleto: {
      nombre: 'nombre dum',
      apellido: 'apellido'
    },
    correo: 'correo33@servidor.com'
  };

  constructor() {
    /* manejo de objetos complejos desde el formulario 
    -en el formcontrol se agrega la propiedad con el fin que el sistema, cargue los datos por defecto.
    -con esta linea se puede mostrar el valor de la propiedad por defecto en el formulario
     nombre: new FormControl(this.usuario.nombrecompleto.nombre, [
     lo anterior se quita para rellenar el formulario con una linea.
    */
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
    /* linea para mostrar todos los datos de una vez en el formulario por defecto
       esto es valido siempre y cuando el objeto tenga la misma estructura de FormGroup, en 
       este caso el objeto forma.
    */
    this.forma.setValue(this.usuario);


    /* Manejo del objeto simple sin valores anidados */
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
    console.log(this.forma);
    /* Resetear o borrar los datos del formulario despues de guardar */
    this.borrarCampos();
  }

  borrarCampos() {
    this.forma.reset({
      nombrecompleto: {
        nombre: '',
        apellidos: ''
      },
      correo: ''
    });
  }
}
