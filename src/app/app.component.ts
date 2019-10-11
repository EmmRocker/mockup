import { Component } from '@angular/core';
import {faLightbulb, faHeart} from '@fortawesome/free-regular-svg-icons';
import {faCalendarWeek, faCommentDollar} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mockup';
  // Font awesome variables
  faCommentDollar = faCommentDollar;
  faLightbulb = faLightbulb;
  faCalendarWeek = faCalendarWeek;
  faHeart = faHeart;
  public menu: Array<string> = ['Home', 'Messages', 'Wishlist', 'Settings', 'My Account'];
}

