import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 username :string ="default"
  constructor() { }
  setusername(data: string){
this.username=data
  }
  getusername(){

   return this.username
}}
