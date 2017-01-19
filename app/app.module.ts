import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { KegListComponent }  from './keg-list.component';
import { EditKegComponent }  from './edit-keg.component';
import { NewKegComponent }  from './new-keg.component';
import { FullnessPipe } from './fullness.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, KegListComponent, EditKegComponent, NewKegComponent, FullnessPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
