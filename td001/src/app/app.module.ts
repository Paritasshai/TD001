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
import {AlertService} from './alertContent/AlertService';
import {AlertComponent} from './alertContent/AlertComponent';
import {AuthenticationService} from './services/Authentication.service';
import {AuthGuard} from './services/auth.guard';
import {UserProfileComponent} from './userProfile/user-profile.component';
import {ManagementPageComponent} from './management-page/management-page.component';
import {ForgotPasswordPageComponent} from './forgot-password-page/forgot-password-page.component';
import {forgotPassword} from "./services/forgotPassword";
import {TopUpBankPageComponent} from './top-up-bank-page/top-up-bank-page.component';
import {TopUpOnlinePageComponent} from './top-up-online-page/top-up-online-page.component';
import {OrderService} from "app/services/OrderService";
import {NonTopUpComponent} from './non-top-up/non-top-up.component';
import {BankStatementService} from "./services/BankStatementService";
import {PaymentHistoryDetailsComponent} from './payment-history-details/payment-history-details.component';
import {PaymentHistoryListComponent} from './payment-history-list/payment-history-list.component';
import {MyDatePickerModule} from "mydatepicker";
import {VideoListPageComponent} from './video-list-page/video-list-page.component';
import {FileUploadModule} from 'ng2-file-upload';
import {PaymentTransService} from "./services/PaymentTransService";

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
    UserProfileComponent,
    ManagementPageComponent,
    ForgotPasswordPageComponent,
    TopUpBankPageComponent,
    TopUpOnlinePageComponent,
    NonTopUpComponent,
    PaymentHistoryDetailsComponent,
    PaymentHistoryListComponent,
    VideoListPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MyDatePickerModule,
    FileUploadModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AlertService,
    UserService,
    forgotPassword,
    OrderService,
    BankStatementService,
    PaymentTransService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule {
}
