import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RechercheParUniteComponent } from './recherche-par-unite/recherche-par-unite.component';
import { RechercheParUniteSpecComponent } from './recherche-par-unite-spec/recherche-par-unite-spec.component';
import { RechercheParDonationComponent } from './recherche-par-donation/recherche-par-donation.component';
import { UseerComponent } from './shared/classes/useer/useer.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheSerieComponent } from './recherche-serie/recherche-serie.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    RechercheParCategorieComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeCategoriesComponent,
    UpdateCategorieComponent,
    AccueilComponent,
    FooterComponent,
    LoginComponent,
    RechercheParUniteComponent,
    RechercheParUniteSpecComponent,
    RechercheParDonationComponent,
    UseerComponent,
    ForbiddenComponent,
    RechercheSerieComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideClientHydration(), HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
