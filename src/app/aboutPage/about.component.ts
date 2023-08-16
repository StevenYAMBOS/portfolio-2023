import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('À propos');
  }
}
