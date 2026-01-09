import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';

import games from './games.json';
import { GamesType, GameType } from './games';

@Component({
  selector: 'app-game',
  imports: [
    NgOptimizedImage,
    MarkdownComponent
  ],
  templateUrl: './game.html',
  styleUrl: './game.scss',
  providers: [MarkdownService]
})
export class Game {
  public route = inject(ActivatedRoute);
  private games = (games as GamesType).games;

  // constructor(public markdownService: MarkdownService) {}

  public getGameName() {
    return String(this.route.snapshot.url.at(-1));
  }

  public getGames(): GameType {
    const game = this.getGameName();

    this.log();

    if (game === "league-of-legends") return <GameType>this.games.at(0);
    if (game === "valorant") return <GameType>this.games.at(1);
    if (game === "brawl-stars") return <GameType>this.games.at(2);

    return {name: "", sections: [{title: "", content: ""}], media: [{type: "", path: ""}]}
  }

  public getMedia(type: string) {
    return this.getGames()?.media.find((el: { type: string; }) => el.type == 'video')?.path;
  }

  public log() {
    console.log('./md/' + this.getGameName() + '.md');
  }
}
