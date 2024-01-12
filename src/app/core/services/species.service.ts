import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpeciesResponse } from './species';
import { environment } from 'e2e/environment';

@Injectable({
  providedIn: 'root'
})

export class SpeciesService {
  private apiUrl = environment.apiUrl+ '/species';
  // private apiUrl = 'https://www.pokedexercice.ch/api/species';

  constructor(private http: HttpClient) { }

  getSpecies(): Observable<SpeciesResponse> {
    return this.http.get<SpeciesResponse>(this.apiUrl);
  }
}


