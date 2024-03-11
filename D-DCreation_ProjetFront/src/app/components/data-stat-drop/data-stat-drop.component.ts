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

  drop(event: CdkDragDrop<number[]>, targetContainer: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      let tempItem = null;
      if (event.container.data.length > 0) {
        tempItem = event.container.data[0];
        event.container.data = [];
      }

      // Créer une copie de l'élément à déplacer
      const item = event.previousContainer.data[event.previousIndex];
      // Supprimer l'élément de la liste d'origine
      event.previousContainer.data.splice(event.previousIndex, 1);

      // Ajouter l'élément à la liste de destination
      event.container.data.splice(event.currentIndex, 0, item);

      if (tempItem != null) {
        event.previousContainer.data.push(tempItem);
      }

      this.updateTargetStat(
        event.container.data[event.currentIndex],
        targetContainer
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

  public resetPlacement() {
    // Ajouter les valeurs des statistiques à la liste globale
    if (this.force !== null) {
      this.listeStat.push(this.force);
      this.force = null;
    }
    if (this.dexterite !== null) {
      this.listeStat.push(this.dexterite);
      this.dexterite = null;
    }
    if (this.constitution !== null) {
      this.listeStat.push(this.constitution);
      this.constitution = null;
    }
    if (this.intelligence !== null) {
      this.listeStat.push(this.intelligence);
      this.intelligence = null;
    }
    if (this.sagesse !== null) {
      this.listeStat.push(this.sagesse);
      this.sagesse = null;
    }
    if (this.charisme !== null) {
      this.listeStat.push(this.charisme);
      this.charisme = null;
    }
  }
}



// etat : lorsque je deplace un element de la liste de base vers une stat c'est bon
// puis lorsque je reset les stat pour les replacer les nombre mis dans les stats sont bien remis dans la liste de base mais lorsqu'on enleve un nombre de la liste de base pour le réassigner a une stat il se place dans la stat mais il y a toujours autant de nombre dans la liste de base 
// si on met un nombre dans une stat deja avec un nombre le nombre devient vide 