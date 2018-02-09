import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  items: MenuItem[];
  msgs: Message[] = [];

  constructor() {}

  ngOnInit() {
    this.msgs = [];
    this.items = [
        {label: 'Home', icon: 'fa-bar-chart', routerLink: ['/home'], command: (event) => { this.msgs = []; } },
        {label: 'About', icon: 'fa-calendar', routerLink: ['/about']},
        {label: 'Demo', icon: 'fa-book', routerLink: ['/demo']},
        {label: 'Documentation', icon: 'fa-book', url: 'https://www.primefaces.org/documentation/'},
        {label: 'Downloads', icon: 'fa-download', command: (event) => {
          this.msgs.length = 0;
          this.msgs.push({severity: 'info', summary: 'PrimeNG Showcase',
          detail: 'Navigate all components'});
         }
        },
        {label: 'About48', icon: 'fa-support', routerLink: ['/about/48']}
    ];
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
  }
}
