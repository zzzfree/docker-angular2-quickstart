import { Injectable } from '@angular/core'; 

@Injectable()
export class StoreService {
  store = {};
  listeners = {};

  bind(eventName, fn){
    if(this.listeners[eventName]){
      this.listeners[eventName].push(fn);
    }else{
      this.listeners[eventName] = [ fn ]
    }
  }
  unbind(eventName, fn){
    if(this.listeners[eventName]){
        this.listeners[eventName].remove(fn);
    }    
  }
  trigger(eventName, payload){
    for(let fn of this.listeners[eventName]){
      fn(payload);
    }
  }
}