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
  hero: Hero;

  constructor(private heroService: HeroService) {
  }

  public selected: string = 'ID';
  public isVisible:boolean = false;
  public CreateHero:any = 'Create Hero';

  ngOnInit() {
    this.getHeroes();
    this.changeState();
    this.resetForm();
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

  toggle() {
    this.isVisible = !this.isVisible;

    if(this.isVisible)
      this.CreateHero = "Cancel";
    else
      this.CreateHero = "Create Hero";
  }

  addStudent() {
    this.heroes.push(this.hero);
    this.resetForm();
  }

  resetForm() {
    this.hero = {id: 0, name: '',item: [], money: 0, life: 0, strength: 0};
  }
}
