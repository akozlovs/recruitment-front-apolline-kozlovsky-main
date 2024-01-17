import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpeciesResponse, Species, SpeciesResponseDetails } from './species';
import { environment } from 'e2e/environment';

@Injectable({
  providedIn: 'root'
})

export class SpeciesService {
  private speciesList: Species[] = [];

  constructor(private http: HttpClient) { }

  getSpecies(search: string): Observable<SpeciesResponse> {
    if (search === '') {
      return this.http.get<SpeciesResponse>(`${environment.apiUrl}/species`);
    } else {
      return this.http.get<SpeciesResponse>(`${environment.apiUrl}/species?search=${search}`);
    }
    
  }

  identifyImage(formData: FormData): Observable<Species> {
    const endpoint = `${environment.apiUrl}/species/identify`;
    return this.http.post<Species>(endpoint, formData);
  }

  addSpeciesToList(species: Species): void {
    this.speciesList.push(species);
  }

  getDetails(id: string): Observable<SpeciesResponseDetails>{
    return this.http.get<SpeciesResponseDetails>(`${environment.apiUrl}/species/${id}`)
  }

}


