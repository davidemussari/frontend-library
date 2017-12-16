import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetJsonService } from '../get-json.service';

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

class Filtro implements StringFilter<Element> {
    accepts(element: Element, search: string):boolean {
        return "" + element.luogo.toLowerCase().trim() == search.toLowerCase().trim()
        || element.luogo.toLowerCase().trim().indexOf(search) >= 0;
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
    catalogo: any;
    codArgomento: string;
    descArgomento: string;
    luogo: string;
    private codiceArgomentoSort = new CodiceArgomentoSort();
    private codiceArgomentoFiltro = new CodiceArgomentoFiltro();
    private luogoFiltro = new Filtro();
    private modale = new Modale();
    router: any;

  constructor(private _router: Router, private downloadJson: GetJsonService, private paramsRoute: ActivatedRoute,) {
        this.router = _router;

		this.downloadJson.getData("../json/biblioteca_lNostPais.json").subscribe((data) => {
  			this.catalogo = data;
		});
    }

 ngOnInit() {
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
