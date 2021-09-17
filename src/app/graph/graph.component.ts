import { Component, Input, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexNonAxisChartSeries
} from "ng-apexcharts";

import { series } from "./data";

export type ChartOptions = {
  series: any;
  chart: any;
  xaxis: any;
  stroke: any;
  dataLabels: any;
  yaxis: any;
  title: any;
  labels: any;
  legend: any;
  subtitle: any;
};

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.css"]
})
export class GraphComponent {
  @ViewChild("chart") chart!: ChartComponent;
  @Input()
  series!: ApexAxisChartSeries | ApexNonAxisChartSeries;
   
  @Input() xaxis!: ApexXAxis;
  @Input() stroke!:ApexStroke;
  @Input() dataLabels!: ApexDataLabels;
  @Input() yaxis!: ApexYAxis;
  @Input() title!: ApexTitleSubtitle;
  @Input() labels!: string[];
  @Input() legend!: ApexLegend;
  @Input() subtitle!: ApexTitleSubtitle;

  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "STOCK ABC",
          data: series.monthDataSeries1.prices
        }
      ],
      chart: {
        type: "area",
        height: 250,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },

      title: {
        text: "Fundamental Analysis of Stocks",
        align: "left"
      },
      subtitle: {
        text: "Price Movements",
        align: "left"
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };
  }
}
