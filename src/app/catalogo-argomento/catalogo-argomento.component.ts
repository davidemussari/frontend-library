import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-catalogo-argomento',
	templateUrl: './catalogo-argomento.component.html',
	styleUrls: ['./catalogo-argomento.component.scss'],
	providers: []
})
export class CatalogoArgomentoComponent implements OnInit {

	dewey: any = {
	"centinaia":[
		{"numero": "000", "descrizione": "Informatica, scienze dell'informazione, opere generali"},
		{"numero": "100", "descrizione": "Filosofia e discipline connesse"},
		{"numero": "200", "descrizione": "Religione"},
		{"numero": "300", "descrizione": "Scienze sociali"},
		{"numero": "400", "descrizione": "Linguistica"},
		{"numero": "500", "descrizione": "Scienze naturali e matematica"},
		{"numero": "600", "descrizione": "Tecnologia (Scienze applicate)"},
		{"numero": "700", "descrizione": "Arti, belle arti e arti decorative"},
		{"numero": "800", "descrizione": "Letteratura"},
		{"numero": "900", "descrizione": "Geografia, storia e discipline ausiliarie"}
	],
    "000":[
        {"numero": "010", "descrizione": "Bibliografia"},
        {"numero": "020", "descrizione": "biblioteconomia tecniche della documentazione"},
        {"numero": "060", "descrizione": "Accademie, istituti culturali, fondazioni, congressi"},
        {"numero": "070", "descrizione": "Giornalismo, giornali, editoria"},
        {"numero": "090", "descrizione": "Manoscritti e libri rari"}
    ],
    "100":[
        {"numero": "190", "descrizione": "Filosofia occidentale moderna"}
    ],
    "200":[
        {"numero": "210", "descrizione": "Religione naturale"},
        {"numero": "240", "descrizione": "Teologia morale e devozionale cristiana"},
        {"numero": "250", "descrizione": "Chiesa cristiana e comunità. Ordini religiosi cristiani"},
        {"numero": "260", "descrizione": "Culto cristiano"},
        {"numero": "280", "descrizione": "Confessioni e sette della Chiesa cattolica romana"},
        {"numero": "290", "descrizione": "Altre religioni e religioni comparate"}
    ],
    "300":[
        {"numero": "320", "descrizione": "Scienze politiche"},
        {"numero": "330", "descrizione": "Economia"},
        {"numero": "340", "descrizione": "Diritto"},
        {"numero": "350", "descrizione": "Amministrazione pubblica e scienze militari"},
        {"numero": "360", "descrizione": "Assistenza sociale, sicurezza sociale"},
        {"numero": "370", "descrizione": "Educazione"},
        {"numero": "390", "descrizione": "Usi, costumi, folclore"}
    ],
    "400":[
        {"numero": "450", "descrizione": "Lingue italiana, rumena e affini"},
        {"numero": "490", "descrizione": "Altre lingue"}
   ],
    "500":[
        {"numero": "500", "descrizione": "Scienze naturali e matematica"},
        {"numero": "520", "descrizione": "Astronomia e scienze connesse"},
        {"numero": "550", "descrizione": "Scienze della Terra"},
        {"numero": "580", "descrizione": "Scienze botaniche"},
        {"numero": "590", "descrizione": "Scienze zoologiche"}
    ],
    "600":[
        {"numero": "600", "descrizione": "Tecnologia (Scienze applicate)"},
        {"numero": "620", "descrizione": "Ingegneria e attività affini"},
        {"numero": "650", "descrizione": "Affari, tecnica commerciale e industriale"}
    ],
    "700":[
        {"numero": "700", "descrizione": "Arti, belle arti e arti decorative"},
        {"numero": "710", "descrizione": "Urbanistica e arte del paesaggio"},
        {"numero": "720", "descrizione": "Architettura"},
        {"numero": "730", "descrizione": "Arti plastiche, scultura"},
        {"numero": "740", "descrizione": "Disegno, arti decorative e arti minori"},
        {"numero": "750", "descrizione": "Pittura e pitture"},
        {"numero": "760", "descrizione": "Arti grafiche, tecniche di impressione e stampe"},
        {"numero": "770", "descrizione": "Fotografia"},
        {"numero": "780", "descrizione": "Musica"},
        {"numero": "790", "descrizione": "Arti ricreative e dello spettacolo"}
    ],
    "800":[
        {"numero": "820", "descrizione": "Letteratura in lingua inglese e anglosassone"},
        {"numero": "850", "descrizione": "Letterature in lingua italiana, rumena e affini"}
    ],
    "900":[
        {"numero": "900", "descrizione": "Geografia, storia e discipline ausiliarie"},
        {"numero": "910", "descrizione": "Geografia generale, viaggi"},
        {"numero": "920", "descrizione": "Biografie generali, genealogia, araldica"},
        {"numero": "930", "descrizione": "Storia generale del mondo antico"},
        {"numero": "940", "descrizione": "Storia generale dell'Europa"}
    ],
    "010":[
		{"numero": "017", "descrizione": "Cataloghi per materia"}
    ],
    "060":[
		{"numero": "069", "descrizione": "Museologia"}
	],
	"070":[
		{"numero": "070.900", "descrizione": "Storia e persone relative al giornalismo e ai giornali"},
		{"numero": "075.120", "descrizione": "Giornalismo e giornali. Torino (provincia)"}
	],
    "090":[
		{"numero": "094.400", "descrizione": "Libri a stampa. Edizioni speciali"}
    ],
	"210":[
		{"numero": "210.100", "descrizione": "Teoria dela filosofia della religione"},
		{"numero": "210.900", "descrizione": "Filosofia e teoria della religione. Storia, geografia, persone"},
		{"numero": "210.920", "descrizione": "Filosofia e teoria della religione. Persone"},
		{"numero": "213", "descrizione": "Creazione"}
	],
	"240":[
		{"numero": "242", "descrizione": "Preghiere, meditazioni"},
		{"numero": "247", "descrizione": "Arredi sacri"},
		{"numero": "248", "descrizione": "Religione personale"},
		{"numero": "248.463", "descrizione": "Vita cristiana. Pellegrinaggi"}
    ],
	"250":[
		{"numero": "254", "descrizione": "Amministrazione parrocchiale"}
    ],
	"260":[
		{"numero": "263", "descrizione": "Giorni, tempi, luoghi dell'osservanza religiosa"},
		{"numero": "264", "descrizione": "Liturgia"}
    ],
    "280":[
		{"numero": "280.092 200", "descrizione": "Confessioni e sette. Gruppi di persone"},
		{"numero": "282.451 200", "descrizione": "Storia della Chiesa cattolica. Piemonte. Torino (provincia)"}
    ],
	"290":[
		{"numero": "299", "descrizione": "Altre religioni"}
    ],
	"320":[
		{"numero": "320.509 040", "descrizione": "Teorie e ideologie politiche. Trattamento storico e geografico"},
		{"numero": "325", "descrizione": "Emigrazione, immigrazione, colonizzazione"}
    ],
	"330":[
		{"numero": "330.945 120", "descrizione": "Situazioni e condizioni economiche. Torino (provincia)"},
		{"numero": "334.683 094 500", "descrizione": "Cooperative di produzione. Agricoltura. Italia"},
		{"numero": "338.094 512", "descrizione": "Produzione. Torino (provincia)"},
		{"numero": "338.409 450", "descrizione": "Industrie secondarie e servizi. Italia"}
    ],
	"370":[
		{"numero": "378.100", "descrizione": "Educazione superiore. Organizzazione e attività"}
    ],
	"390":[
		{"numero": "390.094 510", "descrizione": "Usi e costumi del Piemonte"},
		{"numero": "390.463", "descrizione": "Usi e costumi di persone di vari mestieri e occupazioni"},
		{"numero": "391", "descrizione": "Abbigliamento e aspetto personale"},
		{"numero": "394.200", "descrizione": "Usi e costumi generali. Occasioni speciali"},
		{"numero": "398.050", "descrizione": "Folclore. Pubblicazioni in serie"},
		{"numero": "398.094 510", "descrizione": "Folclore. Piemonte"},
		{"numero": "398.410 945", "descrizione": "Fenomeni paranaturali e leggendari come soggetti di folclore. Credenze popolari. Italia"},
		{"numero": "398.900", "descrizione": "Proverbi"}
    ],
	"450":[
		{"numero": "457.100", "descrizione": "Dialetto piemontese"}
    ],
	"490":[
		{"numero": "492.400", "descrizione": "Lingue afroasiatiche (lingue camitosemitiche) lingue semitiche. Ebraico"},
		{"numero": "496", "descrizione": "Lingue africane"},
		{"numero": "499.940", "descrizione": "Lingua etrusca"}
    ],
	"520":[
		{"numero": "529.780", "descrizione": "Cronometria. Strumenti di misurazione del tempo"}
    ],
	"550":[
		{"numero": "551", "descrizione": "Geologia, meteorologia, idrologia"}
    ],
	"650":[
		{"numero": "652.300", "descrizione": "Processi della comunicazione scritta. digitazione"},
		{"numero": "653", "descrizione": "Stenografia"}
    ],
	"710":[
		{"numero": "719", "descrizione": "Tutela del paesaggio"}
    ],
	"720":[
		{"numero": "720.944", "descrizione": "Francia e Monaco"},
		{"numero": "720.945 121", "descrizione": "Piemonte. Torino"},
		{"numero": "720.945 122", "descrizione": "Piemonte. Torino (provincia)"},
		{"numero": "720.945 130", "descrizione": "Piemonte. Cuneo (provincia)"},
		{"numero": "720.945 160", "descrizione": "Piemonte. Novara (provincia)"},
		{"numero": "720.945 200", "descrizione": "Lombardia"},
		{"numero": "726.409 451", "descrizione": "Architettura di strutture di culto accessorie"},
		{"numero": "726.509 451 200", "descrizione": "Architettura delle chiese cristiane. Torino (provincia)"},
		{"numero": "726.509 451 300", "descrizione": "Architettura delle chiese cristiane. Cuneo (provincia)"},
		{"numero": "726.509 451 500", "descrizione": "Architettura delle chiese cristiane. Asti (provincia)"},
		{"numero": "728.609 451 600", "descrizione": "Architettura di case di campagna. Italia nord-occidentale. Piemonte"},
		{"numero": "728.809 451 200", "descrizione": "Architettura di residenze private grandi e lussuose. Torino (provincia)"},
		{"numero": "728.809 451 210", "descrizione": "Architettura di residenze private grandi e lussuose. Torino"},
		{"numero": "728.810 945 120", "descrizione": "Architettura di castelli. Torino (provincia)"},
		{"numero": "728.820 945 121", "descrizione": "Architettura di palazzi. Torino"}
    ],
	"730":[
		{"numero": "735", "descrizione": "Scultura del rinascimento e moderna"}
    ],
	"740":[
		{"numero": "741", "descrizione": "Disegni"},
		{"numero": "741.670", "descrizione": "Illustrazione pubblicitaria"},
		{"numero": "741.682", "descrizione": "Progettazione grafica, illustrazione, arte commerciale. Calendari"},
		{"numero": "746.720 955", "descrizione": "Coperte e tappeti intessuti. Iran"},
		{"numero": "747.888 094 500", "descrizione": "Decorazione di specifici tipi di edifici di abitazione. Dimore private grandi e signorili"}
    ],
	"750":[
		{"numero": "750.740", "descrizione": "PITTURA. Musei, collezioni, esposizioni"},
		{"numero": "755.200", "descrizione": "Pittura di soggetti religiosi e simbolismo religioso. Cristianità"},
		{"numero": "755.209 450", "descrizione": "Pittura di soggetti religiosi e simbolismo religioso. Cristianità. Italia"},
		{"numero": "755.209 451 201 500", "descrizione": "Pittura di soggetti religiosi e simbolismo religioso. Cristianità. Torino (provincia)"},
		{"numero": "758.800", "descrizione": "Pittura. Altri soggetti"},
		{"numero": "758.900", "descrizione": "Collezioni di pittura"},
		{"numero": "759.500", "descrizione": "Pittura italiana"},
		{"numero": "759.507 400", "descrizione": "Pittura. Italia. Musei, collezioni, esposizioni"},
		{"numero": "759.510", "descrizione": "Pittura. Piemonte"},
		{"numero": "759.512", "descrizione": "Pittura. Torino (provincia)"}
    ],
	"770":[
		{"numero": "770.900", "descrizione": "Fotografia. Trattamento storico e geografico"},
		{"numero": "770.945", "descrizione": "Fotografia. Italia"},
		{"numero": "770.945 100", "descrizione": "Fotografia. Piemonte"}
    ],
	"780":[
		{"numero": "784.094 512", "descrizione": "Strumenti, complessi strumentali e loro musica. Torino"},
		{"numero": "784.494 512", "descrizione": "Canti folcloristici. Torino (provincia)"},
		{"numero": "785.067", "descrizione": "Complessi strumentali. Bande"},
		{"numero": "786.500", "descrizione": "Strumenti a tastiera aerofoni. Organi"}
    ],
    "790":[
		{"numero": "791.094 512", "descrizione": "Spettacoli pubblici. Torino (provincia)"},
		{"numero": "791.430 233 090", "descrizione": "Cinema. Direzione. Trattamento storico e geografico"},
		{"numero": "792.022 209 450", "descrizione": "Teatro di dilettanti. Italia"},
		{"numero": "793.730", "descrizione": "Giochi sedentari. Rompicapo e giochi di pazienza"},
		{"numero": "796.030", "descrizione": "Sport e giochi atletici e all'aperto"},
		{"numero": "796.042", "descrizione": "Sport dilettantistici"},
		{"numero": "796.060 450", "descrizione": "Sport e giochi atletici e all'aperto. Organizzazioni. Italia"},
		{"numero": "796.522", "descrizione": "Passeggiate ed esplorazioni in montagne, colline, rocce"},
		{"numero": "796.522 090", "descrizione": "Passeggiate ed esplorazioni in montagne, colline, rocce. Trattamento storico e geografico"},
		{"numero": "796.522 092", "descrizione": "Passeggiate ed esplorazioni in montagne, colline, rocce. Persone"},
		{"numero": "796.609 200", "descrizione": "Ciclismo. Persone"}
    ],
    "850":[
		{"numero": "851.910 809 451", "descrizione": "Poesia italiana. XX secolo. Raccolte. Scrittori piemontesi"},
		{"numero": "851.914 080 945 100", "descrizione": "Poesia italiana. Dal 1945. Raccolte. Scrittori piemontesi"},
		{"numero": "852", "descrizione": "Letteratura drammatica italiana"},
		{"numero": "853.910", "descrizione": "Narrativa italiana. XX secolo"},
		{"numero": "853.920", "descrizione": "Narrativa italiana. XXI secolo"}
    ],
	"910":[
		{"numero": "910.200", "descrizione": "Guide turistiche"},
		{"numero": "910.800", "descrizione": "Geografia e viaggi. Il soggetto riferito a gruppi di persone"},
		{"numero": "912", "descrizione": "Rappresentazioni grafiche della superficie terrestre e dei mondi extraterrestri"},
		{"numero": "912.094 500", "descrizione": "Carte geografiche e cartografia. Italia"},
		{"numero": "913", "descrizione": "Archeologia, preistoria"},
		{"numero": "914", "descrizione": "Geografia. Europa."},
		{"numero": "914.500 140", "descrizione": "Geografia. Italia. Linguaggio e comunicazione"},
		{"numero": "914.510 050", "descrizione": "Geografia. Piemonte. Pubblicazioni in serie"},
		{"numero": "914.511", "descrizione": "Geografia. Val D'Aosta"},
		{"numero": "914.512", "descrizione": "Geografia. Torino (provincia)"},
		{"numero": "914.513", "descrizione": "Geografia. Cuneo (provincia)"},
		{"numero": "915", "descrizione": "geografia e viaggi. Asia, Oriente, estremo Oriente"},
		{"numero": "916", "descrizione": "Geografia. Africa"},
		{"numero": "919", "descrizione": "Geografia. Altre parti del mondo"}
    ],
	"920":[
		{"numero": "929.400", "descrizione": "Nomi di persona"},
		{"numero": "929.900", "descrizione": "Bandiere"}
    ],
	"930":[
		{"numero": "930.100", "descrizione": "Archeologia"},
		{"numero": "930.105", "descrizione": "Archeologia. Pubblicazioni in serie"}
    ],
	"940":[
		{"numero": "940.200", "descrizione": "Storia. Europa. Dal 1453"},
		{"numero": "940.530 920", "descrizione": "Storia generale dell'europa. Seconda guerra mondiale. Dal 1939 al 1945. Persone"},
		{"numero": "945.050", "descrizione": "Storia d'Italia. Rinascimento. Dal 1330 al 1494"},
		{"numero": "945.060", "descrizione": "Storia d'Italia. Dal 1494 al 1796"},
		{"numero": "945.073", "descrizione": "Storia d'Italia. Dal 1600 al 1700"},
		{"numero": "945.080", "descrizione": "Storia d'Italia. Dal 1796 al 1870"},
		{"numero": "945.083 400", "descrizione": "Storia d'Italia. Periodo Cavouriano. Dal 1849 al 1861"},
		{"numero": "945.090 920", "descrizione": "Storia d'Italia. Dal 1900. Persone"},
		{"numero": "945.091", "descrizione": "Storia d'Italia. Periodo della prima guerra mondiale. Dal 1914 al 1918"},
		{"numero": "945.091 509 200", "descrizione": "Storia d'Italia. Periodo fascista. Dal 1922 al 1943. Persone"},
		{"numero": "945.093", "descrizione": "Storia d'Italia. Dal 2000"},
		{"numero": "945.100", "descrizione": "Storia dell'Italia nord-occidentale. Piemonte"},
		{"numero": "945.100 500", "descrizione": "Storia dell'Italia nord-occidentale. Piemonte. Pubblicazioni in serie"},
		{"numero": "945.100 992", "descrizione": "Storia dell'Italia nord-occidentale. Piemonte. Gruppi di persone"},
		{"numero": "945.107 400", "descrizione": "Storia del Piemonte. Dal 1730 al 1796"},
		{"numero": "945.108 309 200", "descrizione": "Storia del Piemonte. Periodo risorgimentale. Dal 1815 al 1861. Persone"},
		{"numero": "945.120 150", "descrizione": "Storia. Torino (provincia)"}
    ]
};
	id: string;
	router: any;

	constructor(private paramsRoute: ActivatedRoute, _router: Router) {
        this.router = _router;
	}

	ngOnInit() {
		this.paramsRoute.params.subscribe(params => {
            this.id = params['id'];
		});

	}

	routing = (cliccato) => {
        cliccato.numero = (+cliccato.numero).toString();
        cliccato.numero = (+cliccato.numero.replace(/\s/g, "")).toString().split(".");
        if (cliccato.numero.length > 1)
            cliccato.numero = cliccato.numero[0] + "." + cliccato.numero[1].replace(/(.{3})/g,"$1 ");
        if(cliccato.numero != this.id && this.dewey[cliccato.numero] != null)
            this.router.navigate(['/catalogoArgomento/'+cliccato.numero]);
        else {
            if(cliccato.numero[0].slice(-1) == "0")
                cliccato.numero = (+cliccato.numero/10).toString();
            this.router.navigate(['/catalogoCompleto/'+cliccato.numero+'/'+cliccato.descrizione]);
        }
	}

}