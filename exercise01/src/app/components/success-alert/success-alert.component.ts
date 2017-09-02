import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  username:string;
  paragraphVisible:boolean = true;
  ex2Counter:number = 0;
  ex2ArrayCounter:Date[] = [];

  constructor() {}

  ngOnInit() {
  }

  resetUsername(){
    console.log("Resetting string.");
    this.username = "";
  }

  onButtonEx2Click(){
    this.paragraphVisible = !this.paragraphVisible;
    this.ex2Counter++;
    //this.ex2ArrayCounter.push(this.ex2Counter);
    this.ex2ArrayCounter.push(new Date());
  }

}
