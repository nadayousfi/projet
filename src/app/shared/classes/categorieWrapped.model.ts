import { Categorie } from './categorie';

export class CategorieWrapper {
  _embedded!: { categories: Categorie[] };
}
