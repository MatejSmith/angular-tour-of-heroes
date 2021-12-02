import { Component, OnInit, Input } from '@angular/core';
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

  Item = ITEMS_TO_BUY;
  ITEMS_TO_BUY?: Item;
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.itemService.getItem(id).subscribe(ITEMS_TO_BUY => this.ITEMS_TO_BUY = ITEMS_TO_BUY);
  }

  goBack(): void {
    this.location.back();
  }

  

}
