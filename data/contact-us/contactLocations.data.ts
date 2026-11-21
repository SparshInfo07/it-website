export interface OfficeLocationItem {
  id: string;
  city: string;
  country: string;
  region: string;
  address: string;
  coordinates: string;
}

export const CONTACT_LOCATIONS_DATA: OfficeLocationItem[] = [
  {
    id: "ghaziabad",
    city: "Ghaziabad",
    country: "UP",
    region: "India Office",
    address: "F-405, Oxy Homez, Sahibabad, Ghaziabad, UP 201005",
    coordinates: "Oxy+Homez,+Sahibabad,+Ghaziabad,+UP+201005",
  },
];

export const contactLocationsData = CONTACT_LOCATIONS_DATA;
