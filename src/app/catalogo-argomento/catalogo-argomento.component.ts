import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { GetJsonService } from '../get-json.service';

@Component({
	selector: 'app-catalogo-argomento',
	templateUrl: './catalogo-argomento.component.html',
	styleUrls: ['./catalogo-argomento.component.scss'],
	providers: [GetJsonService]
})
export class CatalogoArgomentoComponent implements OnInit {

	dewey: any;
	id: any;
	router: any;

	constructor(private downloadJson: GetJsonService, private paramsRoute: ActivatedRoute, _router: Router) {
        this.router = _router;
	}

	ngOnInit() {
		this.downloadJson.getData("../json/dewej.json").subscribe((data) => {
			this.dewey = data;
		});

		this.paramsRoute.params.subscribe(params => {
            this.id = params['id'];
		});

	}

	routing = (id_clicked) => {
         this.router.navigate(['/catalogoArgomento/'+id_clicked]);
	}

}
