import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="main">
    <h1 class="header">Current Beers on Tap:</h1>
    <button (click)="newKeg()" class="new_keg">Add New Keg</button>
    <edit-keg [editKegForm]="editKegForm" (clickSender)="editKegSubmit($event)"></edit-keg>
    <new-keg  *ngIf="kegForm" (newKegSender)="submitKeg($event)"></new-keg>
    <keg-list [childKegList]="kegs" (clickSender)="editKeg($event)" (soldSender)="soldPint($event)"></keg-list>
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

  submitKeg(newKeg: Keg) {
    console.log(newKeg);
     this.kegs.push(newKeg);
     this.kegForm = null;
   }

  editKeg(Keg) {
    this.editKegForm = Keg;
  }

  editKegSubmit(Keg) {

    this.editKegForm = null;

  }

  soldPint(keg) {
    keg.pints -= 1;
  }

}
