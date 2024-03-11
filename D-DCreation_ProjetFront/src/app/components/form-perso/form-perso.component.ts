import { Component } from '@angular/core';
import { ClassesComponent } from '../classes/classes.component';
import { RacesComponent } from '../races/races.component';
import { HistoriqueComponent } from '../historique/historique.component';
import { CaracteristiqueComponent } from '../caracteristique/caracteristique.component';
import { CaracteristiqueRandomComponent } from '../caracteristique-random/caracteristique-random.component';
import {BtnRandomStatComponent } from '../btn-random-stat/btn-random-stat.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgIf } from '@angular/common';

@Component({
  selector: 'form-perso',
  standalone: true,
  imports: [
    ClassesComponent,
    RacesComponent,
    HistoriqueComponent,
    CaracteristiqueComponent,
    CaracteristiqueRandomComponent,
    NgIf,
    DragDropModule,
  ],
  templateUrl: './form-perso.component.html',
  styleUrl: './form-perso.component.scss',
})
export class FormPersoComponent {
  perso = {
    classe: '',
    race: '',
    historique: '',
    stat: '',
  };


  raceVisible = true;
  classeVisible = false;
  historiqueVisible = false;
  statVisible = false;
  statRandomVisible = false;

  onClasseSelected(classe: string) {
    console.log(classe);
    this.perso.classe = classe;
  }

  onRaceSelected(race: string) {
    this.perso.race = race;
  }

  onHistoriqueSelected(historique: string) {
    console.log(historique);
    this.perso.historique = historique;
  }

  onStatSelected(stat: string) {
    console.log(stat);
    this.perso.stat = stat;
  }

  toggleVisibilityRaceClasse() {
    this.raceVisible = false;
    this.classeVisible = true;
  }

  toggleVisibilityClasseHistorique() {
    this.classeVisible = false;
    this.historiqueVisible = true;
  }

  toggleVisibilityHistoriqueStat() {
    this.historiqueVisible = false;
    this.statVisible = true;
  }

  toggleVisibilityStatStatRandom() {
    this.statVisible = false;
    this.statRandomVisible = true;
  }



}
