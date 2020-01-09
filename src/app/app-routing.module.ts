import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonClickComponent } from './button-click/button-click.component'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'send', 
    component:ButtonClickComponent
  },
  {
    path:'', 
    component:LoginComponent
  }
];

@NgModule({
  declarations:
  [
    ButtonClickComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
