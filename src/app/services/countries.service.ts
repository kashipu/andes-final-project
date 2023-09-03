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
  getCultureById(id: string): Culture | undefined {
    return CULTUREDATA.find(culture => culture.id === id);
  }

  getFlagsByCulture(culture: string) {
    const flags: string[] = [];
    const countriesByCulture = COUNTRIESDATA.filter(country => country.culture.id === culture);
    countriesByCulture.forEach(country => {
      flags.push(country.flag);
    });
    return flags;
  }
}