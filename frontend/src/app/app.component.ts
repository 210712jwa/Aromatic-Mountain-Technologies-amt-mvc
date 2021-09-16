import { Component } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { User } from '../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2-AMP';

  constructor(private service: LoginServiceService, private router: Router) { }

  navHome() {
    this.router.navigate(['account']);
  }

  navAccount() { 
    this.router.navigate(['']);
  }

  navCatalog() {
    this.router.navigate(['products']);
  }

  navCart() {
    this.router.navigate(['cart']);
  }
}
