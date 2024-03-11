import { Component, Input, Output, ViewChild } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'data-stat-drop',
  standalone: true,
  imports: [DragDropModule, CommonModule],
  templateUrl: './data-stat-drop.component.html',
  styleUrl: './data-stat-drop.component.scss',
})
export class DataStatDropComponent {
  @Input() listeStat: number[] = [];

  force: number | null = null;
  dexterite: number | null = null;
  constitution: number | null = null;
  intelligence: number | null = null;
  sagesse: number | null = null;
  charisme: number | null = null;

  listeStatMemoire: number[] = [];

  drop(event: CdkDragDrop<number[]>, targetContainer: string) {
    console.log('listeStat début de drop', this.listeStat);
    console.log(
      this.force,
      this.dexterite,
      this.constitution,
      this.intelligence,
      this.sagesse,
      this.charisme
    );
    
    

    const item = event.previousContainer.data[event.previousIndex];
    if (event.container.data.length === 0) {
      event.container.data = [];
      console.log('item', item);
      // Supprimer l'élément de la liste d'origine en conservant les doublons
      console.log(event.container.data.length);

      const index = this.listeStat.findIndex((stat) => stat === item);
      if (index > -1) {
        this.listeStatMemoire.push(item);
        console.log('item2', item);
        this.listeStat.splice(index, 1);
      }

      // Vérifier si le conteneur cible est vide

      // Insérer l'élément dans le conteneur cible à la position spécifiée
      event.container.data.splice(event.currentIndex, 0, item);

      
      // Mettre à jour la statistique cible
      this.updateTargetStat(item, targetContainer);
      
    } else {
      console.log("eventContainerElse",event.container.data.length);
      console.log(
        "Le conteneur cible n'est pas vide. Impossible d'ajouter un nouvel élément."
      );
    }
    
  }

  private updateTargetStat(stat: number, targetContainer: string) {
    switch (targetContainer) {
      case 'force':
        this.force = stat;
        break;
      case 'dexterite':
        this.dexterite = stat;
        break;
      case 'constitution':
        this.constitution = stat;
        break;
      case 'intelligence':
        this.intelligence = stat;
        break;
      case 'sagesse':
        this.sagesse = stat;
        break;
      case 'charisme':
        this.charisme = stat;
        break;
      default:
        break;
    }
  }

  resetPlacement() {
    // Remettre à zéro toutes les statistiques cibles
    this.force = null;
    this.dexterite = null;
    this.constitution = null;
    this.intelligence = null;
    this.sagesse = null;
    this.charisme = null;

    // Réinitialiser la liste d'origine avec les valeurs initiales
    this.listeStat = [...this.listeStatMemoire];
    this.listeStatMemoire = [];
  }
}
// etat : lorsque je deplace un element de la liste de base vers une stat c'est bon
// puis lorsque je reset les stat pour les replacer les nombre mis dans les stats sont bien remis dans la liste de base mais lorsqu'on enleve un nombre de la liste de base pour le réassigner a une stat il se place dans la stat mais il y a toujours autant de nombre dans la liste de base
// si on met un nombre dans une stat deja avec un nombre le nombre devient vide
