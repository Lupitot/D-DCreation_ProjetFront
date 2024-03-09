import { Component } from '@angular/core';
import { FormPersoComponent } from '../../components/form-perso/form-perso.component';

@Component({
  selector: 'creation-perso',
  standalone: true,
  imports: [ FormPersoComponent ],
  templateUrl: './creation-perso.component.html',
  styleUrl: './creation-perso.component.scss'
})
export class CreationPersoComponent {

}
