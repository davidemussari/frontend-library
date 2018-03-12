import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeweyService } from '../dewey.service';


class Element{
    descrizione: string;
    numero: string;
    posizione: number;
    parent: string;
}

function costruttoreBox (arr) {
    var posizione = 0;
    var res = new Array();
    for(let el of arr){
        if (el.descrizione != undefined){
            var elemento = new Element();
            elemento.descrizione = el.descrizione;
            elemento.numero = el.valore;
            elemento.posizione = posizione;
            elemento.parent = el.parent;
            res.push(elemento);
        }
        posizione++;
    }
    return res;
}

function cercaFigli (id, dew){
    var arr = dew[+id[0]].children;
    var descParent = dew[+id[0]].descrizione;
    for(let str of id.substr(1,)){
        descParent = arr[+str].descrizione;
        arr = arr[+str].children;
    }
    return {"arr": arr, "descParent": descParent};
}



@Component({
	selector: 'app-catalogo-argomento',
	templateUrl: './catalogo-argomento.component.html',
	styleUrls: ['./catalogo-argomento.component.scss'],
	providers: [DeweyService]
})
export class CatalogoArgomentoComponent implements OnInit {

	id: string = '';
	desc: string = "";
    dewey = [];
	router: any;
    boxVisibili = [];

	constructor(private paramsRoute: ActivatedRoute, _router: Router, private deweyService: DeweyService) {
        this.router = _router;
        this.dewey = deweyService.dewey;
	}

	ngOnInit() {
		this.paramsRoute.params.subscribe(params => {
            this.boxVisibili=[];
            this.id = params['id'];
            if (this.id == '' || this.id == undefined){
               this.boxVisibili = costruttoreBox(this.dewey);
            }else{
                var res = cercaFigli(this.id,this.dewey);
                this.boxVisibili = costruttoreBox(res.arr);
                this.desc = res.descParent;
            }



            /*if ( this.id != '' && this.id != undefined)
                if (+params['id'] % 100 == 0)
                    this.desc = this.dewey['centinaia'][(+params['id']/100).toString()].descrizione;
                else if (+params['id'] % 10 == 0){
                    for(let d of this.dewey[(Math.floor(+params['id']/100)*100).toString()]){
                        if(d.numero == params['id'])
                            this.desc = d.descrizione;
                    }
                }else
                    this.desc = this.dewey[(Math.floor(+params['id']/100)*100).toString()][0].descrizione; */
		});
	}

	routing = (cliccato) => {
        //cliccato.numero = (+cliccato.numero.replace(/\s/g, "")).toString().split(".");
        /*if(cliccato.parent == '' || cliccato.parent == undefined)
             this.boxVisibili = costruttoreBox(this.dewey[cliccato.posizione].children);
        else
            this.boxVisibili = costruttoreBox(this.dewey[cliccato.parent].children[cliccato.posizione].children);*/

        if (cercaFigli(cliccato.parent+cliccato.posizione, this.dewey).arr.length != 0)
            this.router.navigate(['/catalogoArgomento/'+cliccato.parent+cliccato.posizione]);
        else
            this.router.navigate(['/catalogoCompleto/'+cliccato.numero+'/'+cliccato.descrizione]);

        //if(this.dewey.children.length)
        /*
        if (cliccato.numero.length > 1)
            cliccato.numero = cliccato.numero[0] + "." + cliccato.numero[1].replace(/(.{3})/g,"$1 ");//crea la separazione ogni tre cifre dopo il punto
        if(cliccato.numero != this.id && this.dewey[cliccato.numero] != null)
            this.router.navigate(['/catalogoArgomento/'+cliccato.numero]);
        else {
            if(cliccato.numero[0].slice(-1) == "0")
                cliccato.numero = (+cliccato.numero/10).toString();
            this.router.navigate(['/catalogoCompleto/'+cliccato.numero+'/'+cliccato.descrizione]);
        }
        */
	}

}
