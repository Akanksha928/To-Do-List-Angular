import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  constructor(){
    // setTimeout(() => {
    //   this.title = "Title changed";
    // }, 2000);
  }
}
