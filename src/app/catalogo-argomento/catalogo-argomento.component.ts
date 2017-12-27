import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeweyService } from '../dewey.service';

@Component({
	selector: 'app-catalogo-argomento',
	templateUrl: './catalogo-argomento.component.html',
	styleUrls: ['./catalogo-argomento.component.scss'],
	providers: [DeweyService]
})
export class CatalogoArgomentoComponent implements OnInit {

	id: string = '';
	desc: string = "";
    dewey: any;
	router: any;

	constructor(private paramsRoute: ActivatedRoute, _router: Router, private deweyService: DeweyService) {
        this.router = _router;
        this.dewey = deweyService.dewey;
	}

	ngOnInit() {

		this.paramsRoute.params.subscribe(params => {
            this.id = params['id'];
            if ( this.id != '' && this.id != undefined)
                if (+params['id'] % 100 == 0)
                    this.desc = this.dewey['centinaia'][(+params['id']/100).toString()].descrizione;
                else
                    this.desc = this.dewey[(Math.floor(+params['id']/100)*100).toString()][0].descrizione;
		});

	}

	routing = (cliccato) => {
        cliccato.numero = (+cliccato.numero.replace(/\s/g, "")).toString().split(".");
        if (cliccato.numero.length > 1)
            cliccato.numero = cliccato.numero[0] + "." + cliccato.numero[1].replace(/(.{3})/g,"$1 ");//crea la separazione ogni tre cifre dopo il punto
        if(cliccato.numero != this.id && this.dewey[cliccato.numero] != null)
            this.router.navigate(['/catalogoArgomento/'+cliccato.numero]);
        else {
            if(cliccato.numero[0].slice(-1) == "0")
                cliccato.numero = (+cliccato.numero/10).toString();
            this.router.navigate(['/catalogoCompleto/'+cliccato.numero+'/'+cliccato.descrizione]);
        }
	}

}
