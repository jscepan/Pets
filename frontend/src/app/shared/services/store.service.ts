import { Injectable } from '@angular/core';
import { CityModel } from '../models/city.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { EnumValueModel } from '../enums/enum.model';
import { CityWebService } from 'src/app/web-services/city.web-service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private cities$: BehaviorSubject<CityModel[]> = new BehaviorSubject<
    CityModel[]
  >([]);
  private citiesLoaded: boolean = false;

  getAllCities(webService: CityWebService): Observable<CityModel[]> {
    if (this.citiesLoaded) {
      return this.cities$.asObservable();
    } else {
      return new Observable((subscriber) => {
        webService.getAllCities().subscribe((cities) => {
          this.cities$.next(cities);
          subscriber.next(cities);
          subscriber.complete();
        });
      });
    }
  }

  getAllCitiesAsEnumValueModel(
    webService: CityWebService
  ): Observable<EnumValueModel[]> {
    return new Observable((subscriber) => {
      this.getAllCities(webService).subscribe((cities) => {
        const citiesEnums = cities.map((d) => {
          return {
            value: d.value,
            displayName: d.value,
          };
        });
        subscriber.next(citiesEnums);
        subscriber.complete();
      });
    });
  }

  getCityByEnumValue(value: string): CityModel {
    return this.cities$.getValue().filter((c) => c.value === value)[0];
  }

  getCityByOid(oid: string | undefined): CityModel {
    return this.cities$.getValue().filter((c) => c.oid === oid)[0];
  }
}
