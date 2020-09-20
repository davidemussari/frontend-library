import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DeweyService } from '../dewey.service';

import { environment } from '../../environments/environment';

@Component({
    selector: 'app-dettagli',
    templateUrl: './dettagli.component.html',
    styleUrls: ['./dettagli.component.scss'],
    providers: [DeweyService, DatePipe]
})
export class DettagliComponent {

    dettagli = {
        "titolo":{
            "funct": null,
            "etichetta": "Titolo:",
            "visibile": false,
        },
        "sottotitolo":{
            "funct": null,
            "etichetta": "sottotitolo:",
            "visibile": false,
        },
        "autore":{
            "funct": "nomi",
            "etichetta": "Autore/i:",
            "visibile": true,
        },
        "editore":{
            "funct": "nomi",
            "etichetta": "Editore:",
            "visibile": true,
        },
        "rilegatura":{
            "funct": null,
            "etichetta": "Tipo rilegatura:",
            "visibile": true,
        },
        "prezzo":{
            "funct": null,
            "etichetta": "Prezzo:",
            "visibile": true,
        },
        "edizione":{
            "funct": null,
            "etichetta": "Edizione:",
            "visibile": true,
        },
        "copyright":{
            "funct": null,
            "etichetta": "Copyright:",
            "visibile": true,
        },
        "annoPubblicazione":{
            "funct": null,
            "etichetta": "Anno di Stampa:",
            "visibile": true,
        },
        "isbn":{
            "funct": null,
            "etichetta": "ISBN:",
            "visibile": true,
        },
        "lccn":{
            "funct": null,
            "etichetta": "LCCN:",
            "visibile": true,
        },
        "pagine":{
            "funct": null,
            "etichetta": "Pagine totali:",
            "visibile": true,
        },
        "traduttore":{
            "funct": null,
            "etichetta": "Traduttore:",
            "visibile": true,
        },
        "lingua":{
            "funct": null,
            "etichetta": "Lingua:",
            "visibile": true,
        },
        "collana":{
            "funct": null,
            "etichetta": "Collana:",
            "visibile": true,
        },
        "numero":{
            "funct": null,
            "etichetta": "N. nella collana:",
            "visibile": true,
        },
        "condizioni":{
            "funct": null,
            "etichetta": "Condizioni:",
            "visibile": true,
        },
        "autografato":{
            "funct": "trueFalse",
            "etichetta": "Autografato:",
            "visibile": true,
        },
        "donante":{
            "funct": "nomi",
            "etichetta": "Donato da:",
            "visibile": true,
        },
        "prestato":{
            "funct": null,
            "etichetta": "In prestito:",
            "visibile": false,
        },
        "copertina":{
            "funct": null,
            "etichetta": "Copertina:",
            "visibile": false,
        },
        "commenti":{
            "funct": null,
            "etichetta": "Commenti:",
            "visibile": true,
        },
        "inventario":{
            "funct": null,
            "etichetta": "N. di inventario:",
            "visibile": true,
        },
        "luogo":{
            "funct": null,
            "etichetta": "Luogo principale:",
            "visibile": true,
        },
        "collocazione":{
            "funct": null,
            "etichetta": "Collocazione:",
            "visibile": true,
        },
        "codiceArgomento":{
            "funct": "codiceArgomento",
            "etichetta": "Argomento:",
            "visibile": true,
        },
        "Data di creazione":{
            "funct": "data",
            "etichetta": "Data di catalogazione:",
            "visibile": true,
    },
        "Ultima modifica":{
            "funct": "data",
            "etichetta": "Data di ultima modifica:",
            "visibile": true,
        },
        "perEtichette":{
            "funct": null,
            "etichetta": "Etichette:",
            "visibile": false,
        }
    };
    dewey: any;
    arrayKey: Array<any>;
    @Input() elemento: any;
    copertinePath: string = '';
    copertinePathOnError: string = '';

    constructor(private deweyService: DeweyService, private datePipe: DatePipe) {
        this.dewey = deweyService.dewey;
        this.copertinePath = environment.copertinePath;
        this.copertinePathOnError = environment.copertinePathOnError;
    }

    ngOnInit() {}

    onErrorrImg() {
        var e = event.currentTarget as HTMLImageElement;
        e.src = this.copertinePathOnError;
    }

    ngOnChanges() {
        this.arrayKey = [];
        if(this.elemento!=undefined){
            for (let k of Object.keys(this.elemento))
                if (this.elemento[k] != null && this.elemento[k].length != 0 && this.dettagli[k].visibile)
                    this.arrayKey.push(k);
                }
    }

    beautify = (key) => {
        if(this.dettagli[key] !== undefined){
            switch(this.dettagli[key].funct) {
                case "trueFalse": {
                    return this.trueFalse(this.elemento[key]);
                }
                case "nomi": {
                    return this.nomi(this.elemento[key]);
                }
                case "codiceArgomento": {
                    return this.argomento(this.elemento[key]);
                }
                case "data": {
                    return this.data(this.elemento[key]);
                }
            }
            return this.elemento[key];
        }
    }

    trueFalse = (str) => {
        if(str == "true")
            return "Sì";
        else
            return "No";
    }

    nomi = (str) => {
        let stringa = "";
        let autoriArray = str.split(';');
        for (let persona of autoriArray){
            persona = persona.split(',');
            for (let p of persona){
                stringa += p.trim() + " ";
            }
        stringa += ' <br/>';
        }
        return stringa;
    }

    data = (str) => {
        let newDate = new Date(str);
        return this.datePipe.transform(newDate, 'dd-MM-yyyy');;
    }

    argomento = (codiceArgomento) =>{
        var arr = this.dewey[codiceArgomento[0]].children;
        if(arr[codiceArgomento[1]].children.length != 0){
            arr = arr[codiceArgomento[1]].children;
            arr = arr[codiceArgomento[2]];
        }else{
            arr = arr[codiceArgomento[1]];
        }
        if(arr.children.length != 0)
            for(let figlio of arr.children)
                if(figlio.valore != undefined && figlio.valore == codiceArgomento.substr(0,figlio.valore.length))
                    return figlio.descrizione;
        return arr.descrizione;
    }

    etichetta = (key) =>{
        if(this.dettagli[key] !== undefined){
        return this.dettagli[key].etichetta;
        }
    }

}
