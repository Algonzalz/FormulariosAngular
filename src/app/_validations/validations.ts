import { AbstractControl } from '@angular/forms';

// funtion que evalua que el dato introducido no sea 'henry' especificamente
export function notNameHenry( control: AbstractControl): { [s: string]: boolean } {
    if (control.value === 'henry') {
      return {
        noHenry: true
      };
    }
    return null;
  }
// funtion que evalua que dos password sean iguales
export function match(controlKey: string) {
    return (control: AbstractControl): { [s: string]: boolean } => {
      // control.parent es el FormGroup
      if (control.parent) { // en las primeras llamadas control.parent es undefined
        const checkValue = control.parent.controls[controlKey].value;
        if (control.value !== checkValue) {
          return {
            match: true
          };
        }
      }
      return null;
    };
  }



