import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authgGuard: CanActivateFn = (route, state) => {
  debugger;
  const router = inject(Router)
  const loggeduser =localStorage.getItem('loginuser');
  if (loggeduser != null) {
    return true;
    }else{
      router.navigateByUrl('ragister');
    return false;
    }
  };

