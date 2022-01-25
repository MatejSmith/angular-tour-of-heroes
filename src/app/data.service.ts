import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  message: boolean;

  constructor() { }

  setStatus(data:any){
    this.message = data;
  }
  getStatus(){
    return this.message;
  }
}
