import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-dettagli',
    templateUrl: './dettagli.component.html',
    styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent {

    @Input() elementoCliccato: any;
    @Output() undo: EventEmitter<boolean> = new EventEmitter();

    constructor() { }

    indietro = () =>{
        this.undo.emit();
    }

}
