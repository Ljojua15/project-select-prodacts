import { Component, OnInit } from '@angular/core';
import { Location } from '../../interfaces/locations';
import { Router } from '@angular/router';
import { LocationsService } from '../../services/locations.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-updateput',
  standalone: true,
  imports: [],
  templateUrl: './updateput.component.html',
  styleUrl: './updateput.component.scss',
})
export class UpdateputComponent implements OnInit {
  newProdactsForm: Location = {
    name: '',
    city: '',
    state: '',
    photo: '',
    availableUnits: 0,
    wifi: true,
    laundry: true,
  };

  constructor(
    private LocationService: LocationsService,
    private router: Router
  ) {}
  ngOnInit(): void {}
}
