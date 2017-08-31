import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {CoursepageComponent} from './coursepage/coursepage.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {SignuppageComponent} from './signuppage/signuppage.component';
import {ActivatepageComponent} from './activatepage/activatepage.component';
import {LoginComponent} from './login/login.component';
import {UserProfilePageComponent} from "./user-profile-page/user-profile-page.component";

const appRoutes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'course', component: CoursepageComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'signUp', component: SignuppageComponent},
  {path: 'activate', component: ActivatepageComponent},
  {path: 'loginTemplate', component: LoginComponent},
  {path: 'userProfile', component: UserProfilePageComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
