import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent

  }, {
    path: "send_email",
    component: EmailComponent


  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
