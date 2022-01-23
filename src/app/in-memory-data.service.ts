import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import {HEROES} from './mock-heroes';
import {Item} from './item';
import {ITEMS} from "./mock-items";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = HEROES;
    const items = ITEMS;
    return {heroes, items};
  }

  genId(heroes: Hero[], items: Item[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11 &&  items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 11;
  }
}
