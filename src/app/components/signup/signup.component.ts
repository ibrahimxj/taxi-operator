import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {HotToastService} from '@ngneat/hot-toast'
import { TranslateLang } from 'src/app/service/translate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 signupForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  username:new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$')]),
  recaptcha:new FormControl('',[ Validators.required])
});
constructor(public translate: TranslateLang,private http : HttpClient, private router : Router,private toast:HotToastService) { }
id=localStorage.getItem('currentlang')
ngOnInit(): void {
  }
  sitekey : string = "6LexOFIhAAAAACafMIDI8FAZAr-7Orhmo8iymOtM";
  signup(){
    if(!this.signupForm.valid){
      return;
    }
    this.http.post<any>("http://localhost:3000/users",this.signupForm.value).subscribe(
      res=>{
          this.toast.success('Signed in successfully');
          this.signupForm.reset();
          this.router.navigate(['/login'])
          
        }
      
      
    )
    
  }
  get email(){
    return this.signupForm.get('email')
  }
  get password(){
    return this.signupForm.get('password')
  }
  get username(){
    return this.signupForm.get('username')
  }
  get recaptcha(){
    return this.signupForm.get('recaptcha')
  }
}
