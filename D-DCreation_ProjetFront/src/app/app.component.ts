import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreationPersoComponent} from './Pages/creation-perso/creation-perso.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreationPersoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'D-DCreation_ProjetFront';
}
