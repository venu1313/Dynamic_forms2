import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Anmtion1Component } from './anmtion1/anmtion1.component';

@NgModule({
  declarations: [
    AppComponent,
    Anmtion1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
