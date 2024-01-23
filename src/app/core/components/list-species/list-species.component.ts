import { Component, OnInit} from '@angular/core';
import { Species} from '@core/services/species';
import { SpeciesService } from '@core/services/species.service';
import { RouterModule } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  standalone: true,
  imports: [
    RouterModule,
    NgIf,
    NgFor,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'app-list-species',
  templateUrl: './list-species.component.html',
  styleUrls: ['./list-species.component.scss']
})

export class ListSpeciesComponent implements OnInit {
  speciesList!: Species[];
  searchControl = new FormControl();

  constructor(private speciesService: SpeciesService) { }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(search => this.speciesService.getSpecies(search))
      )
      .subscribe(data => this.speciesList = data.data);

    this.speciesService.getSpecies('').subscribe(data =>
        this.speciesList = data.data);
  }

  capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}