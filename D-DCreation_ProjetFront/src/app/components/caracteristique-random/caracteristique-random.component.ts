import { Component } from '@angular/core';
import { BtnRandomStatComponent } from '../btn-random-stat/btn-random-stat.component';
import { DataStatDropComponent } from '../data-stat-drop/data-stat-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'caracteristique-random',
  standalone: true,
  imports: [
    BtnRandomStatComponent,
    DataStatDropComponent,
    DragDropModule
  ],
  templateUrl: './caracteristique-random.component.html',
  styleUrl: './caracteristique-random.component.scss',
})
export class CaracteristiqueRandomComponent {
  listStat: number[] = [];

  constructor() {}

  ngOnInit() {}

  updateStat(stat: number[]) {
    console.log('Statistiques reçues:', stat);
    this.listStat = stat;
  }
}
