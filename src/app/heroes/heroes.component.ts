import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HEROES} from "./HEROES";
import {HeroService} from "../service/hero.service";
import {MessageService} from "../service/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes? : Hero[];

  constructor(private heroService : HeroService, private messageService:MessageService) {

  }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes() : void {
    this.heroService.getHeroes().subscribe(result => this.heroes = result)
  }
}
