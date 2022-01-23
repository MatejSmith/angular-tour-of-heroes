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

  selected: string = 'ID';

  ngOnInit() {
    this.getItems_to_buy();
    this.changeState();
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

}
