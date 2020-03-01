import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent{

  forma: FormGroup;

  usuari: any = {
    nombreCompleto: {
      nombre: 'fernando',
      apellido: 'herrera'
    },
    correo: 'fernandoHerrera85@gmail.com',
    pasatiempos: ['correr', 'dormir', 'comer']
  }
  constructor() {
    console.log(this.usuari);
    
    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
      nombre: new FormControl('',   [
                                      Validators.required,
                                      Validators.minLength(3),
                                    ]), 
        apellido: new FormControl('', [Validators.required, this.noHenry])
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

    // this.forma.setValue( this.usuari );

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.notSame.bind(this.forma)
    ]);
   }


  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);

    // this.forma.reset(this.usuari);
  }
  // agreagrPasatiempos() {
  //   (<FormArray>this.forma.controls['pasatiempos']).push(
  //     new FormControl('',Validators.required)
  //   )
  // }

  noHenry( control: FormControl ): { [s: string]: boolean } {

    if (control.value === 'henry') {
      return {
        noHenry: true
      }
    }
    return null;
  }

  notSame(control: FormControl ): { [s: string]: boolean } {
    let forma: any = this;
    if( control.value !== forma.controls['password1'].value ){
      return{
        notSame: true
      }
    }
    return null;
  }
}
