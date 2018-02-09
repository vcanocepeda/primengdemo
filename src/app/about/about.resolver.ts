import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { CarService } from './car.service';
import {SelectItem} from 'primeng/api';
import { Car } from './car.class';
import {Logger} from 'angular2-logger/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AboutResolver implements Resolve<Observable<Car[]>> {
  private selectListCar: SelectItem[];
  public carList: Car[];


  constructor(private carService: CarService, private _logger: Logger) { }

  resolve()  {
    this.carList = [new Car('Ferrari')];
    return this.carService.getObservableCars();
  }

}

