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

  @Output() validateStats = new EventEmitter<number>();

  statFinal?: number;



  totalPoints = 12;

  constructor(
    private attributionCarcteristiqueService: AttributionCarcteristiqueService
  ) {}

  ngOnInit() {}

  updateTotalPoints(points: number) {
    this.totalPoints = points;
  }

  updateStatValue(statFinal: number) {
    console.log('statFinal', statFinal);
    this.statFinal = statFinal;
    this.onStatSelected(statFinal);
  }

  onStatSelected(stat: number) {
    this.attributionCarcteristiqueService.addSelectedStat(stat);
  }

  validate() {
    console.log('validate');
    console.log(this.attributionCarcteristiqueService.getSelectedStatFinal());
    this.validateStats.emit(
      this.attributionCarcteristiqueService.getSelectedStatFinal() || undefined
    );
  }
}
