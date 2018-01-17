import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ROUTES } from './routes';
import { DefaultComponent } from './default/default.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UseUrlParamComponent } from './use-url-param/use-url-param.component';
import { UseQueryParamComponent } from './use-query-param/use-query-param.component';
import { UseDataComponent } from './use-data/use-data.component';
import { HelloComponent } from './hello/hello.component';
import { UseChildrenComponent } from './use-children/use-children.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    NotFoundComponent,
    UseUrlParamComponent,
    UseQueryParamComponent,
    UseDataComponent,
    HelloComponent,
    UseChildrenComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
