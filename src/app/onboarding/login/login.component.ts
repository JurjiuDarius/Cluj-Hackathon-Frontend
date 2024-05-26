import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit(): void {
    let role = localStorage.getItem('desiredRole') || 'owner';
    console.log('Submitting');
    this.authService
      .logIn(this.email, this.password, role)
      .subscribe((response) => {
        console.log('login response', response);
        this.router.navigate(['/dashboard']);
      });
  }
}
