import { Component } from '@angular/core';
import { FormPersoComponent } from '../../components/form-perso/form-perso.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'creation-perso',
  standalone: true,
  imports: [ FormPersoComponent, DragDropModule],
  templateUrl: './creation-perso.component.html',
  styleUrl: './creation-perso.component.scss'
})
export class CreationPersoComponent {

}
