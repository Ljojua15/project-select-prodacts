import { Injectable } from '@angular/core';
import { Location } from '../interfaces/locations';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private url = 'http://localhost:3000/locations';
  constructor(private http: HttpClient) {}
  getAllLocations() {
    return this.http.get<Location[]>(this.url);
  }

  createNewProdact(newProdact: Location) {
    return this.http.post<Location>(this.url, newProdact);
  }
}
