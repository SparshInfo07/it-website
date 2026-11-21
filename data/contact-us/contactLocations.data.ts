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
    id: "office",
    city: "Sahibabad, Ghaziabad",
    country: "UP",
    region: "Office Address",
    address: "A-121, Sahni Tower, Block-A, Sector-5, Rajendra Nagar, Sahibabad, Ghaziabad, Uttar Pradesh - 201005",
    coordinates: "Sahni+Tower,+Sector+5,+Rajendra+Nagar,+Sahibabad,+Ghaziabad,+Uttar+Pradesh+201005",
  },
];

export const contactLocationsData = CONTACT_LOCATIONS_DATA;
