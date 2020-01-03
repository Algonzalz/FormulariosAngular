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
    state: null
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
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required)
    });
  }

  get firstName() {return this.ownedForm.get('firstName'); }
  ngOnInit() {
    this.open(this.content);
  }

  save() {
    console.log(this.ownedForm.value);
    console.log(this.ownedForm);
    this.ownedForm.reset(this.userEmpty);
  }
  loadStates(name: any) {
    this.userModel.state = null;
    if (name === 'Venezuela') {
      this.estadosCargados = this.estadosVenezuela;
    } else if (name === 'Estados Unidos') {
      this.estadosCargados = this.estadosEstadosUnidos;
    } else if (name === 'España') {
      this.estadosCargados = this.estadosEspaña;
    }
  }
  // open() {
  //   const modalRef = this.modalService.open(UniversalModalComponent);
  //   modalRef.componentInstance.name = 'Alonzito';
  // }

  open(content) {
    this.modalService.open(content);
  }
  modalClose() {
    this.modalService.dismissAll();
  }
  // notNameHenry( control: AbstractControl): { [s: string]: boolean } {
  //   if (control.value === 'henry') {
  //     return {
  //       noHenry: true
  //     };
  //   }
  //   return null;
  // }


  // match(controlKey: string) {
  //   return (control: AbstractControl): { [s: string]: boolean } => {
  //     // control.parent es el FormGroup
  //     if (control.parent) { // en las primeras llamadas control.parent es undefined
  //       const checkValue = control.parent.controls[controlKey].value;
  //       if (control.value !== checkValue) {
  //         return {
  //           match: true
  //         };
  //       }
  //     }
  //     return null;
  //   };
  // }

}
