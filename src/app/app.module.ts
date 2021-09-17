import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { PieComponent } from './pie/pie.component';
import { LoadedComponent } from './loaded/loaded.component';
import { DonutComponent } from './donut/donut.component'

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    PieComponent,
    LoadedComponent,
    DonutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
