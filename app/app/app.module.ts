import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // must needed for NgModule

import { HomeModule }   from './modules/home/main';

import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ BrowserModule, HomeModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
