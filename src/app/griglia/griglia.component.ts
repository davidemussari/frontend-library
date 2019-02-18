import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

import {Comparator} from "clarity-angular";
import {StringFilter} from "clarity-angular";

import { NomiCognomiPipe } from '../nomi-cognomi.pipe';
import {SortOrder} from 'clarity-angular';

import { DeweyService } from '../dewey.service';


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

//produce da un array, un array di array, dove ogni array contenuto ha la stessa iniziale (o codice argomento)
function separatorePerPrimoCarattere(data, campo){
    var a = new Array();
    var temp = new Array();
    var lastCharacter = "";
    if (campo == 'autore'){
        lastCharacter = data[0].autore.substring(0,1);
        data.forEach(function(e){
           if(lastCharacter != e.autore.substring(0,1)){
               lastCharacter = e.autore.substring(0,1);
               a.push(temp);
               temp = [];
           }
           temp.push(e);
        });
    }else if (campo == 'luogo'){
        if(data[0].luogo != undefined)
            lastCharacter = data[0].luogo.substring(0,1);
        data.forEach(function(e){
           if(e.luogo != undefined && lastCharacter != e.luogo.substring(0,1)){
               lastCharacter = e.luogo.substring(0,1);
               a.push(temp);
               temp = [];
           }
           temp.push(e);
        });
    }else if(campo == 'argomento'){
        lastCharacter = data[0].perEtichette.split(' ')[0];
        data.forEach(function(e){
           if(lastCharacter != e.perEtichette.split(' ')[0]){
               lastCharacter = e.perEtichette.split(' ')[0];
               a.push(temp);
               temp = [];
           }
           temp.push(e);
        });
    }
    a.push(temp);
    return a;
}

function caratterePdf(doc,index){
    if(index == 1)
        doc.setFontType("bold");
    else
        doc.setFontType("normal");

    var size = 20-2.5*index;
    if(size < 10)
        size = 10;
    doc.setFontSize(size);
}

var riga = 2;
function scansioneRicorsivaJson(data, doc, index){
    data.forEach(function(e){
        if(e.children != undefined){
            riga++;
            if (10*riga >= 200){
                doc.addPage();
                riga = 2;
            }
            caratterePdf(doc, index);
            if(index == 1)
                riga++;
            doc.text("[ " + e.valore + " ] " + e.descrizione, 14*index, 10*riga);
            scansioneRicorsivaJson(e.children, doc, index+1);
            console.log(index);
        }
    });
};



class Modale {
    aperta: boolean = false;
    public elemento = new Element();
}

@Component({
    selector: 'app-griglia',
    templateUrl: './griglia.component.html',
    styleUrls: ['./griglia.component.scss'],
    providers:[NomiCognomiPipe, DeweyService]
})
export class GrigliaComponent {

    mdOpen: boolean = false; //apre/chiude la modale dell'export pdf
    sort; // stringa che indica secondo quale cosa si vuole export pdf

    ordinamento_defaul: string = "ordCrescenteAutore";
    titoloFiltrato: string;
    autoreFiltrato: string;
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
    @Input() caricamentoCompletato: boolean;
    @Output() clickDettaglio: EventEmitter<Element> = new EventEmitter();

    selezionati=[]; //elementi selezionati nella griglia

    router: any;
    nomiCognomi: any;
    dewey = [];

    constructor(private _router: Router, private _nomiCognomi:NomiCognomiPipe, private _deweyService: DeweyService) {
        this.router = _router;
        this.nomiCognomi = _nomiCognomi;
        this.dewey = _deweyService.dewey;
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

        //serve per andare a capo e per togliere i <br> che servono nell'html
        for(let el of this.selezionati)
            if(el.autore != undefined)
            el.autore = this.nomiCognomi.transform(el.autore, []).replace(/(<br><br>|<\/br>|<br \/>)/mgi, "\n").slice(0, -2);

        var doc = new jsPDF('l', 'mm', 'a4');
        doc.autoTableSetDefaults({
            theme: 'grid',
            pageBreak: 'always',
            styles: {
                font: 'times',
                fontSize: 11,
                overflow: 'linebreak',
                valign: 'middle',
                lineColor: [128, 167, 186],
                lineWidth: 0.3,
                cellWidth: 'auto'
            },
            columnStyles: {inventario: {cellWidth: '22'}},
            headStyles: {
                    fontSize: 12,
                    fontStyle: 'bold',
                    overflow: 'linebreak',
                    textColor: 255,
                    fillColor: [128, 167, 186],
                    halign: 'left', // left, center, right
                    valign: 'middle', // top, middle, bottom
            },
            alternateRowStyles: {
                    fillColor: [255, 255, 255]
            },
            tableLineColor : [128, 167, 186],
            tableLineWidth: 0.3,
        });


        if(this.sort == 'autore'){

            columns = [
                {header: "Autore/i", dataKey: "autore"},
                {header: "Titolo", dataKey: "titolo"},
                {header: "Collocazione", dataKey: "perEtichette"},
                {header: "Inventario", dataKey: "inventario"}
            ];

            //ordina gli elementi selezionati alfabeticamente rispetto al primo autore
            this.selezionati = this.selezionati.sort(sortAutori);

            //produce un array di array
            this.selezionati = separatorePerPrimoCarattere(this.selezionati,this.sort);

            //crea la tabella
            this.selezionati.forEach(function(e){
                doc.autoTable({columns: columns, body: e});
            });

            //scatena in download
            doc.save("Fondo di documentazione storico locale - 'L Nòst Pais - alfabetico autori.pdf");

        }else if (this.sort == 'luogo'){
            columns = [
            {header: "Luogo", dataKey: "luogo"},
            {header: "Autore/i", dataKey: "autore"},
            {header: "Titolo", dataKey: "titolo"},
            {header: "Collocazione", dataKey: "perEtichette"},
            {header: "Inventario", dataKey: "inventario"}
            ];

            //ordina gli elementi selezionati alfabeticamente per luogo
            this.selezionati = this.selezionati.sort(sortLuogo);

            //produce un array di array
            this.selezionati = separatorePerPrimoCarattere(this.selezionati,this.sort);

            //crea la tabella
            this.selezionati.forEach(function(e){
                doc.autoTable({columns: columns, body: e});
            });

            doc.save("Fondo di documentazione storico locale - 'L Nòst Pais - alfabetico luoghi.pdf");

        }else if(this.sort == 'argomento'){
            columns = [
            {header: "Collocazione", dataKey: "perEtichette"},
            {header: "Autore/i", dataKey: "autore"},
            {header: "Titolo", dataKey: "titolo"},
            {header: "Inventario", dataKey: "inventario"}
            ];

            //pagine introduttive sulla classificazione per argomenti
            doc.text('Elenco degli argomenti', 150, 22, {align: 'center'});
            scansioneRicorsivaJson(this.dewey, doc, 1);


            //ordina in modo crescente i valori delle collocazioni
            this.selezionati = this.selezionati.sort(sortArgomento);

             //produce un array di array
            this.selezionati = separatorePerPrimoCarattere(this.selezionati,this.sort);

             //crea la tabella
            this.selezionati.forEach(function(e){
                doc.autoTable({columns: columns, body: e});
            });

            doc.save("Fondo di documentazione storico locale - 'L Nòst Pais - argomenti.pdf");
        }
    }
}
