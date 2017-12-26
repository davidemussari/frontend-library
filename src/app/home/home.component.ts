import { Component, Input } from "@angular/core";
import { GetJsonService } from '../get-json.service';
import { ServiceBindDataRountingService } from '../service-bind-data-rounting.service';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
    providers: [GetJsonService]
})
export class HomeComponent {

    nLibri: number = 0;
    nBrochure: number = 0;
    nDigitale: number = 0;
    nVHS: number = 0;
    nRivistePeriodici: number = 0;
    nCalendari: number = 0;

    @Input() testHome: any;
    @Input() catalogo: any;


    constructor(private downloadJson: GetJsonService, private serviceBindDataRountingService: ServiceBindDataRountingService) {
  }




/*
    calcoloDistribuzione(){
        for(let el of this.catalogo){
            if(el.rilegatura == "Periodico" || el.rilegatura == "Rivista")
                this.nRivistePeriodici +=1;
            else if(el.rilegatura == "Brochure")
                this.nBrochure +=1;
            else if(el.rilegatura == "Calendario")
                this.nCalendari +=1;
            else if(el.rilegatura == "Supporto Digitale")
                this.nDigitale +=1;
            else if(el.rilegatura == "VHS")
                this.nVHS +=1;
            else
                this.nLibri +=1;
        }
    }

    TracciaGraficoDistribuzione(){
    }
*/
}
