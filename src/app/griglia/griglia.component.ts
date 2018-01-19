import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

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
    selector: 'app-griglia',
    templateUrl: './griglia.component.html',
    styleUrls: ['./griglia.component.scss']
})
export class GrigliaComponent {

    titoloFiltrato: string;
    autoreFiltrato: string;
    caricamentoCompletato: boolean = false;
    codiceArgomentoSort = new CodiceArgomentoSort();
    codiceArgomentoFiltro = new CodiceArgomentoFiltro();
    luogoFiltro = new FiltroLuogo();
    titoloFiltro = new FiltroTitolo();
    autoreFiltro = new FiltroAutore();
    numeroElementiVisibiliTabella: number = 10;
    @Input() catalogo: any;
    @Input() codArgomento: string;
    @Input() descArgomento: string;
    @Input() luogo: string;
    @Output() clickDettaglio: EventEmitter<Element> = new EventEmitter();

    router: any;

    constructor(private _router: Router) {
         this.router = _router;
    }

    clearFilter= () => {
        this.codArgomento = "";
        this.descArgomento = "";
        this.router.navigate(['/catalogoCompleto/']);
    }

    clickRigaTabella = (elemento) =>{
        this.clickDettaglio.emit(elemento);
    }

}
