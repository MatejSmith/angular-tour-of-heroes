import { Component, OnInit } from '@angular/core';
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

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  selected: string = 'ID';


  ngOnInit() {
    this.getHeroes();
    this.changeState(null);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  changeState($event: any){
    if (this.selected === 'Money') {
      this.heroes.sort((a, b) => (a.money > b.money) ? 1 : -1);
    }
    else if (this.selected === 'Name'){
      this.heroes.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }
    else{
      this.heroes.sort((a, b) => (a.id > b.id) ? 1 : -1);
    }
  }
}
