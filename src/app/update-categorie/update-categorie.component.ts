import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categorie } from '../shared/classes/categorie';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrl: './update-categorie.component.css',
})
export class UpdateCategorieComponent {
  @Input()
  categorie!: Categorie;
  @Input()
  ajout!: boolean;
  @Output()
  categorieUpdated = new EventEmitter<Categorie>();
  ngOnInit(): void {
    console.log('ngOnInit du composant UpdateCategorie ', this.categorie);
  }
  saveCategorie() {
    this.categorieUpdated.emit(this.categorie);
  }
}
