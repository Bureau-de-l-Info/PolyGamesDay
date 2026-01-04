import { ResolveFn, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Game } from './pages/game/game';
import { NotFound } from './pages/not-found/not-found';
import { Reglement } from './pages/reglement/reglement';

const titleResolver: ResolveFn<string> = (route) => route.queryParams['id'];

export const routes: Routes = [
  { path: '', title: 'PolyGamesDay', component: Home },
  { path: 'reglement', title: 'Règlement', component: Reglement },
  { path: 'games/:game', title: titleResolver, component: Game },
  { path: '**', title: '404 error', component: NotFound }
];
