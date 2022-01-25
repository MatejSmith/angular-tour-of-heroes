import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userIdentify: boolean;

  constructor() { }

  setStatus(data:any){
    this.userIdentify = data;
  }
  getStatus(){
    return this.userIdentify;
  }
}
