import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetJsonService } from '../get-json.service';

import {Comparator} from "clarity-angular";
import {StringFilter} from "clarity-angular";

class Element{
    codiceArgomento: string;
}


class CodiceArgomentoSort implements Comparator<Element> {
    aNumber : number = 0;
    bNumber : number = 0;
    compare(a: Element, b: Element) {
        this.aNumber = +a.codiceArgomento;
        this.bNumber = +b.codiceArgomento;
        return this.aNumber - this.bNumber;
    }
}


class CodiceArgomentoFiltro implements StringFilter<Element> {
    accepts(element: Element, search: string):boolean {
        return "" + element.codiceArgomento == search
            || element.codiceArgomento.toString().toLowerCase().indexOf(search) >= 0;
    }
}



@Component({
  selector: 'app-catalogo-completo',
  templateUrl: './catalogo-completo.component.html',
  styleUrls: ['./catalogo-completo.component.scss']
})
export class CatalogoCompletoComponent implements OnInit {

    catalogo: any;
    private codiceArgomentoSort = new CodiceArgomentoSort();
    private codiceArgomentoFiltro = new CodiceArgomentoFiltro();

  constructor(private router: Router, private downloadJson: GetJsonService) {

		this.downloadJson.getData("../json/biblioteca_lNostPais.json").subscribe((data) => {
  			this.catalogo = data;
		});
    }

  ngOnInit() {
  }



}
