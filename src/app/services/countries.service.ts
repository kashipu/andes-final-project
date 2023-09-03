import { Injectable } from '@angular/core';
import { Country } from '../models/Country.model';
import { CULTUREDATA } from '../data/Culture.data';
import { COUNTRIESDATA } from '../data/Countries.data';
import { Culture } from '../models/Culture.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  getCountries(): Country[] {
    return COUNTRIESDATA;
  }
  getCultures(): Culture[] {
    return CULTUREDATA;
  }
}
