import { Component } from '@angular/core';
import { Location } from '../../interfaces/locations';

@Component({
  selector: 'app-updateput',
  standalone: true,
  imports: [],
  templateUrl: './updateput.component.html',
  styleUrl: './updateput.component.scss',
})
export class UpdateputComponent {
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
}
