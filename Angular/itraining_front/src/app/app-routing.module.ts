import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AccountComponent} from "./account/account.component";
import {AdministratorAccountComponent} from "./account/administrator-account/administrator-account.component";
import {TeacherAccountComponent} from "./account/teacher-account/teacher-account.component";
import {LearnerAccountComponent} from "./account/learner-account/learner-account.component";
import {InscriptionComponent} from "./inscription/inscription.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'account', component: AccountComponent,
  children: [
    {path: 'administrator', component: AdministratorAccountComponent},
    {path: 'teacher', component: TeacherAccountComponent},
    {path: 'learner', component: LearnerAccountComponent}
  ]
  },
  {path: 'inscription', component: InscriptionComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
