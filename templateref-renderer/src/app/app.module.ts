import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RendererBasicsComponent } from './renderer-basics/renderer-basics.component';
import { UseTemplateRefComponent } from './use-template-ref/use-template-ref.component';


@NgModule({
  declarations: [
    AppComponent,
    RendererBasicsComponent,
    UseTemplateRefComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
