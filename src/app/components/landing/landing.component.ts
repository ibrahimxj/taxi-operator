import { Component, OnInit } from '@angular/core';
import { TranslateLang } from 'src/app/service/translate.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
 
    
  constructor(public translate: TranslateLang) {  }

  ngOnInit(): void {
  }
  
  Switch(){
   this.translate.switch();   
  }
}
