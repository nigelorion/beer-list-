import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="main">
    <h1 class="header">Current Beers on Tap:</h1>
    <button (click)="newKeg()">Add New Keg</button>
    <form *ngIf="kegForm">
      <label for="name">Name:</label>
      <input value="name">
      <label for="type">Type:</label>
      <input value="type">
      <label for="price">Price:</label>
      <input value="price">
      <label for="content">Percentage:</label>
      <input value="content">
      <button (submit)="submitKeg()">Done</button>
    </form>
    <div class="list">
      <div class='list__item' *ngFor="let keg of kegs">
          <h3>{{keg.name}}</h3>
          <p>{{keg.type}}</p>
          <p>{{keg.price}}</p>
          <p>{{keg.content}}</p>
          <button class="editKeg" (click)="editKeg()">Edit</button>
      </div>
    </div>
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
  new Keg('Deschutes Abyss', 'Imperial Stout', '$7', '12.2%'),
  new Keg('Deschutes Abyss', 'Imperial Stout', '$7', '12.2%'),
  new Keg('Deschutes Abyss', 'Imperial Stout', '$7', '12.2%'),
  new Keg('Deschutes Abyss', 'Imperial Stout', '$7', '12.2%')
];



kegForm = null;

newKeg() {
  if (this.kegForm === null) {
    this.kegForm = true;
  } else {
    this.kegForm = null;
  }
}

// submitKeg() {
//   kegData = [];
// }

  // editKeg() {
  //
  // }
  //
  // newkeg() {
  //
  //   kegs.push(new Keg('stella', 'lager', '$5', '5.5%'));
  //
  // }

}

export class Keg {
  public done: boolean = false;
  constructor(
    public name: string,
    public type: string,
    public price: string,
    public content: string)
    { }
}
