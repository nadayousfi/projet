import { Component } from '@angular/core';
import { Categorie } from '../shared/classes/categorie';
import { ProduitService } from '../shared/services/produit.service';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styleUrl: './liste-categories.component.css',
})
export class ListeCategoriesComponent {
  categories!: Categorie[];
  updatedCat: Categorie = { idCat: 0, nomCat: '' };

  ajout: boolean = true;

  constructor(private produitService: ProduitService) {}
  ngOnInit(): void {
    this.produitService.listeCategories().subscribe((cats) => {
      this.categories = cats._embedded.categories;
      console.log(cats);
    });
  }
  chargerCategories() {
    this.produitService.listeCategories().subscribe((cats) => {
      this.categories = cats._embedded.categories;
      console.log(cats);
    });
  }
  categorieUpdated(cat: Categorie) {
    console.log('Cat updated event', cat);
    this.produitService
      .ajouterCategorie(cat)
      .subscribe(() => this.chargerCategories());
  }
  updateCat(cat: Categorie) {
    this.updatedCat = cat;
    this.ajout = false;
  }
}
