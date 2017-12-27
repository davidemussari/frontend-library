import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DeweyService } from '../dewey.service';

@Component({
    selector: 'app-dettagli',
    templateUrl: './dettagli.component.html',
    styleUrls: ['./dettagli.component.scss'],
    providers: [DeweyService]
})
export class DettagliComponent {

    dewey: any;

    @Input() elementoCliccato: any;
    @Output() undo: EventEmitter<boolean> = new EventEmitter();

    constructor(private deweyService: DeweyService) {
        this.dewey = deweyService.dewey;
    }

    argomento = (codiceArgomento) =>{
        console.log(codiceArgomento);
        if (typeof codiceArgomento === "string")
            codiceArgomento = codiceArgomento.replace(/ /g, '');
        for (let arg of this.dewey[(Math.floor(+codiceArgomento/10)*10).toString()])
            if (+codiceArgomento == +(arg.numero.replace(/ /g, '')))
                return arg.descrizione;
        return "n.d."
    }

    indietro = () =>{
        this.undo.emit();
    }

}
