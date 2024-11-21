import { Injectable } from '@angular/core';
import { Produit } from '../classes/produit';
import { Categorie } from '../classes/categorie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiURL, apiURLCat } from '../../config';
import { CategorieWrapper } from '../classes/categorieWrapped.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  apiURL: string = 'http://localhost:8080/produits/api';
  apiURLCat = 'http://localhost:8080/produits/cat';
  produits = [] as Produit[];
  categorie = [] as Categorie[];
  constructor(private http: HttpClient) {
    /*this.categorie = [
      { idCat: 1, nomCat: 'PC' },
      { idCat: 2, nomCat: 'Imprimante' },
    ];
     this.produits = [
      {
        idProduit: 1,
        nomProduit: 'pc',
        prixProduit: 300,
        dateCreation: new Date('01/01/2024'),
        categorie: { idCat: 1, nomCat: 'PC' },
      },
      {
        idProduit: 1,
        nomProduit: 'pc 111',
        prixProduit: 300,
        dateCreation: new Date('01/01/2024'),
        categorie: { idCat: 2, nomCat: 'Imprimante' },
      },
      {
        idProduit: 1,
        nomProduit: 'pc222',
        prixProduit: 300,
        dateCreation: new Date('01/01/2024'),
        categorie: { idCat: 2, nomCat: 'Imprimante' },
      },
    ]; */
  }

  listeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(apiURL);
  }
  ajouterproduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(apiURL, prod, httpOptions);
  }
  supprimerProduit(id: number) {
    //return this.http.get<any>(`${this.apiURL}/${id}`);
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  //ou Bien
  /* this.produits.forEach((cur, index) => {
if(prod.idProduit === cur.idProduit) {
this.produits.splice(index, 1);
}
}); */

  consulterProduit(id: number): Observable<Produit> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Produit>(url);
  }
  updateProduit(prod: Produit): Observable<Produit> {
    return this.http.put<Produit>(apiURL, prod, httpOptions);
  }
  trierProduit() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit! > n2.idProduit!) {
        return 1;
      }
      if (n1.idProduit! < n2.idProduit!) {
        return -1;
      }
      return 0;
    });
  }

  listeCategories(): Observable<CategorieWrapper> {
    return this.http.get<CategorieWrapper>(this.apiURLCat);
  }

  /*
  consulterCategorie(id: number): Categorie {
    return this.categorie.find((cat) => cat.idCat == id)!;
  }*/
  rechercherParCategorie(idCat: number): Observable<Produit[]> {
    const url = `${this.apiURL}/prodscat/${idCat}`;
    return this.http.get<Produit[]>(url);
  }
  rechercherParNom(nom: string): Observable<Produit[]> {
    const url = `${this.apiURL}/prodsByName/${nom}`;
    return this.http.get<Produit[]>(url);
  }
  rechercherParUnite(unite: string): Observable<Produit[]> {
    const url = `${this.apiURL}/prodsByUnite/${unite}`;
    return this.http.get<Produit[]>(url);
  }
  rechercherParUniteSpec(unitespec: string): Observable<Produit[]> {
    const url = `${this.apiURL}/prodsByUnitespec/${unitespec}`;
    return this.http.get<Produit[]>(url);
  }
  ajouterCategorie(cat: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.apiURLCat, cat, httpOptions);
  }

  verifierProduitExistant(serie: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiURL}/existe/${serie}`);
  }
}
