import { Component, Input } from "@angular/core";
import { GetJsonService } from '../get-json.service';
import { ServiceBindDataRountingService } from '../service-bind-data-rounting.service';

import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';

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
    nTotaleAcquisizioni: number = 0;

    nItaliana: number = 0;
    nInglese: number = 0;
    nFrancese: number = 0;
    nPiemontese: number = 0;

    ultimeAcquisizioni = [];

    //Torta per tipologia
    pieChartOptions_tipologia: ChartOptions = {responsive: true,
        legend: {position: 'right',},
        plugins: {datalabels: {
            formatter: (value, ctx) => {
                const label = ctx.chart.data.labels[ctx.dataIndex];
                return label;
    },},}};
    pieChartLabels_tipologia: Label[] = ['Libri', 'Brochure', 'Supporti digitali', 'VHS', 'Riviste e periodici', 'Calendari'];
    pieChartData_tipologia: number[];
    pieChartType_tipologia: ChartType = 'pie';
    pieChartLegend_tipologia: boolean = true;
    pieChartColors_tipologia = [{backgroundColor: ['#006690', '#314351', '#9B56BB', '#A3EDF6', '#00B7D6', '#61717D']}];

    //Torta per lingua
    pieChartOptions_lingua: ChartOptions = {responsive: true,
        legend: {position: 'right',},
        plugins: {datalabels: {
            formatter: (value, ctx) => {
                const label = ctx.chart.data.labels[ctx.dataIndex];
                return label;
    },},}};
    pieChartLabels_lingua: Label[] = ['Italiana', 'Inglese', 'Francese', 'Piemontese'];
    pieChartData_lingua: number[];
    pieChartType_lingua: ChartType = 'pie';
    pieChartLegend_lingua: boolean = true;
    pieChartColors_lingua = [{backgroundColor: ['#0F1E82', '#6870C4', '#00BFA9', '#A3EDF6', '#80746D']}];

    constructor(private serviceBindDataRountingService: ServiceBindDataRountingService) {
        this.serviceBindDataRountingService.catalogoPronto$.subscribe(cat => {
            //serve nel momento in cui si apre direttamente questo indirizzo web
            this.catalogo = cat;
            this.catalogoCaricato();
        });
    }

    ngOnInit() {
        //serve nel momento del routing verso questo catalogo
        this.catalogo = this.serviceBindDataRountingService.catalog;
        this.catalogoCaricato();
    }


    catalogoCaricato = () => {
        var dataUltimaAcquisizione: string = this.catalogo[this.catalogo.length-1]["Data di creazione"];
        this.catalogo.forEach((e) => {
            //conta il totale degli elementi
            this.nTotaleAcquisizioni++;

            //suddivide per tipologia di elemento
            if(e.rilegatura == "Rigida" || e.rilegatura == "Morbida" || e.rilegatura == "Economica")
                this.nLibri++;
            else if(e.rilegatura == "Periodico" || e.rilegatura == "Rivista")
                this.nRivistePeriodici++;
            else if(e.rilegatura == "Brochure")
                this.nBrochure++;
            else if(e.rilegatura == "Calendario")
                this.nCalendari++;
            else if(e.rilegatura == "Supporto Digitale")
                this.nDigitale++;
            else if(e.rilegatura == "VHS")
                this.nVHS++;

            //conteggio per lingua
            if(e.lingua.indexOf("Italiana") > -1)
                this.nItaliana++;
            if(e.lingua.indexOf("Inglese") > -1)
                this.nInglese++;
            if(e.lingua.indexOf("Francese") > -1)
                this.nFrancese++;
            if(e.lingua.indexOf("Piemontese") > -1)
                this.nPiemontese++;

            //Ultime acquisizioni
            if(e["Data di creazione"] == dataUltimaAcquisizione)
                this.ultimeAcquisizioni.push({
                    'titolo': e.titolo,
                    'autore': e.autore,
                });
        });

        this.pieChartData_tipologia = [this.nLibri, this.nBrochure, this.nDigitale, this.nVHS, this.nRivistePeriodici, this.nCalendari];
        this.pieChartData_lingua = [this.nItaliana, this.nInglese, this.nFrancese, this.nPiemontese];
    }


}
