import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
     
      this.router.navigate(['/dashboard']);
    }
  }
}
