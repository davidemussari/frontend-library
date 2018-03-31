import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeweyService } from '../dewey.service';


class Element{
    descrizione: string;
    numero: string;
    posizione: number;
    parent: string;
}

function costruttoreBox (arr) {//costruisce come richiesto da html il box con le informazioni bindate
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

function cercaFigli (id, dew){//restituisce i figli di un settore
    var arr = dew[+id[0]].children;
    var descParent = dew[+id[0]].descrizione;
    var valoreParent = dew[+id[0]].valore;
    if(id.indexOf('.') > -1)
        id = id.split('.')[0]+id.split('.')[1];
    if(id.indexOf(' ') > -1)
        id = id.split(' ')[0]+id.split(' ')[1];
    for(let str of id.substr(1,)){
        descParent = arr[+str].descrizione;
        valoreParent = arr[+str].valore;
        if(arr.length ==0){
            arr = [];
            break;
        }
        arr = arr[+str].children;
    }
    return {
        "arr": arr,
        "descParent": descParent,
        "valoreParent": valoreParent};
}


@Component({
    selector: 'app-catalogo-argomento',
    templateUrl: './catalogo-argomento.component.html',
    styleUrls: ['./catalogo-argomento.component.scss'],
    providers: [DeweyService]
})
export class CatalogoArgomentoComponent implements OnInit {

    id: string = '';//nel path per routing
    desc: string = ""; //nel path per routing e per libro breadcroumble
    dewey = [];
    router: any;
    boxVisibili = [];//box di settori visibili nella pagina (per rendering html)
    valoreParent: string = '';//settore scelto precedentemente (stringa vuota se si deve scegliere le centinaia)

    constructor(private paramsRoute: ActivatedRoute, _router: Router, private deweyService: DeweyService) {
        this.router = _router;
        this.dewey = deweyService.dewey;
    }

    ngOnInit() {
        this.paramsRoute.params.subscribe(params => {
            this.boxVisibili=[];
            this.id = params['id'];
            if (this.id == '' || this.id == undefined){//caso in cui si deve scegliere la prima cifra delle centinaia
                this.boxVisibili = costruttoreBox(this.dewey);
            }else{//caso in cui si sia gia' scelta la cifra delle centinaia
                var res = cercaFigli(this.id,this.dewey);
                this.boxVisibili = costruttoreBox(res.arr);
                this.desc = res.descParent;
                this.valoreParent = res.valoreParent;
            }
        });
    }

    routing = (cliccato) => {//funzione chiamata al click del box
       if (cercaFigli(cliccato.parent+cliccato.posizione, this.dewey).arr.length != 0) //caso in cui ci siano dei sottosettori piu' specifici
            this.router.navigate(['/catalogoArgomento/'+cliccato.parent+cliccato.posizione]);
        else //caso in cui non ci sono sottosettori specifici e quindi viene mostrato tutto sulla tabella
            this.router.navigate(['/catalogoCompleto/'+cliccato.numero+'/'+cliccato.descrizione]);
    }
}
