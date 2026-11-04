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
    id: "chicago",
    city: "Chicago",
    country: "IL",
    region: "USA Offices",
    address: "650 Warrenville Rd Suite #100 Lisle, IL 60532",
    coordinates: "41.8004,-88.0748",
  },
  {
    id: "dallas",
    city: "Dallas",
    country: "TX",
    region: "USA Offices",
    address: "1701 W Northwest Highway, Suite 100, Grapevine, Texas 76051",
    coordinates: "32.9297,-97.0781",
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    country: "IN",
    region: "India Offices",
    address: "#203, 2nd Floor, SBR CV Towers, Madhapur Hyderabad - 500 081",
    coordinates: "17.4483,78.3915",
  },
];

export const contactLocationsData = CONTACT_LOCATIONS_DATA;
