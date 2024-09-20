import { Hero } from './../interfaces/hero';
import { Component } from '@angular/core';
import { Heroes } from '../mocks/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes = Heroes;
  selectedHero: Hero = this.heroes[0];

  selectHero(name: string): Hero | undefined {
    const foundHero = this.heroes.find(hero => hero.name === name);
    if (foundHero) {
      this.selectedHero = foundHero;
    } else {
      console.log(`Hero with name ${name} not found`);
    }
    return this.selectedHero;
  }
}
