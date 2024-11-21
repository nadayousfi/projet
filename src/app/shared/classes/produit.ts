import { Categorie } from './categorie';

export interface Produit {
  idProduit: number;
  nomProduit: string;
  numeros: string;
  unite: string;
  unitespec: string;
  donation: boolean;
  prixProduit: number;
  dateCreation: Date;
  categorie: Categorie;
}
