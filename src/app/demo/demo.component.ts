import { Component, OnInit } from '@angular/core';
//Aqui importamos el modulo en el componente en vez de en el modulo principal
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
