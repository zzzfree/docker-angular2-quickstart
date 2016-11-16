import { Component, Input } from '@angular/core';
import { StoreService } from '../services/StoreService';

@Component({
  selector: 'header', 
  template: ' <button (click)="setData()"> go </button> <h1> header {{titleText}} </h1> ',
  styles: [`
  h1{
	color: red;
  }
  `]
})
export class HeaderComponent { 
  @Input()
  titleText = 'test1';

  constructor(private storeService : StoreService){    
  }

  setData(){
    this.storeService.trigger('setData','gogogo');
  }

}
