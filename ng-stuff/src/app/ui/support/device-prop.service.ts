import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DevicePropService {

  private isMobileSize = new BehaviorSubject(false);


  constructor() { }

  onResize(size){
    if(size < 1024){
      this.isMobileSize.next(true);
    }else{
      this.isMobileSize.next(false);
    }
  }

  isMobileView(): Observable<boolean>{
    return this.isMobileSize.asObservable().pipe(distinctUntilChanged())
  }

}
