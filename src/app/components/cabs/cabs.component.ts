import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { SharedService } from 'src/app/shared/shared.service';
import { TranslateLang } from 'src/app/service/translate.service';
@Component({
  selector: 'app-cabs',
  templateUrl: './cabs.component.html',
  styleUrls: ['./cabs.component.scss']
})
export class CabsComponent implements OnInit {

  searchText: any;
  
  cabs: Object | any;

  constructor(public translate: TranslateLang,private shared:SharedService,private http:HttpService, private router:Router) { }

  



  ngOnInit(): void {
    this.http.cabs().subscribe(data => {
      this.cabs = data
    });
  }

  goback(){
    this.router.navigate(['/home'])
  }
  username:string = this.shared.getusername()
}
