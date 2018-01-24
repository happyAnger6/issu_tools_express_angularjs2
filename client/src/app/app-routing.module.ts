import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';

import { AuthGuardService } from './services/auth-guard.service';
import {LostPageComponent} from "./components/lost-page/lost-page.component";

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuardService]},
  { path: 'admin/login', component: LoginComponent},
  { path: '**', component: LostPageComponent},
  // { path: 'feedback', loadChildren: 'app/modules/feedback/feedback.module#FeedbackModule', canActivate: [AuthGuardService]},
  // { path: 'contact', loadChildren: 'app/modules/contact/contact.module#ContactModule', canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
