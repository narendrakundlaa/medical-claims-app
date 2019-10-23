import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalSessionStorageService {

  constructor() { }
  /** set items method */
  localStorageSetItems(key: any, value: any) {
    localStorage.setItem(key, value);
  }
  /** get items methods */
  localStorageGetItems(key: any) {
    return localStorage.getItem(key);
  }
  /** remove items method */
  localStorageRemoveItem(key: any) {
    localStorage.removeItem(key);
  }
}
