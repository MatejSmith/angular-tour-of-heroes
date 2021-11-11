import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items-to-buy',
  templateUrl: './items-to-buy.component.html',
  styleUrls: ['./items-to-buy.component.css']
})
export class ItemsToBuyComponent implements OnInit {

  items_to_buy: Item[] = [];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems_to_buy();
  }
  
  getItems_to_buy(): void {
    this.itemService.getItems_to_buy().subscribe(items_to_buy => this.items_to_buy = items_to_buy);
  }

}
