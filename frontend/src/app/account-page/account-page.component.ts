import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/User';
import { LoginFormComponent } from '../login-form/login-form.component';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  
  
 
  constructor(private router: Router) { }

  ngOnInit(): void { }

  

}
