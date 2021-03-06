import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent }   from './components/header';
import { StoreService }   from './services/StoreService';

@NgModule({
  imports:      [ BrowserModule ],
  exports:		  [ HeaderComponent ],
  declarations: [ HeaderComponent ]
})
export class HomeModule { }
