import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Car } from './car';


@Injectable()
export class CarLargeService {

  constructor(private http: Http) { }

  getCarsLarge() {
    return this.http.get('../../assets/carsmodel/cars.json')
    .toPromise()
    .then(res => <Car[]> res.json().data)
    .then(data => data);
  }

}
