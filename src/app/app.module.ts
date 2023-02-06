import { Excelpkg2Module } from './../../projects/excelpkg2/src/lib/excelpkg2.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { Excelpkg2Module } from 'excelpkg';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Excelpkg2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
