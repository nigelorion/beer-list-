import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="main">
    <h1 class="header">Current Beers on Tap:</h1>
    <button (click)="newKeg()">Add New Keg</button>
    <edit-keg [editKegForm]="editKegForm" (clickSender)="editKegSubmit($event)"></edit-keg>
    <form *ngIf="kegForm">
      <label for="name">Name:</label>
      <input #name>
      <label for="type">Type:</label>
      <input #type>
      <label for="price">Price:</label>
      <input #price>
      <label for="content">Percentage:</label>
      <input #content>
      <button type="button" (click)="submitKeg(name.value, type.value, price.value, content.value)">Done</button>
    </form>
    <keg-list [childKegList]="kegs" (clickSender)="editKeg($event)"></keg-list>
  </div>
  `
})

export class AppComponent {

  kegs: Keg[] = [
  new Keg('PBR', 'lager', '$3', '5%'),
  new Keg('Boneyard', 'IPA', '$5', '7%'),
  new Keg('Deschutes Abyss', 'Imperial Stout', '$7', '12.2%'),
  new Keg('Deschutes Abyss', 'Imperial Stout', '$7', '12.2%'),
  new Keg('Deschutes Abyss', 'Imperial Stout', '$7', '12.2%'),
  new Keg('Deschutes Abyss', 'Imperial Stout', '$7', '12.2%')
  ];

  kegForm = null;

  editKegForm = null;

  newKeg() {
    if (this.kegForm === null) {
      this.kegForm = true;
    } else {
      this.kegForm = null;
    }
  }

  submitKeg(name, type, price, content) {
    console.log(name);
     this.kegs.push(new Keg(name, type, price, content));
     this.kegForm = null;
   }

  editKeg(Keg) {
    console.log(Keg);
    this.editKegForm = Keg;
  }

  editKegSubmit(Keg) {

    this.editKegForm = null;

  }

}
