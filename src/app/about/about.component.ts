import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Car } from './car.class';
import {Logger} from 'angular2-logger/core';
import {SelectItem} from 'primeng/api';
import { Observable } from 'rxjs/Observable';
import { CarService } from './car.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public literal: String;
  private carList: Car[];
  private carListObservable: Observable<Car[]>;
  private carListPromise: Promise<Car[]>;
  private items: SelectItem[] = [];

  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router, private _logger: Logger) {
   // this.route.params.subscribe(res => console.log('Constructor ' + res));
  }

  // implementar un dropdown con un resolver
ngOnInit() {
  this.carList = this.route.snapshot.data.carList;
  this.mapSelectItem(this.carList);

  console.log('done!' + this.carList[0].brand);

  //  this.carListObservable = this.carService.getObservableCars();
  // this.carListObservable.subscribe(
  //  (res) => {
  //    this.mapSelectItem(res);
  //  },
  //  (err) => console.log(err),
  //  () => {
  //    console.log('done!');
  //  }
  // );
}

sendMeHome() {
  this.router.navigate(['home']);
}

  mapSelectItem(input: Car[]) {
    console.log('onNext2: %s', input[1].brand);
    for (const key in input) {
      if (input.hasOwnProperty(key)) {
        this.items.push(
          {label: input[key].brand, value: input[key].color}
        );
      }
    }
  }
}
