import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
import { OwnedPageComponent } from './components/owned-page/owned-page.component';
// libreria ng-bootstrap de angular bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UniversalModalComponent } from './modal/universal-modal/universal-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent,
    OwnedPageComponent,
    UniversalModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UniversalModalComponent]
})
export class AppModule { }
