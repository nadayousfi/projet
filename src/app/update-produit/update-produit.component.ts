import { Component } from '@angular/core';
import { Produit } from '../shared/classes/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../shared/services/produit.service';
import { Categorie } from '../shared/classes/categorie';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrl: './update-produit.component.css',
})
export class UpdateProduitComponent {
  currentProduit = {} as Produit;
  categorie!: Categorie[];
  updateCatId!: number;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService
  ) {}

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe((cats) => {
      this.categorie = cats._embedded.categories;
      console.log(cats);
    });

    this.produitService
      .consulterProduit(this.activatedRoute.snapshot.params['id'])
      .subscribe((prod) => {
        this.currentProduit = prod;
        this.updateCatId = this.currentProduit.categorie.idCat;
      });
  }

  updateProduit() {
    this.currentProduit.categorie = this.categorie.find(
      (cat) => cat.idCat == this.updateCatId
    )!;
    this.produitService.updateProduit(this.currentProduit).subscribe((prod) => {
      this.router.navigate(['produits']);
    });
  }
  //ngOnInit(): void {
  //this.categorie = this.produitService.listeCategories();
  /* this.produitService.listeCategories().subscribe((cats) => {
      this.categorie = cats._embedded.categories;
      console.log(cats);
    });

    this.produitService
      .consulterProduit(this.activatedRoute.snapshot.params['id'])
      .subscribe((prod) => {
        this.currentProduit = prod;
        this.updateCatId = this.currentProduit.categorie.idCat;
      });
  }
  updateProduit() {
    this.currentProduit.categorie = this.categorie.find(
      (cat) => cat.idCat == this.updateCatId
    )!;
    this.produitService.updateProduit(this.currentProduit).subscribe((prod) => {
      this.router.navigate(['produits']);
    });
  } */
}
