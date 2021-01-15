import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Import Componentes
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';


const appRoutes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'about',component: AboutComponent},
    {path: 'skills',component: SkillsComponent},
    {path: 'projects',component: ProjectsComponent},
    {path: 'contact',component: ContactComponent},
    {path: '**', pathMatch: 'full', redirectTo:''},
];

@NgModule
    (
    {
        exports: [RouterModule],
        imports: [RouterModule.forRoot(appRoutes)],
    }
    )
export class NameRoutingModule
{

}


