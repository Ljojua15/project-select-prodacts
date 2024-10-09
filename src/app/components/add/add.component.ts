import { Component } from '@angular/core';
import { Location } from '../../interfaces/locations';
import { LocationsService } from '../../services/locations.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  newProdactsForm: Location = {
    id: 0,
    name: '',
    city: '',
    state: '',
    photo: '',
    availableUnits: 0,
    wifi: true,
    laundry: true,
  };

  constructor(private LocationService: LocationsService) {}
  addNewProdact() {
    this.LocationService.createNewProdact(this.newProdactsForm);
  }
}
