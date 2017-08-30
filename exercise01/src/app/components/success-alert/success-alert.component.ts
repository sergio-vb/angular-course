import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  username:string;

  constructor() {}

  ngOnInit() {
  }

  resetUsername(){
    console.log("Resetting string.");
    this.username = "";
  }

}
