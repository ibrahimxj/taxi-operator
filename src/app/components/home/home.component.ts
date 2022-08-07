import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared/shared.service';
import { TranslateLang } from 'src/app/service/translate.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public shared:SharedService,public translate: TranslateLang) { }

  ngOnInit(): void {
  }
  username:string = this.shared.getusername()
  Switch(){
    this.translate.switch();   
   }
}
