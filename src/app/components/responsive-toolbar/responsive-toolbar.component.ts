import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.css']
})
export class ResponsiveToolbarComponent implements OnInit {

  constructor (private keycloakService:KeycloakService){
    
  }
  ngOnInit(): void {
  }
  logout (): void {
    this.keycloakService.logout();
  }

}
