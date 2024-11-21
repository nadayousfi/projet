import { Component } from '@angular/core';
import { User } from '../shared/classes/usermodel';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user = new User();
  erreur = 0;
  constructor(private authService: AuthService, private router: Router) {}
  onLoggedin() {
    console.log(this.user);
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser) this.router.navigate(['/']);
    else 
    this.erreur=1;
    //alert('Login ou mot de passe incorrecte!');
  }
}
