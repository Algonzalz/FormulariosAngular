import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';
import { notNameHenry, match } from 'src/app/commons/validations';
import { NgbModal, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { Constant } from 'src/app/commons/constant';
import { PatternService } from 'src/app/service/pattern.service';
import { AuthService } from 'src/app/service/auth.service';
import { isNumber } from 'util';

import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
@Component({
  selector: 'app-owned-page',
  templateUrl: './owned-page.component.html',
  styleUrls: ['./owned-page.component.css']
})
export class OwnedPageComponent implements OnInit {
@ViewChild('content', { static : true}) content: ElementRef;
  userModel: User = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'password': '',
    'repeatPassword': '',
    'country': {
      'idCountry': 1
    },
    'state': {
      'idState': 2
    },
    'photo': null,
    'time': null
  };
  // tslint:disable-next-line: ban-types
  userEmpty: Object = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'password': '',
    'repeatPassword': '',
    'country': {
      'idCountry': null
    },
    'state': {
      'idState': null
    },
    'photo': null
  };

  countrys = [
    {
      idCountry: 1,
      nameCountry: 'Venezuela'
    },
    {
      idCountry: 2,
      nameCountry: 'United States'
    },
    {
      idCountry: 3,
      nameCountry: 'Spain'
    }
  ];
  stateVenezuela = [
    {
      idState: 1,
      nameState: 'Caracas'
    },
    {
      idState: 2,
      nameState: 'Vargas'
    },
    {
      idState: 3,
      nameState: 'Nueva Esparta'
    }
  ];
  stateUnitedEstates = [
    {
      idState: 1,
      nameState: 'Las Vegas'
    },
    {
      idState: 2,
      nameState: 'New York'
    },
    {
      idState: 3,
      nameState: 'Texas'
    }
  ];
  stateSpain = [
    {
      idState: 1,
      nameState: 'Gujon'
    },
    {
      idState: 2,
      nameState: 'Madrid'
    },
    {
      idState: 3,
      nameState: 'Barcelona'
    }
  ];

  
  ownedForm: FormGroup;
  paises: string[] = ['Venezuela', 'Estados Unidos', 'España'];
  estadosVenezuela: string[] = ['Caracas', 'Vargas', 'Nueva Esparta'];
  estadosEstadosUnidos: string[] = ['Las Vegas', 'New York', 'Texas'];
  estadosEspaña: string[] = ['Guijon', 'Madrid', 'Barcelona'];
  estadosCargados: any;

  name: any = 'henry';
  base64textString = [];

  meridian = true;
  minuteStep = 15;
  interval = 15;
  constructor(private modalService: NgbModal,
              private _patternService: PatternService,
              private _servicio: AuthService,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.createFormOwned();
    this.loadStates2(this.userModel.country.idCountry);
  }
  createFormOwned() {
    this.ownedForm = this.fb.group({
      firstName: [null, { validators: [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(Constant.Pattern.Form.Username),
            notNameHenry
            ], updateOn: 'blur'}],
      lastName: [null, { validators: [
            Validators.required,
            Validators.pattern(Constant.Pattern.Form.Name),
            Validators.maxLength(5)
            ], updateOn: 'blur'}],
      email: [null, Validators.required],
      password: [null, Validators.required],
      repeatPassword: ['', [
            Validators.required,
            match('password')
            ]],
      country: this.fb.group({
            idCountry: [null, {  validators: [
              Validators.required
            ]}],
      }),
      state: this.fb.group({
            idState: [null, { validators: [
                Validators.required
            ]}]
      }),
      photo: [null],
      time: [null, { validators: [
          Validators.required
        ]}]
    });
  }
  get firstName() {return this.ownedForm.get('firstName'); }
  get lastName() {return this.ownedForm.get('lastName'); }
  get email() {return this.ownedForm.get('email'); }
  get password() {return this.ownedForm.get('password'); }
  get repeatPassword() {return this.ownedForm.get('repeatPassword'); }
  get country() {return this.ownedForm.get('country.idCountry'); }
  get state() {return this.ownedForm.get('state.idState'); }
  get photo() {return this.ownedForm.get('photo'); }
  get time() {return this.ownedForm.get('time'); }

  save() {
    // this._servicio.sendData(this.userModel);
    // this._servicio.sendData(this.userModel);
    // console.log(this.ownedForm.value);
    // console.log(this.ownedForm);
    // console.log(this.userModel);
    console.log(this.ownedForm.value);
    this.ownedForm.reset(this.userEmpty);
  }
  // loadStates(name: string) {
  //   if (name === 'Venezuela' || name === 'Estados Unidos' || name === 'España') {
  //     this.state.setValidators([Validators.required]);
  //     this.state.updateValueAndValidity();
  //     this.userModel.state = null;
  //     if (name === 'Venezuela') {
  //       this.estadosCargados = this.estadosVenezuela;
  //     } else if (name === 'Estados Unidos') {
  //       this.estadosCargados = this.estadosEstadosUnidos;
  //     } else if (name === 'España') {
  //       this.estadosCargados = this.estadosEspaña;
  //     }
  //   } else {
  //     this.userModel.state = null;
  //     this.estadosCargados = null;
  //     this.state.clearValidators();
  //   }
  // }
  loadStates2(name: any) {
    if (name == 1 || name == 2 || name == 3) {
      this.state.setValidators([Validators.required]);
      this.state.updateValueAndValidity();
      // Valido que el country y el estado ya tengan un id asignado.
      if (!isNumber(this.userModel.country.idCountry)) {
        this.userModel.state.idState = null;
      }
      if (name == 1) {
        this.estadosCargados = this.stateVenezuela;
      } else if (name == 2) {
        this.estadosCargados = this.stateUnitedEstates;
      } else if (name == 3) {
        this.estadosCargados = this.stateSpain;
      }
    } else {
      // this.userModel.state = null;
      this.estadosCargados = null;
      this.state.clearValidators();
    }
  }
  formatTime(value: any) {
    console.log(value);
    this.userModel.time = value;
    console.log(this.userModel);
  }
  // open() {
  //   const modalRef = this.modalService.open(UniversalModalComponent);
  //   modalRef.componentInstance.name = 'Alonzito';
  // }
  // changeListener(e: any): void {
  //     console.log(e.target);
  //     this.readThis(e.target);
  // }

  // readThis(inputValue: any): void {
  //   var file: File = inputValue.files[0];
  //   var myReader: FileReader = new FileReader();

  //   myReader.onloadend = (e) => {
  //     this.userModel.photo = myReader.result;
  //     console.log(myReader.result);
  //   };
  //   myReader.readAsDataURL(file);

  // }

  onUploadChange(evt: any) {
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    this.userModel.photo = btoa(e.target.result);
    console.log(btoa(e.target.result));

  }
  open(content) {
    this.modalService.open(content, { size: 'xl' , scrollable: true, centered: true });
  }
  modalClose() {
    this.modalService.dismissAll();
  }
  //
  /* Henry Gonz[a]lez
    Validar en tiempo real que se cumpla
    la validacion de password coincidan
  */
  checkConfirmPassword() {
    if (!(this.userModel.repeatPassword === '')) {
      this.repeatPassword.updateValueAndValidity();
    }
  }
// validar que no se pueda escribir numeros en input con keydown
  // validateUser(event): void {
  //   const keyCode = event.keyCode;
  //   console.log(event.keyCode);
  //   const excludedKeys = [8, 39, 46, 95, 45, 46];

  //   if (!((keyCode >= 65 && keyCode <= 90) ||
  //     (keyCode >= 97 && keyCode <= 122) ||
  //     (keyCode >= 48 && keyCode <= 57) ||
  //     (excludedKeys.includes(keyCode)))) {
  //     event.preventDefault();
  //   }
  // }


  validatedUsername(event): void {
    this._patternService.validateUser(event);
  }
  validatedFullName(event): void {
    this._patternService.validateFullName(event);
  }
  validatedEmail(event: string): void {
    this._patternService.validateUser(event);
  }

  // validar la longitud de un campo en typescript
  validatedLenght(event: string, number: number) {
    const value = number - 1;
    console.log(String(event).length);
    if (String(event).length > value) {
      return false;
    }
  }
}
