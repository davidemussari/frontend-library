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

    catalogo: any;
    public catalogoPronto$: EventEmitter<any>;


    creditModaleOpen: Boolean = false;

    constructor(private router: Router, private downloadJson: GetJsonService, private serviceBindDataRountingService:ServiceBindDataRountingService) {

        this.downloadJson.getData("../json/biblioteca_lNostPais.json").subscribe((data) => {
//        this.downloadJson.getData("./json/biblioteca_lNostPais.json").subscribe((data) => {
            this.catalogo = data;
            this.serviceBindDataRountingService.catalog = this.catalogo;
            this.serviceBindDataRountingService.catalogoPronto$.emit(this.catalogo);
        });
    }

    ngOnInit(): void {
    }

    onActivate(event) {
        let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    }

}
