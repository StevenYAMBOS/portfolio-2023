import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  route: any;

  constructor(private titleService: Title, route: ActivatedRoute, private metaService:Meta) {}
  slug: string | undefined;

  ngOnInit(): void {
    this.titleService.setTitle('Accueil');
    this.route.params.subscribe((params: { [x: string]: string | undefined; }) => {
      this.slug = params['slug'];
      this.metaService.addTag( { name:'description',content:"Venez découvrir qui je suis, avec un peu de chance vous allez m'adorer :)"});
      this.metaService.addTag({ name: 'robots', content: 'index,follow' });
      this.metaService.addTag({ property: 'og:title', content: 'Portfolio Steven YAMBOS' });
    });
  }

}
