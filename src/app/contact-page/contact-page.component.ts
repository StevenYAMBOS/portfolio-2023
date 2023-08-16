import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Contact');
  }

}
