import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-form-modal',
    templateUrl: './form-modal.component.html',
    styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {

constructor(    private fb: FormBuilder,
                private _modalService: NgbModal, ) { }
    forma: FormGroup;
    fomrasita: FormGroup;
    usuario: Object = {
        country: {
            idCountry: 1
        },
        state: {
            idState: 2
        }
    }
    ngOnInit() {
        this.forma = this.createFormGroup();
        this.fomrasita = this.createFormGroup2();
    }
    createFormGroup() {
        return this.fb.group({
            firstName: ['', [Validators.required]],
            lastName: ['', []],
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
            confirmPassword: ['', [Validators.required]],
            country: this.fb.group({
                idCountry: ['']
            }),
            state: this.fb.group({
                idState: ['']
            })
        });
    }
    createFormGroup2() {
        return this.fb.group({
            nombre: ['', {validators: [Validators.required], updateOn: 'blur' }],
            apellido: ['', {validators: [Validators.required], updateOn: 'blur' }]
        });
    }

    /**
     * getters del primero
     */
    get firstName() { return this.forma.get('firstName'); }
    get lastName() { return this.forma.get('lastName'); }

    /**
     * getters del segundo
     */
    get nombre() { return this.fomrasita.get('nombre'); }
    get apellido() { return this.fomrasita.get('apellido'); }
    onSubmit() {
    }
    onSubmit2() {
        if (!this.fomrasita.valid) {
            console.log('campos invalidos');
        }  else {
            this.save();
        }

    }

    open(content) {
        this._modalService.open(content);
      }
    modalClose() {
        this._modalService.dismissAll();
    }
    save() {
        console.log('listo');
        this.fomrasita.reset();
        this.modalClose();
    }
}
