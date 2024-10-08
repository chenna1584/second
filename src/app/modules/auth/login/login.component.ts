import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
     
      this.router.navigate(['/dashboard']);
    }
  }
}
