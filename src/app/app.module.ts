import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent1 } from './login-forms/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Login2Component } from './login-forms/login-2/login-2.component';
import { Login3Component } from './login-forms/login-3/login-3.component';
import { ProductCard1Component } from './product-cards/product-card-1/product-card-1.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent1,
    Login2Component,
    Login3Component,
    ProductCard1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
