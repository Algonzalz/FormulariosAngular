import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { notNameHenry, match } from 'src/app/_validations/validations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UniversalModalComponent } from 'src/app/modal/universal-modal/universal-modal.component';

@Component({
  selector: 'app-owned-page',
  templateUrl: './owned-page.component.html',
  styleUrls: ['./owned-page.component.css']
})
export class OwnedPageComponent implements OnInit {
@ViewChild('content', { static : true}) content: ElementRef;
  userModel: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    country: null,
    state: null,
    photo: null
  };
  userEmpty: Object = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    country: null,
    state: null
  };
  ownedForm: FormGroup;
  paises: string[] = ['Venezuela', 'Estados Unidos', 'España'];
  estadosVenezuela: string[] = ['Caracas', 'Vargas', 'Nueva Esparta'];
  estadosEstadosUnidos: string[] = ['Las Vegas', 'New York', 'Texas'];
  estadosEspaña: string[] = ['Guijon', 'Madrid', 'Barcelona'];
  estadosCargados: any;
  name: any = 'henry';
  base64textString = [];
  constructor(private modalService: NgbModal) {
    this.ownedForm = new FormGroup({
      firstName: new FormControl('', [
                                        Validators.required,
                                        Validators.minLength(4),
                                        notNameHenry
                                     ]),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repeatPassword: new FormControl('', [
                                            Validators.required,
                                            match('password')
                                          ]),
      country: new FormControl(''),
      state: new FormControl(''),
      photo: new FormControl('')
    });
  }

  get firstName() {return this.ownedForm.get('firstName'); }
  get lastName() {return this.ownedForm.get('lastName'); }
  get email() {return this.ownedForm.get('email'); }
  get password() {return this.ownedForm.get('password'); }
  get repeatPassword() {return this.ownedForm.get('repeatPassword'); }
  get country() {return this.ownedForm.get('country'); }
  get state() {return this.ownedForm.get('state'); }
  get photo() {return this.ownedForm.get('photo'); }
  ngOnInit() {
    // this.open(this.content);
  }

  save() {
    console.log(this.ownedForm.value);
    console.log(this.ownedForm);
    this.ownedForm.reset(this.userEmpty);
  }
  loadStates(name: string) {
    if (name === 'Venezuela' || name === 'Estados Unidos' || name === 'España') {
      this.state.setValidators([Validators.required]);
      this.state.updateValueAndValidity();
      this.userModel.state = null;
      if (name === 'Venezuela') {
        this.estadosCargados = this.estadosVenezuela;
      } else if (name === 'Estados Unidos') {
        this.estadosCargados = this.estadosEstadosUnidos;
      } else if (name === 'España') {
        this.estadosCargados = this.estadosEspaña;
      }
    } else {
      this.userModel.state = null;
      this.estadosCargados = null;
      this.state.clearValidators();
    }
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
  validateNumber(event) {
    const keyCode = event.keyCode;

    const excludedKeys = [8, 37, 39, 46];

    if (!((keyCode >= 48 && keyCode <= 57) ||
      (excludedKeys.includes(keyCode)))) {
      event.preventDefault();
    }
  }
}
