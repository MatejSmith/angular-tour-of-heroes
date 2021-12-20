import {Component, Input, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {ITEMS} from "../mock-items";
import {Item} from "../item";


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero!: Hero;
  items = ITEMS;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  moveToBuyList(item: Item): void {
    if(!item.isReadyForBuy){
      this.hero.money += item.price;
      item.isReadyForBuy = true;
      this.items.push(item);
      this.removeItem(item);
    }
  }

  removeItem(item: Item) {
    const index: number = this.hero.item.indexOf(item);
    if (index !== -1) {
      this.hero.item.splice(index, 1);
    }
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
