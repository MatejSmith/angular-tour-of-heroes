import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import {ITEMS} from '../mock-items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  item: Item = {
    id: 1,
    name: 'axe',
    price: 150
  };
  items = ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

  selectedItem?: Item;
  onSelect(item: Item): void {
    this.selectedItem = item;
  }

}
