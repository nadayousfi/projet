import { Component } from '@angular/core';
import { Categorie } from '../shared/classes/categorie';
import { Produit } from '../shared/classes/produit';
import { ProduitService } from '../shared/services/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrl: './recherche-par-categorie.component.css',
})
export class RechercheParCategorieComponent {
  IdCategorie!: number;
  categories!: Categorie[];
  produits!: Produit[];
  page: number = 1; // Page actuelle
  pageSize: number = 5;
  produitsPagines: Produit[] = []; // Liste des produits paginés

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe((cats) => {
      this.categories = cats._embedded.categories;
      console.log(cats);
    });
  }

  onChange() {
    this.produitService
      .rechercherParCategorie(this.IdCategorie)
      .subscribe((prods) => {
        this.produits = prods;
        this.miseAJourProduitsPaginés(); // Met à jour les produits paginés après le changement de catégorie
      });
  }

  // Calcul du nombre total de pages
  nombreDePages(): number {
    if (this.produits && this.produits.length) {
      return Math.ceil(this.produits.length / this.pageSize);
    } else {
      return 0;
    }
  }

  // Met à jour la liste des produits paginés
  miseAJourProduitsPaginés(): void {
    const debut = (this.page - 1) * this.pageSize;
    const fin = debut + this.pageSize;
    this.produitsPagines = this.produits.slice(debut, fin);
  }

  // Aller à la page suivante
  pageSuivante(): void {
    if (this.page < this.nombreDePages()) {
      this.page++;
      this.miseAJourProduitsPaginés(); // Met à jour la liste paginée lors du changement de page
    }
  }

  // Revenir à la page précédente
  pagePrecedente(): void {
    if (this.page > 1) {
      this.page--;
      this.miseAJourProduitsPaginés(); // Met à jour la liste paginée lors du changement de page
    }
  }
}
