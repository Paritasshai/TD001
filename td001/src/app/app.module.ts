import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {CoursepageComponent} from './coursepage/coursepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CourselistComponent } from './courselist/courselist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CoursepageComponent,
    HeaderComponent,
    FooterComponent,
    LoginpageComponent,
    CourselistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule {
}
