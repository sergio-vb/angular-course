import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './components/WarningAlert/WarningAlert.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent, WarningAlertComponent, SuccessAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
