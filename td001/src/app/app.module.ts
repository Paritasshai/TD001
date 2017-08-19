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
import { SignuppageComponent } from './signuppage/signuppage.component';

//
import {UserService} from './services/user.service';
import {MemberService} from './services/member.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CoursepageComponent,
    HeaderComponent,
    FooterComponent,
    LoginpageComponent,
    CourselistComponent,
    SignuppageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    UserService,
    MemberService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule {
}
