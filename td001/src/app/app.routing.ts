import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {CoursepageComponent} from './coursepage/coursepage.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {SignuppageComponent} from './signuppage/signuppage.component';
import {ActivatepageComponent} from './activatepage/activatepage.component';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'course', component: CoursepageComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'signUp', component: SignuppageComponent},
  {path: 'activate', component: ActivatepageComponent},
  {path: 'loginTemplate', component: LoginComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
