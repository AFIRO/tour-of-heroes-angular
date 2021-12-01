import { Component, OnInit } from '@angular/core';
import {HeroService} from "../service/hero.service";
import {Hero} from "../hero";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];


  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  private getHeroes() {
    this.heroService.getHeroes().subscribe(result => this.heroes = result.slice(1,5))
  }
}
