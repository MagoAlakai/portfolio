import { Component, OnInit } from '@angular/core';
import { PortfolioService, Project } from './../../services/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects:Project[] = [];

  constructor(
    private _PortfolioService: PortfolioService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.projects = this._PortfolioService.getProjects();
  }

}
