import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetJsonService } from '../get-json.service';

@Component({
  selector: 'app-catalogo-completo',
  templateUrl: './catalogo-completo.component.html',
  styleUrls: ['./catalogo-completo.component.scss']
})
export class CatalogoCompletoComponent implements OnInit {

    catalogo: any;

  constructor(private router: Router, private downloadJson: GetJsonService) {

		this.downloadJson.getData("../json/biblioteca_lNostPais.json").subscribe((data) => {
  			this.catalogo = data;
		});
    }

  ngOnInit() {
  }



}
