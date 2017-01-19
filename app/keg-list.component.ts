import { Component, Input } from '@angular/core';
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
        <button class="editKeg" (click)="editKeg()">Edit</button>
    </div>
  </div>
  `
})

export class KegList {
  @Input() childKegList: Keg[];



//   kegs: Keg[] = [
//   new Keg('PBR', 'lager', '$3', '5%'),
//   new Keg('Boneyard', 'IPA', '$5', '7%'),
//   new Keg('Deschutes Abyss', 'Imperial Stout', '$7', '12.2%'),
//   new Keg('Deschutes Abyss', 'Imperial Stout', '$7', '12.2%'),
//   new Keg('Deschutes Abyss', 'Imperial Stout', '$7', '12.2%'),
//   new Keg('Deschutes Abyss', 'Imperial Stout', '$7', '12.2%'),
//   new Keg('Deschutes Abyss', 'Imperial Stout', '$7', '12.2%'),
//   new Keg('Deschutes Abyss', 'Imperial Stout', '$7', '12.2%'),
//   new Keg('Deschutes Abyss', 'Imperial Stout', '$7', '12.2%')
// ];

}
