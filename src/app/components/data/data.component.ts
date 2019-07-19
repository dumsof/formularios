import { Component } from '@angular/core';
/* se importa para interactuar con los formularios de angular */
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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
    correo: 'correo33@servidor.com',
    pasatiempos: ['Correr', 'Dormir', 'Correr']
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
          apellido: new FormControl('',
            [Validators.required,
            this.noHerrera,
            Validators.minLength(3)
            ])
        }),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]),
      pasatiempos: new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      password1: new FormControl('', Validators.required),
      password2: new FormControl()
    });
    /* nueva forma de agregar validación a un control que equivale a lo anterior */
    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);
    /* linea para mostrar todos los datos de una vez en el formulario por defecto
       esto es valido siempre y cuando el objeto tenga la misma estructura de FormGroup, en 
       este caso el objeto forma.
    */
    /*  this.forma.setValue(this.usuario); */


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

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }
  /* INICIO VALIDACION */
  /* crear validaciones personalizadas, en este caso se necesita que no se pueda ingresar un nombre herrera */
  noHerrera(control: FormControl): { [s: string]: boolean } {
    /* si devuelve true es porque no cumple con la validacion y se digito herrera */
    if (control.value === 'herrera') {
      return {
        noherrera: true
      };
    }
    /* entra por este lado cuando no se cumple la validación lo deja continuar */
    return null;
  }

  noIgual(control: FormControl): any {
    let forma: any = this;
    /* si devuelve true es porque no cumple con la validacion y se digito herrera */
    if (control.value !== forma.controls['password1'].value) {
      return {
        noiguales: true
      };
    }
    /* entra por este lado cuando no se cumple la validación lo deja continuar */
    return null;
  }
  /* FINAL VALIDACION */
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
