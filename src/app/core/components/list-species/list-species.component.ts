import { Component, OnInit } from '@angular/core';
import { Species, SpeciesResponse } from '@core/services/species';
import { SpeciesService } from '@core/services/species.service';
import { RouterModule } from '@angular/router';
import { AsyncPipe, NgIf, NgFor } from '@angular/common';


@Component({
  standalone: true,
  imports: [
    RouterModule,
    NgIf,
    NgFor
  ],
  selector: 'app-list-species',
  templateUrl: './list-species.component.html',
  styleUrls: ['./list-species.component.scss']
})

export class ListSpeciesComponent implements OnInit {
  speciesList!: Species[];
  searchValue: string = '';

  constructor(private speciesService: SpeciesService) { }

  ngOnInit(): void {
    this.speciesService.getSpecies().subscribe(data => {
      this.speciesList = data.data;
    });
  }

  // search(): void {
  //   this.speciesService.searchSpecies(this.searchValue).subscribe(data => this.speciesList = data);
  // }

}
  


