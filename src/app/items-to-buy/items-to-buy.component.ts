import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import {DataService} from "../data.service";

@Component({
  selector: 'app-items-to-buy',
  templateUrl: './items-to-buy.component.html',
  styleUrls: ['./items-to-buy.component.css']
})
export class ItemsToBuyComponent implements OnInit {

  items_to_buy: Item[] = [];
  item: Item;

  constructor(private itemService: ItemService, private data: DataService) { }

  selected: string = 'ID';
  public isVisible:boolean = false;
  public createItem:any = 'Create Item';
  userIdentify: boolean;


  ngOnInit() {
    this.getItems_to_buy();
    this.changeState();
    this.resetForm();
    this.userIdentify = this.data.getStatus();
  }

  getItems_to_buy(): void {
    this.itemService.getItems_to_buy().subscribe(items_to_buy => this.items_to_buy = items_to_buy);
  }

  changeState(){
    if (this.selected === 'Price') {
      this.items_to_buy.sort((a, b) => (a.price > b.price) ? 1 : -1);
    }
    else if (this.selected === 'Name'){
      this.items_to_buy.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }
    else{
      this.items_to_buy.sort((a, b) => (a.id > b.id) ? 1 : -1);
    }
  }

  toggle() {
    this.isVisible = !this.isVisible;

    if(this.isVisible)
      this.createItem = "Cancel";
    else
      this.createItem = "Create Item";
  }

  addItem() {
    this.item.id = Math.max.apply(Math, this.items_to_buy.map(function(o) { return o.id + 1; }));
    this.items_to_buy.push(this.item);
    this.resetForm();
  }

  resetForm() {
    this.item = {id: 0, name: '', price: 0, isReadyForBuy: true};
  }
}
