export interface Species {
    id: number,
    name: string,
    types: string[];
    description: string;
    image: string;
    genre: string;
    weight: number;
    height: number;
}

export interface SpeciesResponse {
    data: Species[];
    page: number;
    per_page: number;
  }

export interface SpeciesResponseDetails {
    data: Species;
  }

