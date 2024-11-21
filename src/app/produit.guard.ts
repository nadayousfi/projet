import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { inject } from '@angular/core';

export const produitGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Injection du service AuthService
  const router = inject(Router); // Injection du service Router

  if (authService.isAdmin()) {
    return true;
  } else {
    router.navigate(['app-forbidden']);
    return false;
  }
};
