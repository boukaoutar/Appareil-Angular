import { Component, OnInit, Input } from '@angular/core';
import { Appareil } from './appareil';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() contenu!: Appareil;

  constructor() { }
  
  ngOnInit() {}
}
