import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HotToastModule } from '@ngneat/hot-toast';
import { NgxCaptchaModule } from 'ngx-captcha';
import { UsersComponent } from './components/users/users.component';
import { CabsComponent } from './components/cabs/cabs.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
@NgModule({
  declarations: [AppComponent, LandingComponent, LoginComponent, SignupComponent, HomeComponent, UsersComponent, CabsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule ,
    MatInputModule,FormsModule,
    HttpClientModule ,
    HotToastModule,
    NgxCaptchaModule,
    Ng2SearchPipeModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
 loader:{
  provide:TranslateLoader,
  useFactory:createTranslateLoader,
  deps:[HttpClient]
 }
    })
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function createTranslateLoader(http:HttpClient){
       return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
