import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetJsonService } from '../get-json.service';

import {Comparator} from "clarity-angular";
import {StringFilter} from "clarity-angular";

class Element{
    codiceArgomento: string;
}

class CodiceArgomentoSort implements Comparator<Element> {
    compare(a: Element, b: Element) {
        return +a.codiceArgomento - +b.codiceArgomento;
    }
}

class CodiceArgomentoFiltro implements StringFilter<Element> {
    accepts(element: Element, search: string):boolean {
        return "" + element.codiceArgomento == search
            || element.codiceArgomento.toString().toLowerCase().indexOf(search) == 0;
    }
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
    private codiceArgomentoSort = new CodiceArgomentoSort();
    private codiceArgomentoFiltro = new CodiceArgomentoFiltro();
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
		});
	}

	clearFilter= () => {
        this.codArgomento = "";
        this.descArgomento = "";
        this.router.navigate(['/catalogoCompleto/']);
	}



}
