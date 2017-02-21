import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-root'
  templateUrl: './userSignUp.html'
  //styleUrls: ['./app.component.css']
})
export class UserSignUpComponent {

  router: Router;

  constructor(_router: Router) {

    this.router = _router;
  }

  //this.router.navigateByUrl('/login');
  onCancel(): void {
    this.router.navigate(['users']);
  }
}
