import { Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { AddComponent } from './components/add/add.component';
import { UpdateputComponent } from './components/updateput/updateput.component';

export const routes: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: 'add', component: AddComponent },
  { path: 'updateput/:id', component: UpdateputComponent },
];
