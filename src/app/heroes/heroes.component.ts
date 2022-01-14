import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  displayedColumns: string[] = ['id', 'name', 'money'];


  selectedColumn = 'id';

  ngOnInit() {
    this.getHeroes();
    this.changeSortedColumn();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }


  changeSortedColumn() {
    if (this.selectedColumn == "money") {
      HEROES.sort((a, b) => (a.money > b.money) ? 1 : -1);
    }
    else if (this.selectedColumn == "name"){
      HEROES.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }
    else{
      HEROES.sort((a, b) => (a.id > b.id) ? 1 : -1);
    }
  }
}
