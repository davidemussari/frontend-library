import { Component } from "@angular/core";
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { GetJsonService } from '../get-json.service';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
    providers: [GetJsonService]
})
export class HomeComponent {
    catalogo: any;
    nLibri: number = 0;
    nBrochure: number = 0;
    nDigitale: number = 0;
    nVHS: number = 0;
    nRivistePeriodici: number = 0;
    nCalendari: number = 0;
    single = [{
        "name": "Germany",
        "value": 8940000
        },{
        "name": "USA",
        "value": 5000000
        },{
        "name": "France",
        "value": 7200000
        }];

    multi = [{
    "name": "Germany",
    "series": [{
        "name": "2010",
        "value": 7300000
        },{
        "name": "2011",
        "value": 8940000
        }]},
    {
        "name": "USA",
        "series": [{
            "name": "2010",
            "value": 7870000
      },{
        "name": "2011",
        "value": 8270000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }
];

    view: any[] = [300, 150];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = false;
    xAxisLabel = 'Country';
    showYAxisLabel = false;
    yAxisLabel = 'Population';

    colorScheme = {
    domain: ['red', 'blue', 'green', 'yellow']
    };

    constructor(private downloadJson: GetJsonService) {
		this.downloadJson.getData("../json/biblioteca_lNostPais.json").subscribe((data) => {
  			this.catalogo = data;

            for(let el of this.catalogo){
                if(el.rilegatura == "Periodico" || el.rilegatura == "Rivista")
                    this.nRivistePeriodici +=1;
                else if(el.rilegatura == "Brochure")
                    this.nBrochure +=1;
                else if(el.rilegatura == "Calendario")
                    this.nCalendari +=1;
                else if(el.rilegatura == "Supporto Digitale")
                    this.nDigitale +=1;
                else if(el.rilegatura == "VHS")
                    this.nVHS +=1;
                else
                    this.nLibri +=1;
            }
            console.log("nVHS =" + this.nVHS)
		});
    }

}
