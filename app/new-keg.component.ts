import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <form>
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
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitKeg(name, type, price, content) {
    var newKeg: Keg = new Keg(name, type, price, content);
    this.newKegSender.emit(newKeg);
  }

}
