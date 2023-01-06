import { NgModule } from '@angular/core';
import { Excelpkg2Component } from './excelpkg2.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    Excelpkg2Component
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    Excelpkg2Component
  ]
})
export class Excelpkg2Module { }
