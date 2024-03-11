import { Component } from '@angular/core';
import {PtsStatComponent} from '../pts-stat/pts-stat.component';
import {BtnRandomStatComponent} from '../btn-random-stat/btn-random-stat.component';


@Component({
  selector: 'caracteristique',
  standalone: true,
  imports: [PtsStatComponent, BtnRandomStatComponent],
  templateUrl: './caracteristique.component.html',
  styleUrl: './caracteristique.component.scss'
})
export class CaracteristiqueComponent {


  totalPoints = 12;

  constructor() {}

  ngOnInit() {}

  updateTotalPoints(points: number) {
    this.totalPoints = points;
  }


}
