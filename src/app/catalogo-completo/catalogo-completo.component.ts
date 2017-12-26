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
    dettagli: boolean = false;
    catalog: any;
    elementoCliccato: any;

    constructor(private paramsRoute: ActivatedRoute, private serviceBindDataRountingService: ServiceBindDataRountingService) {
        this.serviceBindDataRountingService.catalogoPronto$.subscribe(cat => {
            //serve nel momento in cui si apre direttamente questo indirizzo web
            this.catalog = cat;
        });
    }

    ngOnInit() {
        this.catalog = this.serviceBindDataRountingService.catalog;
        this.paramsRoute.params.subscribe(params => {
            this.codArgomento = params['codArgomento'];
            this.descArgomento = params['descrizioneArgomento'];
            this.luogo = params['luogo'];
        });
    }

    clickRigaTabella = (elemento) =>{
        this.dettagli = true;
        this.elementoCliccato = elemento;
    }
}
