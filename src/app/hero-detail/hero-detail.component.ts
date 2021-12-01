import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {HeroService} from "../service/hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
 hero?: Hero;

  constructor(private activatedRoute : ActivatedRoute, private heroService: HeroService, private location : Location) {
  }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get("id"))
    this.heroService.getHero(id).subscribe(result => this.hero = result)

  }

  onSelect(hero: Hero) {
    this.hero = hero


  }

  goBack() {
    this.location.back();
  }
}
