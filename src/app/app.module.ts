import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import {CalendarModule} from 'primeng/calendar';
import {FieldsetModule} from 'primeng/fieldset';
import {DropdownModule} from 'primeng/dropdown';
import {MessagesModule} from 'primeng/messages';
import {DataListModule} from 'primeng/datalist';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutResolver } from './about/about.resolver';
import {TabMenuModule} from 'primeng/tabmenu';
import { DemoComponent } from './demo/demo.component';
import { CarService } from './about/car.service';
import { CarLargeService } from './demo/carlarge.service';
import {Logger} from 'angular2-logger/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    DropdownModule,
    FieldsetModule,
    TabMenuModule,
    MessagesModule,
    DataListModule
  ],
  providers: [CarService, CarLargeService, AboutResolver, Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
