import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {CoursepageComponent} from './coursepage/coursepage.component';
import {LoginpageComponent} from './loginpage/loginpage.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'course', component: CoursepageComponent},
  {path: 'login', component: LoginpageComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
