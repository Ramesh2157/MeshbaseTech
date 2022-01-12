import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import all component

import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';




const routes: Routes = [
  { path: '', redirectTo:'/angular',pathMatch:'full'},
  { path: 'angular', component: AngularComponent},
  { path: 'javascript', component: JavascriptComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
