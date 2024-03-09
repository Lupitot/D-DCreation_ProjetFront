import { Component } from '@angular/core';
import { ClassesComponent} from '../classes/classes.component'
import { RacesComponent } from '../races/races.component'
import { NgIf } from '@angular/common';

@Component({
  selector: 'form-perso',
  standalone: true,
  imports: [ ClassesComponent, RacesComponent, NgIf],
  templateUrl: './form-perso.component.html',
  styleUrl: './form-perso.component.scss'
})
export class FormPersoComponent {
  perso = {
    classe: '',
    race: '',
  };

  raceVisible = true;
  classeVisible = false;

  onClasseSelected(classe: string) {
    console.log(classe);
    this.perso.classe = classe;
  }

  onRaceSelected(race: string) {
    this.perso.race = race;
  }

  toggleVisibility() {
    this.raceVisible = false;
    this.classeVisible = true;
  }
}
