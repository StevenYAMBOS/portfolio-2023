import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {

  constructor(private router: Router, private titleService: Title){}

  ngOnInit(): void {
    this.titleService.setTitle('Qu\'est\-ce que tu fais ici lol ?');
  }

  goToPage(home: string): void {
    this.router.navigate([`${home}`]);
  }

  redirectToExternalLink(link: string): void {
    window.location.href = "https://youtu.be/3FmN46XQius";
  }

}
