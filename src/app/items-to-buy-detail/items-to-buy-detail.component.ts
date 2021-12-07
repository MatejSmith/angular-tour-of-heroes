import { Component, OnInit} from '@angular/core';
import {ItemService} from '../item.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { ITEMS_TO_BUY } from '../mock-items_to_buy';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-items-to-buy-detail',
  templateUrl: './items-to-buy-detail.component.html',
  styleUrls: ['./items-to-buy-detail.component.css']
})
export class ItemsToBuyDetailComponent implements OnInit {

  itemstobuy = ITEMS_TO_BUY;
  ITEMS_TO_BUY?: Item;
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getItem();
    this.getHero();
  }

  getItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.itemService.getItem(id).subscribe(ITEMS_TO_BUY => this.ITEMS_TO_BUY = ITEMS_TO_BUY);
  }

  goBack(): void {
    this.location.back();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  buyFreeItems(item: Item) {
    if (this.hero.money >= item.price) {
      this.hero.money -= item.price;
      item.idReadyForBuy = false;
      this.hero.item.push(item);
    }
  }
}
