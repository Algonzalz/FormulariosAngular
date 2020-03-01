import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './components/data/data.component';
import { OwnedPageComponent } from './components/owned-page/owned-page.component';
// libreria ng-bootstrap de angular bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular MATERIAL
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    OwnedPageComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
