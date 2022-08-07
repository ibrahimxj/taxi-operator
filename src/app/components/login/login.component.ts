import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {HotToastService} from '@ngneat/hot-toast'
import { SharedService } from 'src/app/shared/shared.service';
import { TranslateLang } from 'src/app/service/translate.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    recaptcha:new FormControl( '',[ Validators.required])
  });
 
  
  constructor(public translate: TranslateLang,private shared :SharedService,private http : HttpClient, private router : Router,private toast:HotToastService) {
   
   }
   id=localStorage.getItem('currentlang')

  ngOnInit(): void {
    var name:string
    this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
      const user=res.find((a:any)=>{
       name=a.username
       this.shared.setusername(name)
      });
  })
}
  sitekey : string = "6LexOFIhAAAAACafMIDI8FAZAr-7Orhmo8iymOtM";
  login(){
    if(!this.loginform.valid){
      return;
    }
    this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
      const user=res.find((a:any)=>{
        return (a.email ===this.loginform.value.email && a.password ===this.loginform.value.password)
      });
      if(user){
        this.toast.success('Logged in successfully');
        this.loginform.reset();
        this.router.navigate(['home'])
        
      }else{
        this.toast.error('Login Failed');
       
      }
    
    })
  }
  get email(){
    return this.loginform.get('email')
  }
  get password(){
    return this.loginform.get('password')
  }
  get  recaptcha(){
    return this.loginform.get('recaptcha')
  }

  
  

  loginlog(){
    console.log(this.loginform.value);
  }
 
}
