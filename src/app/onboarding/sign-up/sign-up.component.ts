import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    let role = localStorage.getItem('desiredRole') || 'owner';
    this.authService
      .signUp({ email: this.email, password: this.password }, role)
      .subscribe((response) => {
        this.router.navigate(['/login']);
      });
  }
}
