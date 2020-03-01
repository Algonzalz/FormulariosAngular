import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { EventEmitter } from 'protractor';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // tslint:disable-next-line: no-output-rename
  // @Output('search') searchEmitter = new EventEmitter();

    get search() {return this.searchFormgroup.get('search'); }
    searchFormgroup: FormGroup;
  
  usuarios:any = [];
  filtroValor = '';
  constructor(private fb: FormBuilder,
              private _htpp: HttpClient) { }


  ngOnInit() {
    this._htpp.get('https://jsonplaceholder.typicode.com/users').subscribe((users) => this.usuarios = users);
    this.searchFormgroup = this.createFormSearch();
    // this.search.valueChanges.subscribe( value => this.searchEmitter.emit(value));
    this.search.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => this.onSubmit(value));
  }

  createFormSearch() {
    return new FormGroup({
      search: new FormControl('', { validators: [
                                    Validators.required
                                  ]})
    });
  }


  onSubmit(value) {
    this.filtroValor = value;
    console.log(value);
  }



}
