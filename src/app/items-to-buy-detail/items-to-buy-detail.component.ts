import { Component, OnInit, Input } from '@angular/core';
import {ItemService} from '../item.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';

@Component({
  selector: 'app-items-to-buy-detail',
  templateUrl: './items-to-buy-detail.component.html',
  styleUrls: ['./items-to-buy-detail.component.css']
})
export class ItemsToBuyDetailComponent implements OnInit {

  @Input() items_to_buy?: Item;
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
    this.itemService.getItem(id).subscribe(items_to_buy => this.items_to_buy = items_to_buy);
  }

  goBack(): void {
    this.location.back();
  }

}
