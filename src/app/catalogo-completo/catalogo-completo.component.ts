import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceBindDataRountingService } from '../service-bind-data-rounting.service';
import { GrigliaComponent } from '../griglia/griglia.component';
import { DettagliComponent } from '../dettagli/dettagli.component';

@Component({
    selector: 'app-catalogo-completo',
    templateUrl: './catalogo-completo.component.html',
    styleUrls: ['./catalogo-completo.component.scss']
})
export class CatalogoCompletoComponent implements OnInit {
    codArgomento: string;
    descArgomento: string;
    luogo: string;
    catalog: any;
    caricamentoCompletato: boolean = false;

    constructor(private paramsRoute: ActivatedRoute, private serviceBindDataRountingService: ServiceBindDataRountingService) {
        this.serviceBindDataRountingService.catalogoPronto$.subscribe(cat => {
            //serve nel momento in cui si apre direttamente questo indirizzo web
            this.catalog = cat;
            this.caricamentoCompletato = true;
        });
    }

    ngOnInit() {
        this.catalog = this.serviceBindDataRountingService.catalog;
        this.paramsRoute.params.subscribe(params => {
            this.codArgomento = params['codArgomento'];
            this.descArgomento = params['descrizioneArgomento'];
            this.luogo = params['luogo'];
            if (this.catalog.length != undefined || this.catalog.length > 0)
                this.caricamentoCompletato = true;
        });
    }
}
