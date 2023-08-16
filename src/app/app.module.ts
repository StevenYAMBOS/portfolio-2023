import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'; // Composant Toolbar/Navbar
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './aboutPage/about.component';
import { ContactComponent } from './contactForm/contact.component'; // Import de la librairie Angular du composant Toolbar
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LanguagesSectionComponent } from './languages-section/languages-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AlertMessageComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ContactPageComponent,
    LanguagesSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
