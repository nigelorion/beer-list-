import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { KegList }  from './keg-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, KegList],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
