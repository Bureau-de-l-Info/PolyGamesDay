import { ResolveFn, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Game } from './pages/game/game';
import { NotFound } from './pages/not-found/not-found';

const titleResolver: ResolveFn<string> = (route) => route.queryParams['id'];

export const routes: Routes = [
  { path: '', title: 'PolyGamesDay', component: Home },
  { path: 'games/:game', title: titleResolver, component: Game },
  { path: '**', title: '404 error', component: NotFound }
];
