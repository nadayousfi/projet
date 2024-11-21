import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  CanActivate,
  CanActivateFn,
} from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { RechercheParUniteComponent } from './recherche-par-unite/recherche-par-unite.component';
import { RechercheParUniteSpecComponent } from './recherche-par-unite-spec/recherche-par-unite-spec.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { produitGuard } from './produit.guard';
import { RechercheSerieComponent } from './recherche-serie/recherche-serie.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'produits', component: ProduitComponent },
  {
    path: 'addProduit',
    component: AddProduitComponent,
    canActivate: [produitGuard],
  },
  { path: 'updateProduit/:id', component: UpdateProduitComponent },
  { path: 'rechercheParCategorie', component: RechercheParCategorieComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: 'listeCategories', component: ListeCategoriesComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rechercheParUnite', component: RechercheParUniteComponent },
  { path: 'rechercheParUniteSpec', component: RechercheParUniteSpecComponent },
  { path: 'rechercheParSerie', component: RechercheSerieComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
