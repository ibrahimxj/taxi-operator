import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { TranslateLang } from 'src/app/service/translate.service';
import { HotToastService } from '@ngneat/hot-toast';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  searchText: any;
  users: Object | any;
  customers: Object | any;
  time!: number;
  timeron :Boolean=false;
  
  Status=2;
  
  constructor(private http1: HttpClient, private toast: HotToastService, public translate: TranslateLang, public shared: SharedService, private http: HttpService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.http.users().subscribe(data => {
      this.users = data
      return data;
    })
    this.http1.get<any>("http://localhost:3000/users").subscribe(
      data => {
        this.customers = data
        return data;

      });

     


  }


  username: string = this.shared.getusername()

zero():any{
  if(this.time <10 ){
      return 0  
  }
  if(this.time==undefined){
return "00"
  }
  
}


 
  lotto() {
    this.toast.defaultConfig.duration = 1500;
    this.startCountdown(10)
    
    
    
       
      
  }


  timeout() {
    let counter =59;
    this.Status=1;
    this.timeron =true; 

    const interval = setInterval(() => {
      if (counter > 0) {
        this.time=counter ;
        
      }
      counter--;
   
      if (counter < 0) {
        this.Status=2
        this.timeron=false;
        console.log("time out")
        clearInterval(interval);
      }
      if (counter == 0) {
        this.time=0
      }
          }, 2000);
          
  }
  winner() {
    const random = Math.floor(Math.random() * this.customers.length);
   return this.customers[random].username
  }

  goback() {
    this.router.navigate(['/home'])
  }

  startCountdown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      if (counter > 0) {
        this.toast.warning("The lottery winner will be announced in " + counter.toString())

      }
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        this.toast.defaultConfig.duration = 3000;
        this.toast.warning("The lottery winner is "+this.winner())
      }
    }, 2000);
  }









}