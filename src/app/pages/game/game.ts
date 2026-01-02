import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
  games = [
    {
      name: 'League of Legends'
    },
    {
      name: 'Valorant'
    },
    {
      name: 'Brawl Stars'
    }
  ]
}