import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-chart',
  templateUrl: './vendor-chart.component.html',
  styleUrls: ['./vendor-chart.component.scss']
})
export class VendorChartComponent {

  chartOptions = {
    animationEnabled: true,
    backgroundColor: "#ffffff",
    axisY: {
      title: "Security rating",
      maximum: 100,
      gridThickness: 0
    },
    axisX: {
      title: "Month",
      labelFontSize: 14
    },
    data: [
      {
        type: "stackedColumn",
        color: "#6B46C1",
        dataPoints: [
          { label: "Jan", y: 25 }, { label: "Feb", y: 35 },
          { label: "Mar", y: 15 }, { label: "Apr", y: 30 },
          { label: "May", y: 20 }, { label: "Jun", y: 35 },
          { label: "Jul", y: 28 }, { label: "Aug", y: 30 },
          { label: "Sep", y: 28 }, { label: "Oct", y: 32 },
          { label: "Nov", y: 36 }, { label: "Dec", y: 20 }
        ]
      },
      {
        type: "stackedColumn",
        color: "#9F7AEA",
        dataPoints: [
          { label: "Jan", y: 25 }, { label: "Feb", y: 35 },
          { label: "Mar", y: 20 }, { label: "Apr", y: 28 },
          { label: "May", y: 20 }, { label: "Jun", y: 32 },
          { label: "Jul", y: 25 }, { label: "Aug", y: 28 },
          { label: "Sep", y: 26 }, { label: "Oct", y: 30 },
          { label: "Nov", y: 34 }, { label: "Dec", y: 28 }
        ]
      },
      {
        type: "stackedColumn",
        color: "#E9D8FD",
        dataPoints: [
          { label: "Jan", y: 20 }, { label: "Feb", y: 25 },
          { label: "Mar", y: 15 }, { label: "Apr", y: 22 },
          { label: "May", y: 15 }, { label: "Jun", y: 30 },
          { label: "Jul", y: 20 }, { label: "Aug", y: 22 },
          { label: "Sep", y: 20 }, { label: "Oct", y: 25 },
          { label: "Nov", y: 28 }, { label: "Dec", y: 18 }
        ]
      }
    ]
  };
}
