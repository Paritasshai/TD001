import {Component} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  // title = 'app works!';
  ImgLogo: string;

  constructor() {
    this.ImgLogo = '../../assets/images/logo.png';
  }

}
