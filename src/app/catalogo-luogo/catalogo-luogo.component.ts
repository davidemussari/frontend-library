import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetJsonService } from '../get-json.service';

@Component({
  selector: 'app-catalogo-luogo',
  templateUrl: './catalogo-luogo.component.html',
  styleUrls: ['./catalogo-luogo.component.scss']
})
export class CatalogoLuogoComponent implements OnInit {

	router: any;
    catalogo: any;
    luoghi: Array<string> = [];
    caricamentoCompletato: boolean = false;

  constructor(private _router: Router, private downloadJson: GetJsonService) {
        this.router = _router;

		this.downloadJson.getData("../json/biblioteca_lNostPais.json").subscribe((data) => {
  			this.catalogo = data;
  			for(let elemento of this.catalogo){
            if(elemento.luogo != "" && this.luoghi.indexOf(elemento.luogo) == -1) // if newDog isn't already in the array
                this.luoghi.push(elemento.luogo);
            }
            this.luoghi.sort();
            this.caricamentoCompletato = true;
		});
    }

	ngOnInit() {

	}

	routing = (Luogocliccato) => {
        this.router.navigate(['/catalogoCompleto/'+Luogocliccato]);
	}

}
