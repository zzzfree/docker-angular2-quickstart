import { Component, Input, NgModule  } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser'; 
@Component({
  selector: 'my-app', 
  template: `
  <h1>Hello <header [titleText]="headerText" > header raw </header> Angular!</h1>
  keyup: <input   (keyup) = "headerText=$event.target.value" />
  ngModel: <input   [(ngModel)] = "headerText" />
  `
})
export class AppComponent { 
  
}
