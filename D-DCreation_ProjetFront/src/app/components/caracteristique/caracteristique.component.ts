import { Component, Input, Output } from '@angular/core';
import { PtsStatComponent } from '../pts-stat/pts-stat.component';
import { BtnRandomStatComponent } from '../btn-random-stat/btn-random-stat.component';
import { EventEmitter } from '@angular/core';
import { AttributionCarcteristiqueService } from '../../services/attribution-carcteristique.service';

@Component({
  selector: 'caracteristique',
  standalone: true,
  imports: [PtsStatComponent, BtnRandomStatComponent],
  templateUrl: './caracteristique.component.html',
  styleUrl: './caracteristique.component.scss',
})
export class CaracteristiqueComponent {
  selectedStat?: number = 0;

  @Input() stat: number[] = [];

  @Output() statSelected = new EventEmitter<number[]>();

  statFinal: number[] = [0, 0, 0, 0, 0, 0];

  totalPoints = 12;

  ngOnInit() {}

  updateTotalPoints(points: number) {
    this.totalPoints = points;
  }

  updateStatValue(statFinalSelect: number, typeStat: string) {
    console.log('statFinal', statFinalSelect);
    if (typeStat == 'force') {
      this.statFinal[0] = statFinalSelect;
    } else if (typeStat == 'dexterite') {
      this.statFinal[1] = statFinalSelect;
    } else if (typeStat == 'constitution') {
      this.statFinal[2] = statFinalSelect;
    } else if (typeStat == 'intelligence') {
      this.statFinal[3] = statFinalSelect;
    } else if (typeStat == 'sagesse') {
      this.statFinal[4] = statFinalSelect;
    } else if (typeStat == 'charisme') {
      this.statFinal[5] = statFinalSelect;
    }
    console.log('statFinal', this.statFinal);
  }



  validate() {
    console.log('validate');
    this.statSelected.emit(this.statFinal);
  }
}
