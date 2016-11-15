import { Component, Input } from '@angular/core';
@Component({
  selector: 'header', 
  template: '<h1> header {{titleText}} </h1>',
  styles: [`
  h1{
	color: red;
  }
  `]
})
export class HeaderComponent { 
  @Input()
  titleText = 'test1';
}
