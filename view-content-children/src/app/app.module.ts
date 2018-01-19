import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OnlyViewComponent } from './only-view/only-view.component';
import { OnlyContentComponent } from './only-content/only-content.component';
import { ViewAndContentComponent } from './view-and-content/view-and-content.component';
import { SubViewComponent } from './sub-view/sub-view.component';


@NgModule({
  declarations: [
    AppComponent,
    OnlyViewComponent,
    OnlyContentComponent,
    ViewAndContentComponent,
    SubViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
