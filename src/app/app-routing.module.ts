import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { OwnedPageComponent } from './components/owned-page/owned-page.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';


const routes: Routes = [
  {path: '', redirectTo: '/form', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},

  {path: '**', component: FormModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
