import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allKegs" selected="selected">All Kegs</option>
    <option value="lowKegs">Low Kegs</option>
  </select>
  <div class="list">
    <div class='list__item' *ngFor="let keg of childKegList | fullness:filterByFullness">
        <h3>{{keg.name}}</h3>
        <p>{{keg.type}}</p>
        <p>{{keg.price}}</p>
        <p>{{keg.content}}</p>
        <button type="button" class="editKeg" (click)="editKeg(keg)">Edit</button>
        <label for="pint">{{keg.pints}}</label>
        <button type="button" name="pint" (click)="soldPint(keg)">Sell Pint</button>
    </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter;
  @Output() soldSender = new EventEmitter;

  editKeg(keg: Keg) {
    this.clickSender.emit(keg);
  }

  soldPint(keg: Keg) {
    this.soldSender.emit(keg);

  }

  filterByFullness: string = "allKegs";

  onChange(optionFromMenu) {
  this.filterByFullness = optionFromMenu;
}

}
