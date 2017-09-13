import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval;

  constructor() { }

  ngOnInit() {
  }

  startGame(){
    console.log("Game Started");
    this.interval = setInterval(function(){
      console.log("Interval Started.")
    },1000);
  }

  stopGame(){
    console.log("Game Stopped");
    clearInterval(this.interval);
  }

}
