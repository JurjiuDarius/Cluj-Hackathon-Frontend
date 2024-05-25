import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToClinicLogin(): void {
    this.router.navigate(['/login'])
  }

  goToPatientLogin(): void {
    console.log('blabla')
    this.router.navigate(['/login'])
  }
}
