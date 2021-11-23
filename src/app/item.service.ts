import { Injectable } from '@angular/core';
import {Item} from './item';
import {ITEMS} from './mock-items';
import {ITEMS_TO_BUY} from './mock-items_to_buy';
import { Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private messageService: MessageService) { }

  getItems(): Observable<Item[]>{
    const items = of(ITEMS);
    this.messageService.add('ItemService: fetched items')
    return items;
  }

  getItems_to_buy(): Observable<Item[]>{
    const items_to_buy = of(ITEMS_TO_BUY);
    this.messageService.add('ItemService: fetched items_to_buy')
    return items_to_buy;
  }

  getItem(id: number): Observable<Item> {
    const hero = ITEMS_TO_BUY.find(h => h.id === id)!;
    this.messageService.add('HeroService: fetched hero id=${id}');
    return of(hero);
  }
}
