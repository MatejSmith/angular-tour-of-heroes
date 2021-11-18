import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-items-to-buy',
  templateUrl: './items-to-buy.component.html',
  styleUrls: ['./items-to-buy.component.css']
})
export class ItemsToBuyComponent implements OnInit {

  selectedItem?: Item;
  items_to_buy: Item[] = [];
  constructor(private itemService: ItemService, private messageService: MessageService) { }

  ngOnInit() {
    this.getItems_to_buy();
  }
  
  getItems_to_buy(): void {
    this.itemService.getItems_to_buy().subscribe(items_to_buy => this.items_to_buy = items_to_buy);
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
    this.messageService.add(`HeroesComponent: Selected hero id=${item.id}`);
  }
}
