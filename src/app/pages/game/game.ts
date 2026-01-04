import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import games from './games.json';
import {GamesType, GameType} from './games';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-game',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
  public route = inject(ActivatedRoute);
  private games = (games as GamesType).games;

  public getGameName() {
    return String(this.route.snapshot.url.at(-1));
  }

  public getGames(): GameType {
    const game = this.getGameName();

    if (game === "league-of-legends") return <GameType>this.games.at(0);
    if (game === "valorant") return <GameType>this.games.at(1);
    if (game === "brawl-stars") return <GameType>this.games.at(2);

    return {name: "", sections: [{title: "", content: ""}], media: [{type: "", path: ""}]}
  }

  public getMedia(type: string) {
    return this.getGames()?.media.find((el: { type: string; }) => el.type == 'video')?.path;
  }
}
