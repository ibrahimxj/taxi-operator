import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {HotToastService} from '@ngneat/hot-toast'
@Injectable({
  providedIn: 'root'
})
export class TranslateLang{
  currentlang: string ;


   
    constructor(public translate: TranslateService,private toast:HotToastService) { 
      this.toast.defaultConfig.duration=1000; 
      this.currentlang= localStorage.getItem('currentlang') || 'en';
      this.translate.use(this.currentlang);
    }
switch() { 
 
 
 
 if(this.currentlang=='en'){
  this.currentlang='ar';
  localStorage.setItem('currentlang',this.currentlang);
  this.translate.use(this.currentlang);
    this.toast.info('You Are Viewing The Page In Arabic')
    return
  }
  if(this.currentlang=='ar'){
    this.currentlang='en'
    localStorage.setItem('currentlang',this.currentlang);
    this.translate.use(this.currentlang);
    this.toast.info('You Are Viewing The Page In English');
    return
  }
 
}








    }

