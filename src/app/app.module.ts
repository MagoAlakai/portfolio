import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NameRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

//Import Servicios
import { PortfolioService } from './services/portfolio.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NameRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PortfolioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
