import { Component } from '@angular/core';
import { Appareil } from './appareil/appareil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp-angular';

  AP: Appareil[] = [
    { nom: 'Macbook M1', nbAppareil: 12 },
    { nom: 'Apple 1', nbAppareil: 12  }
  ];

  items = [
    { name: 'livre A'},
    { name: 'livre B' },
    { name: 'livre C' },
    { name: 'livre D'}
  ]
  constructor() {}
}
