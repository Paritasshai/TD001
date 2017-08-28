import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {CoursepageComponent} from './coursepage/coursepage.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {CourselistComponent} from './courselist/courselist.component';
import {SignuppageComponent} from './signuppage/signuppage.component';
import {UserService} from './services/user.service';
import {AlertService} from './signuppage/directives/AlertService';
import {AlertComponent} from './signuppage/directives/AlertComponent';
import {ActivatepageComponent} from './activatepage/activatepage.component';
import {LoginComponent} from './login/login.component';
import {AuthenticationService} from './loginpage/directives/Authentication.service';
import {AuthGuard} from './loginpage/directives/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CoursepageComponent,
    HeaderComponent,
    FooterComponent,
    LoginpageComponent,
    CourselistComponent,
    SignuppageComponent,
    AlertComponent,
    ActivatepageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AlertService,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule {
}
