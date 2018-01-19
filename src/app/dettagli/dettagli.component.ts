import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DeweyService } from '../dewey.service';

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
    @Input() elementoCliccato: any;
    @Output() undo: EventEmitter<boolean> = new EventEmitter();

    constructor(private deweyService: DeweyService, private datePipe: DatePipe) {
        this.dewey = deweyService.dewey;
    }

    ngOnInit() {
        this.arrayKey = [];
        for (let k of Object.keys(this.elementoCliccato))
            if (this.elementoCliccato[k].length != 0 && this.dettagli[k].visibile)
                this.arrayKey.push(k);
    }

    beautify = (key) => {
        if(this.dettagli[key] !== undefined){
            switch(this.dettagli[key].funct) {
                case "trueFalse": {
                    return this.trueFalse(this.elementoCliccato[key]);
                }
                case "nomi": {
                    return this.nomi(this.elementoCliccato[key]);
                }
                case "codiceArgomento": {
                    return this.argomento(this.elementoCliccato[key]);
                }
                case "data": {
                    return this.data(this.elementoCliccato[key]);
                }
            }
            return this.elementoCliccato[key];
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
        if (typeof codiceArgomento === "string")
            codiceArgomento = codiceArgomento.replace(/ /g, '');
        for (let arg of this.dewey[(Math.floor(+codiceArgomento/10)*10).toString()])
            if (+codiceArgomento == +(arg.numero.replace(/ /g, '')))
                return arg.descrizione;
        return "n.d."
    }

    etichetta = (key) =>{
        if(this.dettagli[key] !== undefined){
        return this.dettagli[key].etichetta;
        }
    }

    indietro = () =>{
        this.undo.emit();
    }

}
