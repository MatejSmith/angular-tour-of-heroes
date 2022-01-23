import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  selected: string = 'ID';

  ngOnInit() {
    this.getHeroes();
    this.changeState();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  changeState(){
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
