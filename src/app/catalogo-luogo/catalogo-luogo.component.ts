import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceBindDataRountingService } from '../service-bind-data-rounting.service';

@Component({
    selector: 'app-catalogo-luogo',
    templateUrl: './catalogo-luogo.component.html',
    styleUrls: ['./catalogo-luogo.component.scss']
})
export class CatalogoLuogoComponent implements OnInit {

    router: any;
    catalogo: any;
    luoghi: Array<string> = [];
    argomenti: Array<string> = [];
    caricamentoCompletato: boolean = false;

    catalogoCaricato = () => {
        for(let elemento of this.catalogo){
            if(elemento.luogo != "" && this.luoghi.indexOf(elemento.luogo) == -1)
                this.luoghi.push(elemento.luogo);

            //serve per scaricare tutti gli argomenti attualmente in catalogo
            if(elemento.codiceArgomento != null && this.argomenti.indexOf(elemento.codiceArgomento) == -1)
                this.argomenti.push(elemento.codiceArgomento);
        }
        this.luoghi.sort();
        this.argomenti.sort();
        this.caricamentoCompletato = true;
        /*
        * this.argomenti.split(".")
        * */

    }

    constructor(private _router: Router, private serviceBindDataRountingService: ServiceBindDataRountingService) {
        this.serviceBindDataRountingService.catalogoPronto$.subscribe(cat => {
            //serve nel momento in cui si apre direttamente questo indirizzo web
            this.catalogo = cat;
            this.catalogoCaricato();
        });
        this.router = _router;
    }

    ngOnInit() {
        //serve nel momento del routing verso questo catalogo
        this.catalogo = this.serviceBindDataRountingService.catalog;
        this.catalogoCaricato();
    }

    routing = (Luogocliccato) => {
        this.router.navigate(['/catalogoCompleto/'+Luogocliccato]);
    }
}
