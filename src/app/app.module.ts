import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Primer video
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component'; //Segundo video
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //Primer video
    ReactiveFormsModule,//Segundo video
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
