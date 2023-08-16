import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router){
  }
  
  goToPage(contact: string): void {
    this.router.navigate([`${contact}`]);
  }
}
