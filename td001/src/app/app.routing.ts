import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {CoursepageComponent} from './coursepage/coursepage.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {SignuppageComponent} from './signuppage/signuppage.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'course', component: CoursepageComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'signUp', component: SignuppageComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
