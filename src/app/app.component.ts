import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { GetJsonService } from './get-json.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
	providers: [GetJsonService]
})
export class AppComponent {

	showSubNavCatalogo: Boolean = false;
	collapsible: Boolean = true;
	catalogo: any;

    constructor(private router: Router, private downloadJson: GetJsonService) {
		
		this.downloadJson.getData("../json/biblioteca_lNostPais.json").subscribe((data) => {
  			this.catalogo = data;
		});
    }

	


}
