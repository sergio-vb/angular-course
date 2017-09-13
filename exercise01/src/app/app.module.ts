import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { GameControlComponent } from './components/assignment-four/game-control/game-control.component';
import { OddComponent } from './components/assignment-four/odd/odd.component';
import { EvenComponent } from './components/assignment-four/even/even.component';

@NgModule({
  declarations: [
    AppComponent, WarningAlertComponent, SuccessAlertComponent, GameControlComponent, OddComponent, EvenComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
