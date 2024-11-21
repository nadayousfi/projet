import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { ProduitService } from './shared/services/produit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  constructor(public authService: AuthService,
    private router:Router,private produitService:ProduitService
  ) {}

  username: string = 'User Name'; // Remplacez par le nom de l'utilisateur réel
  isDropdownOpen: boolean = false;
  ngOnInit() {
    let isloggedin = localStorage.getItem('isloggedIn');
    let loggedUser = localStorage.getItem('loggedUser');
    
    if (isloggedin != 'true' || !loggedUser) this.router.navigate(['/login']);
    else this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  viewProfile() {
    // Logic to view the user's profile
    console.log('Navigating to profile...');
  }

  logout() {
    // Logic for logout
    console.log('Logging out...');
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    const dropdown = document.querySelector('.user-dropdown');

    // Vérifiez si le clic est en dehors du dropdown
    if (this.isDropdownOpen && !dropdown?.contains(targetElement)) {
      this.isDropdownOpen = false; // Fermez le dropdown
    }
  }
  onLogout() {
    this.authService.logout();
  }
}
