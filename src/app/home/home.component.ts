import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../shared/portfolio.service';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: Project[] = [];

  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
  }

}
