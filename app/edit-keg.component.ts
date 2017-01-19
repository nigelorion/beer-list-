import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div *ngIf="editKegForm">
      <form>
        <label for="name">Name:</label>
        <input name="name" [(ngModel)]="editKegForm.name">
        <label for="type">Type:</label>
        <input name="type" [(ngModel)]="editKegForm.type">
        <label for="price">Price:</label>
        <input name="price" [(ngModel)]="editKegForm.price">
        <label for="content">Percentage:</label>
        <input name="content" [(ngModel)]="editKegForm.content">
      </form>
      <button (click)="editKegSubmit(keg)">Done</button>
    </div>
  `
})

export class EditKegComponent {

  @Input() editKegForm: Keg;
  @Output() clickSender = new EventEmitter;


  editKegSubmit(keg: Keg) {
    this.clickSender.emit(keg);
  }



}
