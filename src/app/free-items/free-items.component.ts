import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-items',
  templateUrl: './free-items.component.html',
  styleUrls: ['./free-items.component.css']
})
export class FreeItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*buyFilter(){
    const h = this.hero;
    if (h) {
      result = ITEMS_TO_BUY.filter((name) => name.price <= h.money);
    }
  }*/

}
