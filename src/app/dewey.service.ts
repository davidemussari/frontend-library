import { Injectable } from '@angular/core';

@Injectable()
export class DeweyService {

    dewey = [];
    constructor() {
        this.dewey = [
        { //0
            "parent": "",
            "descrizione": "Opere generali",
            "valore": "000",
            "children":[
            {//00
            },{//01
                "parent": "0",
                "descrizione": "Bibliografia",
                "valore": "010",
                "children":[
                {//010
                },{//011
                },{//012
                },{//013
                },{//014
                },{//015
                },{//016
                },{//017
                    "parent": "01",
                    "descrizione": "Cataloghi generali",
                    "valore": "017",
                    "children":[]
                },{//018
                },{//019
                }]
            },{//02
                "parent": "0",
                "descrizione": "Biblioteconomia e tecniche della documentazione",
                "valore": "020",
                "children":[]
            },{//03
            },{//04
            },{//05
            },{//06
                "parent": "0",
                "descrizione": "Accademie, istituti culturali, fondazioni, congressi e Museologia",
                "valore": "060",
                "children":[
                {//060
                },{//061
                },{//062
                },{//063
                },{//064
                },{//065
                },{//066
                },{//067
                },{//068
                },{//069
                    "parent": "06",
                    "descrizione": "Museologia",
                    "valore": "069",
                    "children":[]
                }
                ]
            },{//07
                "parent": "0",
                "descrizione": "Giornalismo, media documentari, editoria",
                "valore": "070",
                "children":[
                {//070
                    "parent": "07",
                    "descrizione": "Giornalismo e giornali",
                    "valore": "070",
                    "children":[{//070.9
                        "parent": "070",
                        "descrizione": "Storia e persone del giornalismo e dei giornali",
                        "valore": "070.900",
                        "children":[]
                    }]
                },{//071
                },{//072
                },{//073
                },{//074
                },{//075
                    "parent": "07",
                    "descrizione": "Giornalismo e giornali in Italia e limitrofi",
                    "valore": "075",
                    "children":[]
                },{//076
                },{//077
                },{//078
                },{//079
                }
                ]
            },{//08
            },{//09
                "parent": "0",
                "descrizione": "Manoscritti e libri rari",
                "valore": "090",
                "children":[
                {//090
                },{//091
                },{//092
                },{//093
                },{//094
                    "parent": "09",
                    "descrizione": "Libri a stampa rari",
                    "valore": "094",
                    "children":[]
                },{//095
                },{//096
                },{//097
                },{//098
                },{//099
                }
                ]
            }
            ]
        },{//1
            "parent": "",
            "descrizione": "Filosofia, fenomeni paranormali, psicologia",
            "valore": "100",
            "children":[
            {//10
            },{//11
            },{//12
            },{//13
            },{//14
            },{//15
            },{//16
            },{//17
            },{//18
            },{//19
                "parent": "1",
                "descrizione": "Filosofia occidentale moderna",
                "valore": "190",
                "children":[]
            }]
        },{//2
            "parent": "",
            "descrizione": "Religione",
            "valore": "200",
            "children":[
            {//20
            },{//21
                "parent": "2",
                "descrizione": "Filosofia e teoria della religione",
                "valore": "210",
                "children":[
                {//210
                    "parent": "21",
                    "descrizione": "Filosofia e teoria della religione",
                    "valore": "210",
                    "children":[
                    {//210.1
                        "parent": "210",
                        "descrizione": "Filosofia e teoria della religione",
                        "valore": "210.1",
                        "children":[]
                    },{//210.9
                        "parent": "210",
                        "descrizione": "Storia, geografia e persone della religione",
                        "valore": "210.9",
                        "children":[]
                    }
                    ]
                },{//211
                },{//212
                },{//213
                    "parent": "21",
                    "descrizione": "Creazione",
                    "valore": "213",
                    "children":[]
                },{//214
                },{//215
                },{//216
                },{//217
                },{//218
                },{//219
                }]
            },{//22
            },{//23
            },{//24
                "parent": "2",
                "descrizione": "Teologia morale e devozione cristiana",
                "valore": "240",
                "children":[
                {//240
                },{//241
                },{//242
                    "parent": "24",
                    "descrizione": "Letteratura devota cristiana",
                    "valore": "242",
                    "children":[]
                },{//243
                },{//244
                },{//245
                },{//246
                },{//247
                    "parent": "24",
                    "descrizione": "Arredamento sacro cristiano",
                    "valore": "247",
                    "children":[]
                },{//248
                    "parent": "24",
                    "descrizione": "Esperienza, pratica e vita cristiana",
                    "valore": "248",
                    "children":[]
                },{//249
                }
                ]
            },{//25
                "parent": "2",
                "descrizione": "Chiesa cristiana locale e ordini religiosi cristiani",
                "valore": "250",
                "children":[
                {//250
                },{//251
                },{//252
                },{//253
                },{//254
                    "parent": "25",
                    "descrizione": "Amministrazione della parrocchia",
                    "valore": "254",
                    "children":[]
                },{//255
                },{//256
                },{//257
                },{//258
                },{//259
                }]
            },{//26
                "parent": "2",
                "descrizione": "Teologia sociale ed ecclesiastica cristiana",
                "valore": "260",
                "children":[
                {//260
                },{//261
                },{//262
                },{//263
                    "parent": "26",
                    "descrizione": "Giorni, tempi, luoghi di osservanza religiosa",
                    "valore": "263",
                    "children":[]
                },{//264
                    "parent": "26",
                    "descrizione": "Culto pubblico",
                    "valore": "264",
                    "children":[]
                },{//265
                },{//266
                },{//267
                },{//268
                },{//269
                }]
            },{//27
            },{//28
                "parent": "2",
                "descrizione": "Denominazioni e sette della chiesa cristiana",
                "valore": "280",
                "children":[
                {//280
                    "parent": "28",
                    "descrizione": "Denominazioni e sette della chiesa cristiana",
                    "valore": "280",
                    "children":[]
                },{//281
                },{//282
                    "parent": "28",
                    "descrizione": "Chiesa cattolica in specifici paesi e località",
                    "valore": "282",
                    "children":[]
                 },{//283
                 },{//284
                 },{//285
                 },{//286
                 },{//287
                 },{//288
                 },{//289
                 }]
            },{//29
                "parent": "2",
                "descrizione": "Religione comparata e religioni non cristiane",
                "valore": "290",
                "children":[
                {//290
                    "parent": "29",
                    "descrizione": "Religione comparata e religioni non cristiane",
                    "valore": "290",
                    "children":[]
                },{//291
                },{//292
                },{//293
                },{//294
                },{//295
                },{//296
                },{//297
                },{//298
                },{//299
                    "parent": "29",
                    "descrizione": "Altre religioni",
                    "valore": "299",
                    "children":[]
                }
                ]
            }]
        },{//3
            "parent": "",
            "descrizione": "Scienze sociali",
            "valore": "300",
            "children":[
            {//30
            },{//31
            },{//32
                "parent": "3",
                "descrizione": "Scienza politica",
                "valore": "320",
                "children":[
                {//320
                    "parent": "32",
                    "descrizione": "Scienza politica (Politica e governo)",
                    "valore": "320",
                    "children":[]
                },{//321
                },{//322
                },{//323
                },{//324
                },{//325
                    "parent": "32",
                    "descrizione": "Migrazioni internazionali e colonizzazione",
                    "valore": "325",
                    "children":[]
                }
                ]
            },{//33
                "parent": "3",
                "descrizione": "Economia",
                "valore": "330",
                "children":[
                {//330
                    "parent": "33",
                    "descrizione": "Economia",
                    "valore": "330",
                    "children":[]
                },{//331
                },{//332
                },{//333
                },{//334
                    "parent": "33",
                    "descrizione": "Cooperative",
                    "valore": "334",
                    "children":[]
                },{//335
                },{//336
                },{//337
                },{//338
                    "parent": "33",
                    "descrizione": "Produzione",
                    "valore": "338",
                    "children":[
                    {//338.09
                        "parent": "338",
                        "descrizione": "Storia, geografia, persone della produzione",
                        "valore": "338.09",
                        "children":[]
                    },{//338.4
                        "parent": "338",
                        "descrizione": "Industrie secondarie e servizi",
                        "valore": "338.4",
                        "children":[]
                    }
                    ]
                },{//339
                }]
            },{//34
                "parent": "3",
                "descrizione": "Diritto",
                "valore": "340",
                "children":[]
            },{//35
                "parent": "3",
                "descrizione": "Amministrazione pubblica e scienza militare",
                "valore": "350",
                "children":[
                {//350
                    "parent": "35",
                    "descrizione": "Amministrazione pubblica e scienza militare",
                    "valore": "350",
                    "children":[]
                },{//351
                },{//352
                },{//353
                    "parent": "35",
                    "descrizione": "Specifiche materie di amministrazione pubblica",
                    "valore": "353",
                    "children":[]
                },{//354
                },{//355
                },{//356
                    "parent": "35",
                    "descrizione": "Forze e operazioni a piedi",
                    "valore": "356",
                    "children":[]
                },{//357
                },{//358
                },{//359
                }]
            },{//36
                "parent": "3",
                "descrizione": "Problemi e servizi sociali, associazioni",
                "valore": "360",
                "children":[
                {//360
                    "parent": "36",
                    "descrizione": "Problemi e servizi sociali, associazioni",
                    "valore": "360",
                    "children":[]
                },{//361
                },{//362
                },{//363
                    "parent": "36",
                    "descrizione": "Altri problemi e servizi sociali",
                    "valore": "363",
                    "children":[]
                }
                ]
            },{//37
                "parent": "3",
                "descrizione": "Educazione",
                "valore": "370",
                "children":[
                {//370
                },{//371
                },{//372
                },{//373
                },{//374
                },{//375
                },{//376
                },{//377
                },{//378
                    "parent": "37",
                    "descrizione": "Educazione superiore",
                    "valore": "378",
                    "children":[]
                },{//379
                }]
            },{//38
            },{//39
                "parent": "3",
                "descrizione": "Usi e costumi, galateo, folclore",
                "valore": "390",
                "children":[
                {//390
                    "parent": "39",
                    "descrizione": "Usi e costumi, galateo, folclore",
                    "valore": "390",
                    "children":[
                    {//390.09
                        "parent": "390",
                        "descrizione": "Storia, geografia, persone degli usi e dei costumi",
                        "valore": "390.09",
                        "children":[]
                    },{//390.4
                        "parent": "390",
                        "descrizione": "Usi e costumi secondo la professione",
                        "valore": "390.4",
                        "children":[]
                    }]
                },{//391
                    "parent": "39",
                    "descrizione": "Costume e tenuta personale",
                    "valore": "391",
                    "children":[]
                },{//392
                },{//393
                },{//394
                    "parent": "39",
                    "descrizione": "Usi e costumi generali",
                    "valore": "394",
                    "children":[]
                },{//395
                },{//396
                },{//397
                },{//398
                    "parent": "39",
                    "descrizione": "Folclore",
                    "valore": "398",
                    "children":[
                    {//398.0
                        "parent": "398",
                        "descrizione": "DA RICLASSIFICARE",
                        "valore": "398.0",
                        "children":[]
                    },{//398.1
                    },{//398.2
                    },{//398.3
                    },{//398.4
                        "parent": "398",
                        "descrizione": "Fenomeni paranaturali e leggendari come soggetti di folclore",
                        "valore": "398.4",
                        "children":[]
                    },{//398.5
                    },{//398.6
                    },{//398.7
                    },{//398.8
                    },{//398.9
                        "parent": "398",
                        "descrizione": "Proverbi",
                        "valore": "398.9",
                        "children":[]
                    }]
                },{//399
                }]
            }]
        },{//4
            "parent": "",
            "descrizione": "Linguaggio",
            "valore": "400",
            "children":[
            {//40
            },{//41
            },{//42
            },{//43
            },{//44
            },{//45
                "parent": "4",
                "descrizione": "Italiano, sardo, dalmatico, romeno, lingue ladine",
                "valore": "450",
                "children":[
                {//450
                },{//451
                },{//452
                },{//453
                },{//454
                },{//455
                },{//456
                },{//457
                    "parent": "45",
                    "descrizione": "Italiano. Varianti storiche e geografiche",
                    "valore": "457",
                    "children":[]
                },{//458
                },{//459
                }]
            },{//46
            },{//47
            },{//48
            },{//49
                "parent": "4",
                "descrizione": "Altre lingue",
                "valore": "490",
                "children":[
                {//490
                },{//491
                },{//492
                    "parent": "49",
                    "descrizione": "Lingue afroasiatiche (lingue camitosemitiche), lingue semitiche",
                    "valore": "492",
                    "children":[
                    {"parent": "492",
                        "descrizione": "Ebraico",
                        "valore": "492.4",
                        "children":[]
                    }]
                },{//493
                },{//494
                },{//495
                },{//496
                    "parent": "49",
                    "descrizione": "Lingue africane",
                    "valore": "496",
                    "children":[]
                },{//497
                },{//498
                },{//499
                    "parent": "49",
                    "descrizione": "Lingue varie",
                    "valore": "499",
                    "children":[]
                }]
            }]
        },{//5
            "parent": "",
            "descrizione": "Scienze naturali e matematica",
            "valore": "500",
            "children":[
            {//50
                "parent": "5",
                "descrizione": "Scienze naturali e matematica",
                "valore": "500",
                "children":[]
            },{//51
            },{//52
                "parent": "5",
                "descrizione": "Astronomia e scienze connesse",
                "valore": "520",
                "children":[{//520
                    },{//521
                    },{//522
                    },{//523
                    },{//524
                    },{//525
                    },{//526
                    },{//527
                    },{//528
                    },{//529
                    "parent": "52",
                    "descrizione": "Cronologia",
                    "valore": "529",
                    "children":[]
                }]
            },{//53
            },{//54
            },{//55
                "parent": "5",
                "descrizione": "Scienze della Terra",
                "valore": "550",
                "children":[{//550
                    },{//551
                    "parent": "55",
                    "descrizione": "Geologia, idrologia, meteorologia",
                    "valore": "551",
                    "children":[]
                }]
            },{//56
            },{//57
            },{//58
                "parent": "5",
                "descrizione": "Piante",
                "valore": "580",
                "children":[]
            },{//59
                "parent": "5",
                "descrizione": "Animali",
                "valore": "590",
                "children":[]
            }]
        },{//6
        },{//7
        },{//8
        },{//9
        }];
    }
}
