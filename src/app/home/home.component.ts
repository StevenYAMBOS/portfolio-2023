import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  route: any;

  constructor(private titleService: Title, route: ActivatedRoute) {}
  slug: string | undefined;

  ngOnInit(): void {
    this.titleService.setTitle('Accueil');
    this.route.params.subscribe((params: { [x: string]: string | undefined; }) => {
      this.slug = params['slug'];
      // Utilisez le slug pour personnaliser le contenu de votre composant
    });
  }

}
