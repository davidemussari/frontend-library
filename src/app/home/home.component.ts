import { Component } from "@angular/core";
import { GetJsonService } from '../get-json.service';


class Grafico{
    datiDistribuzione: any;
    opzioniGrafico = new OpzioniGrafico();
}

class OpzioniGrafico{
    view;
    showXAxis: boolean = true;
    showYAxis: boolean = true;
    gradient: boolean = false;
    showLegend: boolean = false;
    showXAxisLabel: boolean = false;
    xAxisLabel: string;
    showYAxisLabel: boolean = false;
    yAxisLabel: string;
    colorScheme: any;
    animations: boolean = true;
    barPadding: number = 8;
}

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
    private graficoDistribuzione = new Grafico();



    constructor(private downloadJson: GetJsonService) {
		this.downloadJson.getData("../json/biblioteca_lNostPais.json").subscribe((data) => {
  			this.catalogo = data;
  			this.grafici();
		});
    }

    grafici(){

    }

    calcoloDistribuzione(){
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
    }

    TracciaGraficoDistribuzione(){
    console.log('grafico');

    this.graficoDistribuzione.datiDistribuzione = [{
        "name": "2017",
        "series": [
            {
                "name": "Libri",
                "value": this.nLibri
            },
            {
                "name": "Brochure",
                "value": this.nBrochure
            },
            {
                "name": "Riviste e Periodici",
                "value": this.nRivistePeriodici
            },
            {
                "name": "Calendari",
                "value": this.nCalendari
            },
            {
                "name": "Supporti digitali",
                "value": this.nDigitale
            },
            {
                "name": "VHS",
                "value": this.nVHS
            }
        ]}];

    this.graficoDistribuzione.opzioniGrafico.view = [500, 300];
    this.graficoDistribuzione.opzioniGrafico.showXAxis = false;
    this.graficoDistribuzione.opzioniGrafico.showYAxis = false;
    this.graficoDistribuzione.opzioniGrafico.gradient = false;
    this.graficoDistribuzione.opzioniGrafico.showLegend = true;
    this.graficoDistribuzione.opzioniGrafico.showXAxisLabel = false;
    this.graficoDistribuzione.opzioniGrafico.xAxisLabel = '';
    this.graficoDistribuzione.opzioniGrafico.showYAxisLabel = false;
    this.graficoDistribuzione.opzioniGrafico.yAxisLabel = '';
    this.graficoDistribuzione.opzioniGrafico.animations = true;
    this.graficoDistribuzione.opzioniGrafico.barPadding = 50;
    this.graficoDistribuzione.opzioniGrafico.colorScheme = {
    domain: ['red', 'blue', 'green', 'yellow', 'black', 'gray']
    };



    }

}
