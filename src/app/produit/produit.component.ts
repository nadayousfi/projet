import { Component, OnInit } from '@angular/core';
import { Produit } from '../shared/classes/produit';
import { ProduitService } from '../shared/services/produit.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent implements OnInit {
  produits: Produit[] = []; // Liste de tous les produits
  produitsPagines: Produit[] = []; // Liste des produits paginés
  page: number = 1; // Page actuelle
  pageSize: number = 5; // Nombre de produits par page

  constructor(
    private produitService: ProduitService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerProduit();
  }

  // Charger les produits depuis le service
  chargerProduit() {
    this.produitService.listeProduit().subscribe((prod) => {
      console.log(prod);
      this.produits = prod;
      this.miseAJourProduitsPaginés(); // Met à jour la liste paginée après chargement des produits
    });
  }

  // Suppression d'un produit
  supprimerProduit(p: Produit) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        console.log('produit supprimé');
        this.chargerProduit();
      });
    }
  }

  // Calcul du nombre total de pages
  nombreDePages(): number {
    return Math.ceil(this.produits.length / this.pageSize);
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
