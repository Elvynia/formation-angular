import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UseTemplateRefComponent } from './use-template-ref/use-template-ref.component';


@NgModule({
  declarations: [
    AppComponent,
    UseTemplateRefComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
