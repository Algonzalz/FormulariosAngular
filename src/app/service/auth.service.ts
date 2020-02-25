import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  sendData(model: any) {
    var countryAux;
    var stateAux;
    if (model.country.idCountry == null) {
      countryAux = null;
      stateAux = null;
    } else {
      countryAux = {
        idCountry: model.country.idCountry
      };
      stateAux = {
        idState: model.state.idState
      };
    }
      var modelito = {
        'firstName': model.firstName,
        'lastName': model.lastName,
        'email': model.email,
        'password': model.password,
        'repeatPassword': model.repeatPassword,
        'country': countryAux,
        'state': stateAux,
        'photo': model.photo
      };
      console.log('MODELO ENVIADO');
      console.log(modelito);
  }
}
