import { Routes, RouterModule,  } from "@angular/router";

//Import Componentes
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';


const ROUTES: Routes = [
    {path: 'home',component: HomeComponent},
    {path: 'about',component: AboutComponent},
    {path: 'skills',component: SkillsComponent},
    {path: 'projects',component: ProjectsComponent},
    {path: 'contact',component: ContactComponent},
    {path: '**', component: HomeComponent},
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, {useHash: true});


