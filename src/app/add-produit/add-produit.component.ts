import { Component } from '@angular/core';
import { Produit } from '../shared/classes/produit';
import { ProduitService } from '../shared/services/produit.service';
import { Categorie } from '../shared/classes/categorie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css',
})
export class AddProduitComponent {
  newProduit = {} as Produit;
  categories = [] as Categorie[];
  newIdCat!: number;
  newCat!: Categorie;
  message?: string;
  errorMessage: string = '';
  constructor(private produitService: ProduitService, private router: Router) {}
  ngOnInit(): void {
    this.produitService.listeCategories().subscribe((cats) => {
      console.log(cats);
      this.categories = cats._embedded.categories;
    });
  }
  addProduit() {
    this.newProduit.categorie = this.categories.find(
      (cat) => cat.idCat == this.newIdCat
    )!;
    /*
    this.produitService.ajouterproduit(this.newProduit).subscribe((prod) => {
      console.log(prod);
      this.router.navigate(['produits']);
    }); */
    this.produitService
      .verifierProduitExistant(this.newProduit.numeros)
      .subscribe((existe) => {
        if (existe) {
          this.errorMessage = 'Oups, numero de serie deja existe déjà.';
        } else {
          this.produitService
            .ajouterproduit(this.newProduit)
            .subscribe((prod) => {
              console.log(prod);
              this.router.navigate(['produits']);
            });
        }
      });
  }
}
