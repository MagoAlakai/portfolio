import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private skills: Skill[] = [];

  constructor() {
    this.skills = [
      {
        img:"/assets/img/html.svg",
        nombre: 'HTML5',
        barra: 75,
        end: 'front'
      },
      {
        img:"/assets/img/css.svg",
        nombre: 'CSS3',
        barra: 75,
        end: 'front'
      },
      {
        img:"/assets/img/bootstrap.svg",
        nombre: 'Bootstrap',
        barra: 50,
        end: 'front'
      },
      {
        img:"/assets/img/jquery.svg",
        nombre: 'Jquery',
        barra: 75,
        end: 'front'
      },
      {
        img:"/assets/img/sass.svg",
        nombre: 'Sass',
        barra: 50,
        end: 'front'
      },
      {
        img:"/assets/img/js.svg",
        nombre: 'Javascript',
        barra: 75,
        end: 'front'
      },
      {
        img:"/assets/img/typescript.svg",
        nombre: 'Typescript',
        barra: 75,
        end: 'front'
      },
      {
        img:"/assets/img/angular.svg",
        nombre: 'Angular',
        barra: 50,
        end: 'front'
      },
      {
        img:"/assets/img/node.svg",
        nombre: 'Node',
        barra: 50,
        end: 'back'
      },
      {
        img:"/assets/img/mongodb.svg",
        nombre: 'Mongo',
        barra: 75,
        end: 'back'
      },
      {
        img:"/assets/img/express.svg",
        nombre: 'Express',
        barra: 75,
        end: 'back'
      },
      {
        img:"/assets/img/php.svg",
        nombre: 'Php',
        barra: 50,
        end: 'back'
      },
      {
        img:"/assets/img/laravel.svg",
        nombre: 'Laravel',
        barra: 50,
        end: 'back'
      },
      {
        img:"/assets/img/git.svg",
        nombre: 'Git',
        barra: 75,
        end: 'back'
      },
    ]
  }

  getSkills(): Skill[]{
    return this.skills;
  }
}

export interface Skill{
  img: string;
  nombre: string;
  barra: number;
  end: string;
}
