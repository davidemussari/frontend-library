import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { GetJsonService } from './get-json.service';
import { ServiceBindDataRountingService } from './service-bind-data-rounting.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [GetJsonService, ServiceBindDataRountingService]
})
export class AppComponent {

    test:any = 'This text is passed to child';

    catalogo: any;
    public catalogoPronto$: EventEmitter<any>;

    creditModaleOpen: Boolean = false;

    constructor(private router: Router, private downloadJson: GetJsonService, private serviceBindDataRountingService:ServiceBindDataRountingService) {

        this.downloadJson.getData("../json/biblioteca_lNostPais.json").subscribe((data) => {
            this.catalogo = data;
            this.serviceBindDataRountingService.catalog = this.catalogo;
            this.serviceBindDataRountingService.stringServizio = this.test;
            this.serviceBindDataRountingService.catalogoPronto$.emit(this.catalogo);
        });
    }

    ngOnInit(): void {

    }




}
