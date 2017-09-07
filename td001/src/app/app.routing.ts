import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {CoursepageComponent} from './coursepage/coursepage.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {SignuppageComponent} from './signuppage/signuppage.component';
import {ManagementPageComponent} from "./management-page/management-page.component";
import {ForgotPasswordPageComponent} from "./forgot-password-page/forgot-password-page.component";
import {TopUpBankPageComponent} from "./top-up-bank-page/top-up-bank-page.component";
import {TopUpOnlinePageComponent} from "./top-up-online-page/top-up-online-page.component";
import {UserProfileComponent} from "./userProfile/user-profile.component";
import {NonTopUpComponent} from "./non-top-up/non-top-up.component";

const appRoutes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'course', component: CoursepageComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'signUp', component: SignuppageComponent},
  {path: 'userProfile', component: UserProfileComponent},
  {path: 'management', component: ManagementPageComponent},
  {path: 'forgotPassword', component: ForgotPasswordPageComponent},
  {path: 'topUpBank/:id', component: TopUpBankPageComponent},
  {path: 'topUpOnline', component: TopUpOnlinePageComponent},
  {path: 'nonTopUp', component: NonTopUpComponent},


  // otherwise redirect to home
  {path: '**', redirectTo: 'home'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
