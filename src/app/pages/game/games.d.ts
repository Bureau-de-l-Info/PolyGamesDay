export type GamesType = {
  games: Array<GameType>;
}

export type GameType = {
  name: string;
  sections: Array<Section>;
  media: Array<MediaType>;
}

type Section = {
  title: string;
  content: string;
}

type MediaType = {
  type: string;
  path: string;
}
