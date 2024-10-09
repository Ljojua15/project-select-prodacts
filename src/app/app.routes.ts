import { Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { AddComponent } from './components/add/add.component';

export const routes: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: 'add', component: AddComponent },
];
