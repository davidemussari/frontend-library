import { Component, OnInit, Input, Directive } from '@angular/core';
import { Chart, ChartType, ChartOptions, ChartData } from 'chart.js';
//import { Label } from 'ng2-charts';

@Component({
  selector: 'grafico-torta',
  templateUrl: './torta.component.html',
  styleUrls: ['./torta.component.scss']
})
export class TortaComponent implements OnInit {

    pieChartType: string = 'pie';

    @Input() valori: [];
    @Input() labels = [];
    @Input() data;
    @Input() options: any;

  constructor() { }

  ngOnInit() {
      let self = this;
      self.options.responsive = {responsive: true};
      self.options.legend = {position: 'right'};
      setTimeout(function() {new Chart(self.data.datasets[0].id, {
          type: self.pieChartType,
          data: self.data,
          options: self.options
    })}, 100);
  }

}
