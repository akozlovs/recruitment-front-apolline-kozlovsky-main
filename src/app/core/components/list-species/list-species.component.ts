import { Component, OnInit } from '@angular/core';
import { Species } from '@core/services/species';
import { SpeciesService } from '@core/services/species.service';


@Component({
  selector: 'app-list-species',
  templateUrl: './list-species.component.html',
  styleUrls: ['./list-species.component.scss']
})

export class ListSpeciesComponent implements OnInit {
  speciesList: Species[]= [];

  constructor(private speciesService: SpeciesService) { }

  ngOnInit(): void {
    this.speciesService.getSpecies().subscribe(data => {
      this.speciesList = data.results;
    });
  }
}
  


