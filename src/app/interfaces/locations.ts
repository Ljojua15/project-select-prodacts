export interface Location {
  id?: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}

export interface LocationsResponse {
  locations: Location[];
}
