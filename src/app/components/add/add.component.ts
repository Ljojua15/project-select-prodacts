import { Component, OnInit } from '@angular/core';
import { Location } from '../../interfaces/locations';
import { LocationsService } from '../../services/locations.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent implements OnInit {
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

  constructor(
    private LocationService: LocationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.newProdactsForm.photo, 'test');
    console.log(this.newProdactsForm.id);
  }

  addNewProdact() {
    this.LocationService.createNewProdact(this.newProdactsForm).subscribe();
    console.log('add', this.newProdactsForm.id);

    setTimeout(() => {
      this.router.navigate(['/cards']);
    }, 1000);
  }
}
