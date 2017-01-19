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
    <keg-list [childKegList]="KegList"></keg-list>
  </div>

  //////////////////////////////////////////////////////
  <h1>Add New Keg</h1>
        <label>Drink Name:</label>
        <input #name placeholder="name">
        <label>Brand Name:</label>
        <input #brand placeholder="brand">
        <label>Sugar Amount:</label>
        <input #sugar placeholder="sugar" type="number">
        <label>Price per Pint:</label>
        <input #price placeholder="price" type="number">
        <button (click)="newKeg(name.value, brand.value, sugar.value, price.value)">Add New Drink!</button>
      </form>

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

newKeg(name, brand, sugar, price) {
   this.kegs.push(new Keg(name, brand, sugar, price));
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
