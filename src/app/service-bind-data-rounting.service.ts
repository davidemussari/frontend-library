import { Injectable, EventEmitter } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ServiceBindDataRountingService {

    stringServizio = new Subject<string>();
    catalog = new Subject<any>();
    public catalogoPronto$: EventEmitter<any>;

    constructor() {
        this.catalogoPronto$ = new EventEmitter();
    }

}
