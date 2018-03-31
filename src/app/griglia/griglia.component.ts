import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

import {Comparator} from "clarity-angular";
import {StringFilter} from "clarity-angular";

import { NomiCognomiPipe } from '../nomi-cognomi.pipe';
import {SortOrder} from 'clarity-angular';


declare var jsPDF: any; // Important


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

function sortAutori(a,b) {
    if (a.autore < b.autore)
        return -1;
    else if (a.autore > b.autore)
        return 1;
    else
        return 0;
}

function sortArgomento(a,b) {
    if (a.perEtichette < b.perEtichette)
        return -1;
    else if (a.perEtichette > b.perEtichette)
        return 1;
    else
        return 0;
}

function sortLuogo(a,b) {
    if (a.luogo < b.luogo)
        return -1;
    else if (a.luogo > b.luogo)
        return 1;
    else
        return 0;
}

class Modale {
    aperta: boolean = false;
    public elemento = new Element();
}

@Component({
    selector: 'app-griglia',
    templateUrl: './griglia.component.html',
    styleUrls: ['./griglia.component.scss'],
    providers:[NomiCognomiPipe]
})
export class GrigliaComponent {

    mdOpen: boolean = false; //apre/chiude la modale dell'export pdf
    sort; // stringa che indica secondo quale cosa si vuole export pdf

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

    selezionati=[]; //elementi selezionati nella griglia

    router: any;
    nomiCognomi: any;

    constructor(private _router: Router, private _nomiCognomi:NomiCognomiPipe) {
        this.router = _router;
        this.nomiCognomi = _nomiCognomi;
    }

    clearFilter= () => {
        this.codArgomento = "";
        this.descArgomento = "";
        this.router.navigate(['/catalogoCompleto/']);
    }

    clickRigaTabella = (elemento) =>{
        this.clickDettaglio.emit(elemento);
    }

