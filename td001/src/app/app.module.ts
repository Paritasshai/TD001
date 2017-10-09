import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {CourselistComponent} from './courselist/courselist.component';
import {SignuppageComponent} from './signuppage/signuppage.component';
import {UserService} from './services/User.service';
import {AlertService} from './alertContent/AlertService';
import {AlertComponent} from './alertContent/AlertComponent';
import {AuthenticationService} from './services/Authentication.service';
import {AuthGuard} from './services/Auth.guard';
import {UserProfileComponent} from './userProfile/user-profile.component';
import {ManagementPageComponent} from './management-page/management-page.component';
import {ForgotPasswordPageComponent} from './forgot-password-page/forgot-password-page.component';
import {forgotPassword} from "./services/ForgotPassword";
import {TopUpBankPageComponent} from './top-up-bank-page/top-up-bank-page.component';
import {TopUpOnlinePageComponent} from './top-up-online-page/top-up-online-page.component';
import {OrderService} from "app/services/OrderService";
import {NonTopUpComponent} from './non-top-up/non-top-up.component';
import {BankStatementService} from "./services/BankStatementService";
import {PaymentHistoryListComponent} from './payment-history-list/payment-history-list.component';
import {MyDatePickerModule} from "mydatepicker";
import {VideoListPageComponent} from './course-video-list-page/video-list-page.component';
import {FileUploadModule} from 'ng2-file-upload';
import {PaymentTransService} from "./services/PaymentTransService";
import {CourseListsComponent} from './course-lists/course-lists.component';
import {CourseService} from "./services/CourseService";
import {UserManagementComponent} from './user-management/user-management.component';
import {OrderManagementComponent} from './order-management/order-management.component';
import {EditCourseComponent} from './edit-course/edit-course.component';
import {EditCourstIdComponent} from './edit-courst-id/edit-courst-id.component';
import {ImageUploadModule} from "angular2-image-upload";
import {AddVideoItemComponent} from "./add-video-item/add-video-item.component";
import {PurchaseCourseService} from "./services/PurchaseCourseService";
import { Ng2OrderModule } from 'ng2-order-pipe';
import {FacebookModule} from "ngx-facebook";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
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
    PaymentHistoryListComponent,
    VideoListPageComponent,
    CourseListsComponent,
    UserManagementComponent,
    OrderManagementComponent,
    EditCourseComponent,
    EditCourstIdComponent,
    AddVideoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MyDatePickerModule,
    FileUploadModule,
    ImageUploadModule.forRoot(),
    Ng2OrderModule,
    FacebookModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AlertService,
    UserService,
    forgotPassword,
    OrderService,
    BankStatementService,
    PaymentTransService,
    CourseService,
    PurchaseCourseService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule {
}
