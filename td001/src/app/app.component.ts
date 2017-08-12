import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app works!';
  ImgLogo: string;

  constructor() {
    this.ImgLogo = '../../assets/images/logo.png';
  }

}
