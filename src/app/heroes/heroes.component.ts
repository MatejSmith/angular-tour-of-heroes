import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  heroes: Hero[] = [];
  sort: any;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  displayedColumns: string[] = ['id', 'name', 'money'];


  selectedColumn = 'name';

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
    const sortState: Sort = {active: this.selectedColumn, direction: 'asc'};
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);    
  }
}