import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PippoArticoliListComponent } from './components/pippo-articoli-list/pippo-articoli-list.component';
import { PippoArticoloDetailComponent } from './components/pippo-articolo-detail/pippo-articolo-detail.component';
import { AutoriListComponent } from './components/autori-list/autori-list.component';

const routes: Routes = [
  {path:'articoli', component:PippoArticoliListComponent},
  {path:`articoli/:id`, component:PippoArticoloDetailComponent},
  {path:'autori', component:AutoriListComponent},
  {path: '', redirectTo: 'articoli', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
