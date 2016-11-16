import { Component, Input, NgModule , OnInit } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';  
import { StoreService } from './modules/home/services/StoreService';

@Component({
  selector: 'my-app', 
  template: `
  <h1>Hello sss <header [titleText]="headerText" > header raw </header> Angular!</h1>
  setDate <button (click)="setData()">setData</button> <br/>
  keyup: <input   (keyup) = "headerText=$event.target.value" />
  ngModel: <input   [(ngModel)] = "headerText" />
  `,
  providers: [ StoreService ]
})
export class AppComponent  implements OnInit {  
  headerText = "yes";
  me = this;

  constructor(private storeService : StoreService){
    
  }

  setData(){
    this.storeService.trigger('setData','ok data');
  } 
  
  ngOnInit(): void {
    this.storeService.bind('setData', (data) =>{
        this.headerText = data;
    });
  }
}
