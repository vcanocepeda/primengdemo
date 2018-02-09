import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from './car.class';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CarService {

  private _getsURL = '../../assets/carsmodel/cars.json';

  constructor(private http: Http) {
  }

  getPromiseCars(): Promise<Car[]> {
    return this.http.get('../../assets/carsmodel/cars.json').toPromise()
    .then(res => <Car[]> res.json().data)
    .then(data => data);
  }


  getObservableCars(): Observable<Car[]> {
    return this.http.get('../../assets/carsmodel/cars.json')
        .map((res: Response) => {
            return <Car[]>res.json().data;
        });
  }

  getCountries(): Car[]  {
    return this.http.get<Car[]>( this._getsURL);
  }
}
