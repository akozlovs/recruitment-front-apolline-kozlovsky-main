export interface Species {
    id: number,
    name: string,
    url: string
}

export interface SpeciesResponse {
    results: Species[];
  }
