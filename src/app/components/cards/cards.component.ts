import { Component, OnInit } from '@angular/core';
import { Location } from '../../interfaces/locations';
import { LocationsService } from '../../services/locations.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  providers: [HttpClient],
})
export class CardsComponent {
  constructor(
    private locationsService: LocationsService,
    private router: Router
  ) {}
  products$: Observable<Location[]> = this.locationsService
    .getAllLocations()
    .pipe(tap(console.log));

  onClick() {
    console.log('Link clicked!');
    // this.router.navigate(['/add']);
  }
}
