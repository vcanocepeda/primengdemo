import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {Message} from 'primeng/components/common/api';
import { CarLargeService } from './carlarge.service';
import { Car } from './car';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  cars: Car[];
  msgs: Message[] = [];

  constructor(private carService: CarLargeService) { }

  ngOnInit() {
    this.carService.getCarsLarge().then(cars => this.cars = cars);
  }

  loadData(event:any) {
    let start = event.first;
    let end = start + event.rows;
    this.msgs.length = 0;
          this.msgs.push({severity: 'info', summary: start, 
          detail: end});
   }
}
