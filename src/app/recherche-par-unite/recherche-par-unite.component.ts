import { Component } from '@angular/core';
import { ProduitService } from '../shared/services/produit.service';
import { Produit } from '../shared/classes/produit';

@Component({
  selector: 'app-recherche-par-unite',
  templateUrl: './recherche-par-unite.component.html',
  styleUrl: './recherche-par-unite.component.css',
})
export class RechercheParUniteComponent {
  searchTerm!: string;
  produits!: Produit[];
  produitsPagines: Produit[] = []; // Produits pour la page actuelle
  allProduits!: Produit[];
  page: number = 1; // Page actuelle
  pageSize: number = 5; // Nombre de produits par page

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe((prods) => {
      this.allProduits = prods;
      this.miseAJourProduitsPaginés();
    });
  }

  // Filtre les produits lorsque l'utilisateur tape dans le champ de recherche
  onKeyUp(filterText: string) {
    this.produits = this.allProduits.filter((item) =>
      item.unite.includes(filterText)
    );
    this.page = 1; // Réinitialiser à la première page
    this.miseAJourProduitsPaginés(); // Mettre à jour les produits affichés
  }

  // Met à jour la liste des produits paginés
  nombreDePages(): number {
    return this.produits ? Math.ceil(this.produits.length / this.pageSize) : 1;
  }

  miseAJourProduitsPaginés(): void {
    if (this.produits) {
      const debut = (this.page - 1) * this.pageSize;
      const fin = debut + this.pageSize;
      this.produitsPagines = this.produits.slice(debut, fin);
    }
  }

  // Aller à la page suivante
  pageSuivante(): void {
    if (this.page < this.nombreDePages()) {
      this.page++;
      this.miseAJourProduitsPaginés();
    }
  }

  // Revenir à la page précédente
  pagePrecedente(): void {
    if (this.page > 1) {
      this.page--;
      this.miseAJourProduitsPaginés();
    }
  }
}
