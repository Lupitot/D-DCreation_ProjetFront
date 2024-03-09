import { Routes } from '@angular/router';
import { CreationPersoComponent } from './Pages/creation-perso/creation-perso.component' ;

export const routes: Routes = [
    {
        path: "",
        component: CreationPersoComponent
    },
    {
        path: "**",
        redirectTo: ''
    }
];
