import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div class="list">
    <div class='list__item' *ngFor="let keg of childKegList">
        <h3>{{keg.name}}</h3>
        <p>{{keg.type}}</p>
        <p>{{keg.price}}</p>
        <p>{{keg.content}}</p>
        <button type="button" class="editKeg" (click)="editKeg(keg)">Edit</button>
        <button type="button" (click)="soldPint(keg)">Sold Pint</button>
    </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter;

  editKeg(keg: Keg) {
    this.clickSender.emit(keg);
  }

  // soldPint(soldPint: Keg) {
  //   this.soldSender.emit(soldPint);
  // }

}
