import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() newGameComponent = new EventEmitter<{counter:number}>();

  interval;
  counter:number = 0;

  constructor() { }

  ngOnInit() {
  }

  startGame(){
    console.log("Game Started");

    this.interval = setInterval(() => {
      this.counter++;
      console.log("Interval running. Counter: ", this.counter);
      this.newGameComponent.emit({counter: this.counter});
    },1000);
  }

  stopGame(){
    console.log("Game Stopped");
    clearInterval(this.interval);
  }

}
