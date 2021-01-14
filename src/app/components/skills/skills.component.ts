import { Component, OnInit } from '@angular/core';
import { SkillsService, Skill } from './../../services/skills.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: Skill[] = [];

  constructor(
    private _skillsService: SkillsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.skills = this._skillsService.getSkills();
  }

}
