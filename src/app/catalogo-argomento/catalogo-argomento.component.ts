import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
	paramCentinaia: any;

	constructor(private downloadJson: GetJsonService, private paramsRoute: ActivatedRoute) {
	}

	ngOnInit() {
		this.downloadJson.getData("../json/dewej.json").subscribe((data) => {
			this.dewey = data;
			console.log(this.dewey);
		});
		
		this.paramsRoute.params.subscribe(params => {
       		this.paramCentinaia = params['centinaia'];
		});
		
	}

}
