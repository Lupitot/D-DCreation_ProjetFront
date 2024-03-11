import { Component, Output } from '@angular/core';
import {PtsStatComponent} from '../pts-stat/pts-stat.component';
import {BtnRandomStatComponent} from '../btn-random-stat/btn-random-stat.component';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'caracteristique',
  standalone: true,
  imports: [PtsStatComponent, BtnRandomStatComponent],
  templateUrl: './caracteristique.component.html',
  styleUrl: './caracteristique.component.scss'
})
export class CaracteristiqueComponent {

  selectedStat : string = '';

  @Output() selectItem = new EventEmitter<string>();

  totalPoints = 12;

  constructor() {}

  ngOnInit() {}

  updateTotalPoints(points: number) {
    this.totalPoints = points;
  }

  choiceStat(stat: any) {
    if (this.totalPoints === 0) return;
    this.selectItem.emit(stat);
    this.selectedStat= stat.innerText;
  }

  // if (!historique?.target?.innerText) return;
  // this.selectItem.emit(historique.target.innerText);
  // this.selectedHistorique = historique.target.innerText;
}
