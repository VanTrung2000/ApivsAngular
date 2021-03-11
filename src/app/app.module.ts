import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule


  ],

  providers: [

    { provide: 'BASE_URL', useFactory: getBaseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
