import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counterArray = [];

  newGameComponentReceived(counter){
    console.log("Event Received, counter:", counter.value);
    this.counterArray.push(counter.value);
  }

}
