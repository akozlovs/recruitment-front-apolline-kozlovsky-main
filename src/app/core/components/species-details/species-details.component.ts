import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Species, SpeciesResponse } from '@core/services/species';
import { SpeciesService } from '@core/services/species.service';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.scss']
})
export class SpeciesDetailsComponent {
  selectedSpecies!: any;
  speciesId!: string;

  constructor(private speciesService: SpeciesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.speciesId = params['id'];
      }
    });

    this.speciesService.getDetails(this.speciesId).subscribe(data => {
      this.selectedSpecies = data.data;
    });
  }
}

