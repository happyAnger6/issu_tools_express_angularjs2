import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ContactModule } from './modules/contact/contact.module';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { AppRoutingModule } from './app-routing.module';

import { HighlightDirective } from './directives/highlight.directive';
import { UserService } from './services/user.service';
import { BranchService } from './services/branch.service';
import { AuthGuardService } from './services/auth-guard.service';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginComponent } from './components/login/login.component';
import { AdminModule } from './modules/admin/admin.module';

import { SharedModule } from './modules/shared/shared.module';
import { LostPageComponent } from './components/lost-page/lost-page.component';
import {HttpLogService} from "./services/http-log.service";
import {HttpLogBackendService} from "./services/http-log-backend.service";
import {Http, RequestOptions} from "@angular/http";
import {httpFactory} from "./shared/http-factory";

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,
    RegisterFormComponent,
    LoginComponent,
    LostPageComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ContactModule,
    SharedModule,
    FeedbackModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    BranchService,
    AuthGuardService,
    HttpLogService,
    HttpLogBackendService,
    {provide: Http, useFactory: httpFactory, deps:[HttpLogBackendService, RequestOptions]},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
