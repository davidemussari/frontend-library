import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceBindDataRountingService } from '../service-bind-data-rounting.service';

import {Comparator} from "clarity-angular";
import {StringFilter} from "clarity-angular";

class Element{
    titolo: string;
    sottotitolo: string;
    autore: string;
    editore: string;
    rilegatura: string;
    prezzo: string;
    edizione: string;
    copyright: number;
    annoPubblicazione: number;
    isbn: string;
    lccn: string;
    pagine: number;
    traduttore: string;
    lingua: string;
    collana: string;
    numero: number;
    condizioni: string;
    autografato: boolean;
    donante: string;
    prestato: boolean;
    copertina: string;
    commenti: string;
    inventario: number;
    luogo: string;
    collocazione: string;
    codiceArgomento: string;
    perEtichette: string;
}

class CodiceArgomentoSort implements Comparator<Element> {
    compare(a: Element, b: Element) {
        return +a.codiceArgomento - +b.codiceArgomento;
    }
}

class CodiceArgomentoFiltro implements StringFilter<Element> {
    accepts(element: Element, search: string):boolean {
        return "" + element.codiceArgomento == search
        || element.codiceArgomento.toString().indexOf(search) == 0
        || element.codiceArgomento.toString().length < 3 && element.codiceArgomento.toString().indexOf(search) == 1; //per ovviare al problema di quei codici che iniziano per 0
    }
}

class FiltroLuogo implements StringFilter<Element> {
    accepts(element: Element, search: string):boolean {
        return "" + element.luogo.toLowerCase().trim() == search.toLowerCase().trim()
        || element.luogo.toLowerCase().trim().indexOf(search) >= 0;
    }
}

class FiltroTitolo implements StringFilter<Element> {
    accepts(element: Element, search: string):boolean {
        return "" + element.titolo.toLowerCase().trim() == search.toLowerCase().trim()
        || element.titolo.toLowerCase().trim().indexOf(search) >= 0;
    }
}

class FiltroAutore implements StringFilter<Element> {
    accepts(element: Element, search: string):boolean {
        return "" + element.autore.toLowerCase().trim() == search.toLowerCase().trim()
        || element.autore.toLowerCase().trim().indexOf(search) >= 0;
    }
}

class Modale {
    aperta: boolean = false;
    public elemento = new Element();
}



@Component({
    selector: 'app-catalogo-completo',
    templateUrl: './catalogo-completo.component.html',
    styleUrls: ['./catalogo-completo.component.scss']
})
export class CatalogoCompletoComponent implements OnInit {
    private codArgomento: string;
    private descArgomento: string;
    private luogo: string;
    private titoloFiltrato: string;
    private autoreFiltrato: string;
    private codiceArgomentoSort = new CodiceArgomentoSort();
    private codiceArgomentoFiltro = new CodiceArgomentoFiltro();
    private luogoFiltro = new FiltroLuogo();
    private titoloFiltro = new FiltroTitolo();
    private autoreFiltro = new FiltroAutore();
    private modale = new Modale();
    private router: any;
    private caricamentoCompletato: boolean = false;
    private numeroElementiVisibiliTabella: number = 10;
    private catalogo: any;

    constructor(private _router: Router,  private paramsRoute: ActivatedRoute, private serviceBindDataRountingService: ServiceBindDataRountingService) {
        this.router = _router;
        this.serviceBindDataRountingService.catalogoPronto$.subscribe(cat => {
            //serve nel momento in cui si apre direttamente questo indirizzo web
            this.catalogo = cat;
        });
    }

    ngOnInit() {
        this.catalogo = this.serviceBindDataRountingService.catalog;
        this.paramsRoute.params.subscribe(params => {
            this.codArgomento = params['codArgomento'];
            this.descArgomento = params['descrizioneArgomento'];
            this.luogo = params['luogo'];
        });
    }

    clearFilter= () => {
        this.codArgomento = "";
        this.descArgomento = "";
        this.router.navigate(['/catalogoCompleto/']);
    }

    clickRigaTabella = (elemento) =>{
        this.modale.aperta = true;
        this.modale.elemento = elemento
    }
}
