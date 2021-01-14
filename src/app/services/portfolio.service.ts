import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private projects: Project[] = [];

  constructor() {
    this.projects = [
      {
        titulo: 'Tour of heroes',
        explicacion: 'This app was built for the IT Academy Course in Front End Developing, as a project for learning the framework Angular.',
        explicacion2: 'The specific porpouse was to use components, and also to use internal services to pass data between components.',
        img:"/assets/img/heroes.png",
        tecnologias: 'HTML, CSS, BOOTSTRAP, TYPESCRIPT & ANGULAR.',
        web: "https://magoalakai.github.io/angula-spa/#/heroes",
      },
      {
        titulo: 'Jazzify',
        explicacion: 'This application was built for the IT Academy Course in Front End Developing, as a project for learning the fundamentals of Javascript, the framework for Css Bootstrap, and also some libraries for Css like Sass.',
        explicacion2: '',
        img:"/assets/img/jazzify.png",
        tecnologias: 'HTML, CSS, PHP, BOOTSTRAP, SASS & JQUERY',
        web: "https://magoalakai.github.io/Jazzify-Form/#",
      },
      {
        titulo: 'SpotyApp',
        explicacion: 'This app was built for the IT Academy Course in Front End Developing, as a project for learning the framework Angular, and how to use ajax and fetch services from an external Api, in this case Stopity.',
        explicacion2: '',
        img:"/assets/img/spotiapp.png",
        tecnologias: 'HTML, CSS, BOOTSTRAP, TYPESCRIPT & ANGULAR.',
        web: "https://open.spotify.com/?_ga=2.174769378.1589958326.1610551230-121600634.1609781604",
      },
      {
        titulo: 'Swim Out Costa Brava',
        explicacion: 'A web for an International Jazz & Swing festival and Summercamp in Costa Brava. As organizer of this festival I created the web with wordpress.',
        explicacion2: '',
        img:"/assets/img/swimout.png",
        tecnologias: 'HTML, CSS, PHP, MYSQL & WORDPRESS.',
        web: "http://swimoutcostabrava.com/en/",
      },
      {
        titulo: 'La Jam Barcelona',
        explicacion: 'A web for an International Jazz & Swing festival in Barcelona. As organizer of this festival I created the web with wordpress.',
        explicacion2: 'Using a wordpress template, I adapted it to my needs changing html and css code, and also making little changes in the php code.',
        img:"/assets/img/lajambarcelona.png",
        tecnologias: 'HTML, CSS, PHP, MYSQL & WORDPRESS.',
        web: "https://lajambarcelona.com/",
      },
      {
        titulo: 'Swing Dances',
        explicacion: 'We all have a first time, and this is the case, when I was learning for the first time the basics.',
        explicacion2: 'This is my ever first web using just plane html and css, for the first exercise of the Javascript Full Stack Bootcamp in BCS in Barcelona.',
        img:"/assets/img/swingdances.png",
        tecnologias: 'HTML & CSS.',
        web: "http://swingdances.surge.sh/",
      },
    ]
  }

  getProjects(): Project[]{
    return this.projects;
  }
}

export interface Project{
  titulo: string;
  explicacion: string;
  explicacion2: string;
  img: string;
  tecnologias: string;
  web: string;
}
