import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ITEMS_TO_BUY } from '../mock-items_to_buy';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {


  items = ITEMS_TO_BUY;
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }

}
