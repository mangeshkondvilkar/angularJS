import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MyLoginComponent } from './my-login/my-login.component';
import { LoginService } from './login.service';


@NgModule({
  declarations: [
    AppComponent,
    MyLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