    download = ()=>{//realizza il pdf
        var columns = [];
        var lastCharacter = '';
        var doc = new jsPDF('l', 'mm', 'a4');
        for(let el of this.selezionati)
            if(el.autore != undefined)
            el.autore = this.nomiCognomi.transform(el.autore, []).replace(/(<br><br>|<\/br>|<br \/>)/mgi, "\n").slice(0, -2);//serve per andare a capo e per togliere i <br> che servono nell'html
        if(this.sort == 'autore'){
            columns = [
            {title: "Autore/i", dataKey: "autore"},
            {title: "Titolo", dataKey: "titolo"},
            {title: "Collocazione", dataKey: "perEtichette"},
            {title: "Inventario", dataKey: "inventario"}
            ];
            this.selezionati = this.selezionati.sort(sortAutori);//ordina gli elementi selezionati alfabeticamente rispetto al primo autore
            lastCharacter = this.selezionati[0].autore.substring(0,1);//serve per fare una pagina nuova quando cambia la lettera iniziale del nome (per non stampare sempre tutto il catalogo cartaceo)
            doc.autoTable(columns, this.selezionati,{
                theme: 'striped',
                pageBreak: 'always',
                styles: {
                    font: 'times',
                    fontSize: 11,
                    overflow: 'linebreak',
                    valign: 'middle',
                    columnWidth: 'auto',
                    lineColor: [128, 167, 186],
                    lineWidth: 0.3
                },
                headerStyles: {
                    fontSize: 12,
                    fontStyle: 'bold',
                    overflow: 'linebreak',
                    textColor: 255,
                    fillColor: [128, 167, 186],
                    halign: 'left', // left, center, right
                    valign: 'middle', // top, middle, bottom
                    columnWidth: 'auto' // 'auto', 'wrap' or a number},
                },alternateRowStyles: {
                    fillColor: [255, 255, 255]
                },
                tableLineColor : [128, 167, 186],
                tableLineWidth: 0.3,
                drawRow: function (row, data) {
                    if(row.cells.autore.text[0] != undefined && row.cells.autore.text[0].substring(0,1) != lastCharacter){
                        lastCharacter = row.cells.autore.text[0].substring(0,1);
                        data.addPage();
                    }
                },
                columnStyles: {
                    perEtichette: {columnWidth: 40},
                    autore: {columnWidth: 'auto'},
                    titolo: {columnWidth: 'auto'},
                    inventario: {columnWidth: 22}
                }
            });
            doc.save("Fondo di documentazione storico locale - 'L Nòst Pais - alfabetico autori.pdf");
        }else if (this.sort == 'luogo'){
            columns = [
            {title: "Luogo", dataKey: "luogo"},
            {title: "Autore/i", dataKey: "autore"},
            {title: "Titolo", dataKey: "titolo"},
            {title: "Collocazione", dataKey: "perEtichette"},
            {title: "Inventario", dataKey: "inventario"}
            ];
            this.selezionati = this.selezionati.sort(sortLuogo);//ordina gli elementi selezionati alfabeticamente per luogo
            lastCharacter = this.selezionati[0].luogo.substring(0,1);//serve per cambiare pagina per ogni iniziale di luogo (vedi sopra)
            doc.autoTable(columns, this.selezionati,{
                theme: 'striped',
                pageBreak: 'always',
                styles: {
                    font: 'times',
                    fontSize: 11,
                    overflow: 'linebreak',
                    valign: 'middle',
                    columnWidth: 'auto',
                    lineColor: [128, 167, 186],
                    lineWidth: 0.3
                },
                headerStyles: {
                    fontSize: 12,
                    fontStyle: 'bold',
                    overflow: 'linebreak',
                    textColor: 255,
                    fillColor: [128, 167, 186],
                    halign: 'left', // left, center, right
                    valign: 'middle', // top, middle, bottom
                    columnWidth: 'auto' // 'auto', 'wrap' or a number},
                },alternateRowStyles: {
                    fillColor: [255, 255, 255]
                },
                tableLineColor : [128, 167, 186],
                tableLineWidth: 0.3,
                drawRow: function (row, data) {
                    if(row.cells.luogo.text[0] != undefined && row.cells.luogo.text[0].substring(0,1) != lastCharacter){
                        lastCharacter = row.cells.luogo.text[0].substring(0,1);
                        data.addPage();
                    }
                },
                columnStyles: {
                    perEtichette: {columnWidth: 40},
                    autore: {columnWidth: 'auto'},
                    titolo: {columnWidth: 'auto'},
                    inventario: {columnWidth: 22}
                }
            });
            doc.save("Fondo di documentazione storico locale - 'L Nòst Pais - alfabetico luoghi.pdf");
        }else if(this.sort == 'argomento'){
            columns = [
            {title: "Collocazione", dataKey: "perEtichette"},
            {title: "Autore/i", dataKey: "autore"},
            {title: "Titolo", dataKey: "titolo"},
            {title: "Inventario", dataKey: "inventario"}
            ];
            this.selezionati = this.selezionati.sort(sortArgomento); //ordina in modo crescente i valori delle collocazioni
            lastCharacter = this.selezionati[0].perEtichette.substring(0,3); //serve per cambiare pagina quando cambiano le prime pagine cifre della collocazione (vedi sopra)
            doc.autoTable(columns, this.selezionati,{
                theme: 'striped',
                pageBreak: 'always',
                styles: {
                    font: 'times',
                    fontSize: 11,
                    overflow: 'linebreak',
                    valign: 'middle',
                    columnWidth: 'auto',
                    lineColor: [128, 167, 186],
                    lineWidth: 0.3
                },
                headerStyles: {
                    fontSize: 12,
                    fontStyle: 'bold',
                    overflow: 'linebreak',
                    textColor: 255,
                    fillColor: [128, 167, 186],
                    halign: 'left', // left, center, right
                    valign: 'middle', // top, middle, bottom
                    columnWidth: 'auto' // 'auto', 'wrap' or a number},
                },alternateRowStyles: {
                    fillColor: [255, 255, 255]
                },
                tableLineColor : [128, 167, 186],
                tableLineWidth: 0.3,
                drawRow: function (row, data) {
                    if(row.cells.perEtichette.text[0] != undefined && row.cells.perEtichette.text[0].substring(0,3) != lastCharacter){
                        lastCharacter = row.cells.perEtichette.text[0].substring(0,3);
                        data.addPage();
                    }
                },
                columnStyles: {
                    perEtichette: {columnWidth: 40},
                    autore: {columnWidth: 'auto'},
                    titolo: {columnWidth: 'auto'},
                    inventario: {columnWidth: 22}
                }
            });
            doc.save("Fondo di documentazione storico locale - 'L Nòst Pais - argomenti.pdf");
        }
    }
}
