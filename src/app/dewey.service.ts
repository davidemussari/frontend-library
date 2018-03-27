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
                    "children":[{//398.0
                    },{//398.1
                    },{//398.2
                    },{//398.3
                    },{//398.4
                        "parent": "398",
                        "descrizione": "Fenomeni paranaturali e leggendari come soggetti di folclore e credenze popolari",
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
            "parent": "",
            "descrizione": "Tecnologia (Scienze applicate)",
            "valore": "600",
            "children":[{//60
            },{//61
            },{//62
                "parent": "6",
                "descrizione": "Ingegneria e attività affini",
                "valore": "620",
                "children":[]
            },{//63
            },{//64
            },{//65
                "parent": "6",
                "descrizione": "Gestione e servizi ausiliari",
                "valore": "650",
                "children":[
                {//650
                },{//651
                },{//652
                    "parent": "65",
                    "descrizione": "Processi della comunicazione scritta",
                    "valore": "652",
                    "children":[
                    {//652.0
                    },{//652.1
                    },{//652.2
                    },{//652.3
                        "parent": "652",
                        "descrizione": "Dattilografia",
                        "valore": "652.300",
                        "children":[]
                    }]
                },{//653
                    "parent": "65",
                    "descrizione": "Stenografia",
                    "valore": "653",
                    "children":[]
                }]
            }]
        },{//7
            "parent": "",
            "descrizione": "Le arti. Belle arti e arti decorative",
            "valore": "700",
            "children":[{//70
                "parent": "7",
                "descrizione": "Belle arti e arti decorative",
                "valore": "700",
                "children":[]
            },{//71
                "parent": "7",
                "descrizione": "Urbanistica e paesaggistica",
                "valore": "710",
                "children":[{//710
                    "parent": "71",
                    "descrizione": "Urbanistica e paesaggistica",
                    "valore": "710",
                    "children":[]
                },{//711
                },{//712
                },{//713
                },{//714
                },{//715
                },{//716
                },{//717
                },{//718
                },{//719
                    "parent": "71",
                    "descrizione": "Paesaggi e ambienti naturali",
                    "valore": "719",
                    "children":[]
                }]
            },{//72
                "parent": "7",
                "descrizione": "Architettura",
                "valore": "720",
                "children":[{//720
                    "parent": "72",
                    "descrizione": "Architettura",
                    "valore": "720",
                    "children":[{//720.0
                    },{//720.1
                    },{//720.2
                    },{//720.3
                    },{//720.4
                    },{//720.5
                    },{//720.6
                    },{//720.7
                    },{//720.8
                    },{//720.9
                        "parent": "720",
                        "descrizione": "Storia, geografia, persone",
                        "valore": "720.900",
                        "children":[{//720.90
                        },{//720.91
                        },{//720.92
                        },{//720.93
                        },{//720.94
                            "parent": "720.9",
                            "descrizione": "Storia dell'architettura",
                            "valore": "720.94",
                            "children":[{//720.944
                            },{//720.941
                            },{//720.942
                            },{//720.943
                            },{//720.944
                                "parent": "720.94",
                                "descrizione": "Architettura. Francia e principato di Monaco",
                                "valore": "720.944",
                                "children":[]
                            },{//720.945
                                "parent": "720.94",
                                "descrizione": "Architettura. Italia",
                                "valore": "720.945",
                                "children":[{//720.945 0
                                },{//720.945 1
                                    "parent": "720.945",
                                    "descrizione": "Architettura. Piemonte",
                                    "valore": "720.945 100",
                                    "children":[{//720.945 10
                                    },{//720.945 11
                                    },{//720.945 12
                                        "parent": "720.945 1",
                                        "descrizione": "Architettura. Torino e provincia",
                                        "valore": "720.945 120",
                                        "children":[]
                                    },{//720.945 13
                                        "parent": "720.945 1",
                                        "descrizione": "Architettura. Cuneo e provincia",
                                        "valore": "720.945 130",
                                        "children":[]
                                    },{//720.945 14
                                    },{//720.945 15
                                    },{//720.945 16
                                        "parent": "720.945 1",
                                        "descrizione": "Architettura. Novara e provincia",
                                        "valore": "720.945 160",
                                        "children":[]
                                    }]
                                },{//720.945 2
                                    "parent": "720.945",
                                    "descrizione": "Architettura. Lombardia",
                                    "valore": "720.945 200",
                                    "children":[]
                                }]
                            }]
                        },]
                    }]
                },{//721
                },{//722
                },{//723
                },{//724
                },{//725
                },{//726
                    "parent": "72",
                    "descrizione": "Edifici per usi religiosi e connessi alla religione",
                    "valore": "726",
                    "children":[{//726.0
                    },{//726.1
                    },{//726.2
                    },{//726.3
                    },{//726.4
                        "parent": "726",
                        "descrizione": "Strutture di culto accessorie",
                        "valore": "726.4",
                        "children":[{//726.40
                            "parent": "726.4",
                            "descrizione": "Strutture di culto accessorie. Piemonte",
                            "valore": "726.409 451",
                            "children":[]
                        }]
                    },{//726.5
                        "parent": "726",
                        "descrizione": "Edifici connessi al cristianesimo",
                        "valore": "726.5",
                        "children":[{//726.50
                            "parent": "726.5",
                            "descrizione": "Edifici connessi al cristianesimo. Torino e provincia",
                            "valore": "726.509 451 200",
                            "children":[]
                        },{//726.50
                            "parent": "726.5",
                            "descrizione": "Edifici connessi al cristianesimo. Cuneo e provincia",
                            "valore": "726.509 451 300",
                            "children":[]
                        },{//726.50
                            "parent": "726.5",
                            "descrizione": "Edifici connessi al cristianesimo. Asti e provincia",
                            "valore": "726.509 451 500",
                            "children":[]
                        }]
                    }]
                },{//727
                },{//728
                    "parent": "72",
                    "descrizione": "Edifici residenziali e affini",
                    "valore": "728",
                    "children":[{//728.0
                    },{//728.1
                    },{//728.2
                    },{//728.3
                    },{//728.4
                    },{//728.5
                    },{//728.6
                        "parent": "728",
                        "descrizione": "Case di campagna",
                        "valore": "728.600",
                        "children":[]
                    },{//728.7
                    },{//728.8
                        "parent": "728",
                        "descrizione": "Dimore private grandi e signorili",
                        "valore": "728.800",
                        "children":[]
                    },{//728.9
                    }]
                },{//729
                }]
            },{//73
                "parent": "7",
                "descrizione": "Arti plastiche. Scultura",
                "valore": "730",
                "children":[{//730
                },{//731
                },{//732
                },{//733
                },{//734
                },{//735
                    "parent": "73",
                    "descrizione": "Scultura dopo il 1400",
                    "valore": "735",
                    "children":[]
                }]
            },{//74
                "parent": "7",
                "descrizione": "Disegno e arti decorative",
                "valore": "740",
                "children":[{//740
                    "parent": "74",
                    "descrizione": "Disegno e arti decorative",
                    "valore": "740",
                    "children":[]
                },{//741
                    "parent": "74",
                    "descrizione": "Disegno e disegni",
                    "valore": "741",
                    "children":[{//741.0
                    },{//741.1
                    },{//741.2
                    },{//741.3
                    },{//741.4
                    },{//741.5
                    },{//741.6
                        "parent": "741",
                        "descrizione": "Progettazione grafica, illustrazione, arte commerciale",
                        "valore": "741.600",
                        "children":[{//741.60
                        },{//741.61
                        },{//741.62
                        },{//741.63
                        },{//741.64
                        },{//741.65
                        },{//741.66
                        },{//741.67
                            "parent": "741.6",
                            "descrizione": "Annunzi pubblicitari e manifesti",
                            "valore": "741.670",
                            "children":[]
                        },{//741.68
                            "parent": "741.6",
                            "descrizione": "Calendari, cartoline illustrate, biglietti d'auguri e di visita",
                            "valore": "741.680",
                            "children":[{
                                "parent": "741.68",
                                "descrizione": "Calendari",
                                "valore": "741.682",
                                "children":[]
                            }]
                        }]
                    }]
                },{//742
                },{//743
                },{//744
                },{//745
                },{//746
                    "parent": "74",
                    "descrizione": "Arti tessili",
                    "valore": "746",
                    "children":[{//746.0
                    },{//746.1
                    },{//746.2
                    },{//746.3
                    },{//746.4
                    },{//746.5
                    },{//746.6
                    },{//746.7
                        "parent": "746",
                        "descrizione": "Tappeti",
                        "valore": "746.700",
                        "children":[{
                            "parent": "746.7",
                            "descrizione": "Tappeti tessuti",
                            "valore": "746.720",
                            "children":[]
                        }]
                    }]
                },{//747
                    "parent": "74",
                    "descrizione": "Decorazioni d'interni",
                    "valore": "747",
                    "children":[{//747.0
                    },{//747.1
                    },{//747.2
                    },{//747.3
                    },{//747.4
                    },{//747.5
                    },{//747.6
                    },{//747.7
                    },{//747.8
                        "parent": "747",
                        "descrizione": "Decorazioni di specifici tipi di edificio",
                        "valore": "747.800",
                        "children":[{//747.80
                        },{//747.81
                        },{//747.82
                        },{//747.83
                        },{//747.84
                        },{//747.85
                        },{//747.86
                        },{//747.87
                        },{//747.88
                            "parent": "747.8",
                            "descrizione": "Decorazioni di specifici tipi di edificio. Residenziale",
                            "valore": "747.880",
                            "children":[]
                        },{//747.89
                        }]
                    },{//747.9
                    }]
                }]
            },{//75
                "parent": "7",
                "descrizione": "Pittura",
                "valore": "750",
                "children":[{//750
                },{//751
                },{//752
                },{//753
                },{//754
                },{//755
                    "parent": "75",
                    "descrizione": "Pittura. Soggetti religiosi",
                    "valore": "755",
                    "children":[]
                },{//756
                },{//757
                },{//758
                    "parent": "75",
                    "descrizione": "Pittura. Altri soggetti",
                    "valore": "758",
                    "children":[]
                },{//759
                    "parent": "75",
                    "descrizione": "Pittura. Storia, geografia, persone",
                    "valore": "759",
                    "children":[{//759.0
                    },{//759.1
                    },{//759.2
                    },{//759.3
                    },{//759.4
                    },{//759.5
                        "parent": "75",
                        "descrizione": "Pittura. Altri soggetti. Italia",
                        "valore": "759.500",
                        "children":[]
                    }]
                }]
            },{//76
                "parent": "7",
                "descrizione": "Grafica. Incisione e stampa",
                "valore": "760",
                "children":[]
            },{//77
                "parent": "7",
                "descrizione": "Fotografia",
                "valore": "770",
                "children":[]
            },{//78
                "parent": "7",
                "descrizione": "Musica",
                "valore": "780",
                "children":[{//780
                },{//781
                },{//782
                },{//783
                },{//784
                    "parent": "78",
                    "descrizione": "Strumenti, complessi musicali e la loro musica",
                    "valore": "784",
                    "children":[]
                },{//785
                },{//786
                    "parent": "78",
                    "descrizione": "Strumenti a tastiera, meccanici, elettrofoni, a percussione",
                    "valore": "786",
                    "children":[{
                        "parent": "786",
                        "descrizione": "Strumenti meccanici ed eolici",
                        "valore": "786.600",
                        "children":[]
                    }]
                },{//787
                },{//788
                },{//789
                }]
            },{//79
                "parent": "7",
                "descrizione": "Divertimenti, spettacoli, giochi, sport",
                "valore": "790",
                "children":[{//790
                },{//791
                    "parent": "79",
                    "descrizione": "Spettacoli pubblici",
                    "valore": "791",
                    "children":[{//791.0
                        "parent": "791.4",
                        "descrizione": "Spettacoli pubblici",
                        "valore": "791.000",
                        "children":[]
                    },{//791.1
                    },{//791.2
                    },{//791.3
                    },{//791.4
                        "parent": "791",
                        "descrizione": "Cinema, radio, televisione",
                        "valore": "791.400",
                        "children":[{
                            "parent": "791.4",
                            "descrizione": "Cinema",
                            "valore": "791.430",
                            "children":[]
                        }]
                    }]
                },{//792
                    "parent": "79",
                    "descrizione": "Rappresentazioni sceniche",
                    "valore": "792",
                    "children":[{
                        "parent": "792",
                        "descrizione": "Teatro filodrammatico",
                        "valore": "792.022 200",
                        "children":[]
                    }]
                },{//793
                    "parent": "79",
                    "descrizione": "Giochi e divertimenti al chiuso",
                    "valore": "793",
                    "children":[{//793.0
                    },{//793.1
                    },{//793.2
                    },{//793.3
                    },{//793.4
                    },{//793.5
                    },{//793.6
                    },{//793.7
                        "parent": "793",
                        "descrizione": "Giochi senza azione",
                        "valore": "793.700",
                        "children":[{
                            "parent": "793.7",
                            "descrizione": "Giochi di pazienza, rompicapi, indovinelli",
                            "valore": "793.730",
                            "children":[]
                        }]
                    },{//793.8
                    },{//793.9

                    }]
                },{//794
                },{//795
                },{//796
                    "parent": "79",
                    "descrizione": "Sport e giochi atletici e all'aperto",
                    "valore": "796",
                    "children":[{//796.0
                        "parent": "796",
                        "descrizione": "Sport",
                        "valore": "796.000",
                        "children":[{//796.00
                        },{//796.01
                        },{//796.02
                        },{//796.03
                        },{//796.04
                            "parent": "796.0",
                            "descrizione": "Sport e giochi atletici e all'aperto",
                            "valore": "796.040",
                            "children":[{//796.040
                            },{//796.041
                            },{//796.042
                                "parent": "796.04",
                                "descrizione": "Sport dilettantistici",
                                "valore": "796.042",
                                "children":[]
                            }]
                        },{//796.05
                        },{//796.06
                            "parent": "796.0",
                            "descrizione": "Sport. Organizzazioni, impianti, gestione",
                            "valore": "796.060",
                            "children":[]
                        }]
                    },{//796.1
                    },{//796.2
                    },{//796.3
                    },{//796.4
                    },{//796.5
                        "parent": "796",
                        "descrizione": "Vita all'aperto",
                        "valore": "796.500",
                        "children":[{//796.50
                        },{//796.51
                        },{//796.52
                            "parent": "796.5",
                            "descrizione": "Camminata ed esplorazione secondo il tipo di terreno",
                            "valore": "796.500",
                            "children":[{//796.520
                            },{//796.521
                            },{//796.522
                                "parent": "796.52",
                                "descrizione": "Camminata in montagna e collina e roccia",
                                "valore": "796.522",
                                "children":[]
                            }]
                        }]
                    },{//796.06
                        "parent": "796",
                        "descrizione": "Ciclismo e attività affini",
                        "valore": "796.600",
                        "children":[]
                    }]
                },{//797
                },{//798
                },{//799
                }]
            }]
        },{//8
            "parent": "",
            "descrizione": "Letteratura (Belle lettere) e retorica",
            "valore": "800",
            "children":[{//80
                "parent": "8",
                "descrizione": "Letteratura (Belle lettere) e retorica",
                "valore": "800",
                "children":[]
            },{//81
            },{//82
                "parent": "8",
                "descrizione": "Letteratura inglese e in antico inglese",
                "valore": "820",
                "children":[{//820
                },{//821
                    "parent": "82",
                    "descrizione": "Poesia inglese",
                    "valore": "821",
                    "children":[]
                }]
            },{//83
            },{//84
            },{//85
                "parent": "8",
                "descrizione": "Letteratura italiana",
                "valore": "850",
                "children":[{//850
                },{//851
                    "parent": "85",
                    "descrizione": "Poesia italiana",
                    "valore": "851",
                    "children":[{//851.0
                    },{//851.1
                    },{//851.2
                    },{//851.3
                    },{//851.4
                    },{//851.5
                    },{//851.6
                    },{//851.7
                    },{//851.8
                    },{//851.9
                        "parent": "851",
                        "descrizione": "Letteratura italiana dal 1900 al 1999",
                        "valore": "851.900",
                        "children":[]
                    }]
                },{//852
                    "parent": "85",
                    "descrizione": "Narrativa italiana",
                    "valore": "853",
                    "children":[]
                }]
            }]
        },{//9
            "parent": "",
            "descrizione": "Geografia, storia e discipline ausiliarie",
            "valore": "900",
            "children":[{//90
                "parent": "9",
                "descrizione": "Geografia, storia e discipline ausiliarie",
                "valore": "900",
                "children":[{//900
                },{//901
                },{//902
                },{//903
                },{//904
                },{//905
                },{//906
                },{//907
                },{//908
                },{//909
                    "parent": "90",
                    "descrizione": "Storia mondiale",
                    "valore": "909",
                    "children":[{
                        "parent": "909",
                        "descrizione": "Storia mondiale dal 500 al 1500",
                        "valore": "909.070",
                        "children":[]
                    }]
                }]
            },{//91
                "parent": "9",
                "descrizione": "Geografia e viaggi",
                "valore": "910",
                "children":[{//910
                    "parent": "91",
                    "descrizione": "Geografia e viaggi",
                    "valore": "910",
                    "children":[{//910.0
                    },{//910.1
                    },{//910.2
                        "parent": "91",
                        "descrizione": "Geografia e viaggi. Miscellanea",
                        "valore": "910.200",
                        "children":[]
                    }]
                },{//911
                },{//912
                    "parent": "91",
                    "descrizione": "Rappresentazione grafica della superficie della Terra e dei mondi extraterrestri",
                    "valore": "912",
                    "children":[]
                },{//913
                    "parent": "91",
                    "descrizione": "Archeologia e preistoria",
                    "valore": "913",
                    "children":[]
                },{//914
                    "parent": "91",
                    "descrizione": "Geografia dell'Europa",
                    "valore": "914",
                    "children":[{//914.0
                    },{//914.1
                    },{//914.2
                    },{//914.3
                    },{//914.4
                    },{//914.5
                        "parent": "914",
                        "descrizione": "Geografia. Italia",
                        "valore": "914.500",
                        "children":[{//914.50
                            "parent": "914.5",
                            "descrizione": "Geografia. Italia. Linguaggio e comunicazione",
                            "valore": "914.500 140",
                            "children":[]
                        },{//914.51
                            "parent": "914.5",
                            "descrizione": "Geografia. Italia nord-occidentale",
                            "valore": "914.510",
                            "children":[{//914.510
                                "parent": "914.51",
                                "descrizione": "Geografia. Italia. Piemonte (Generale)",
                                "valore": "914.510",
                                "children":[{//914.510 0
                                    "parent": "914.510",
                                    "descrizione": "Geografia. Italia. Piemonte",
                                    "valore": "914.51",
                                    "children":[]
                                },{
                                    "parent": "914.51",
                                    "descrizione": "Geografia. Italia. Piemonte. Pubblicazioni in serie",
                                    "valore": "914.510 050",
                                    "children":[]
                                }]
                            },{//914.511
                                "parent": "914.51",
                                "descrizione": "Geografia. Italia. Valle d'Aosta",
                                "valore": "914.511",
                                "children":[]
                            },{//914.512
                                "parent": "914.51",
                                "descrizione": "Geografia. Italia. Piemonte. Provincia di Torino",
                                "valore": "914.512",
                                "children":[]
                            },{//914.513
                                "parent": "914.51",
                                "descrizione": "Geografia. Italia. Piemonte. Provincia di Cuneo",
                                "valore": "914.513",
                                "children":[]
                            }]
                        }]
                    },{//914.6
                    },{//914.7
                    },{//914.8
                    },{//914.9
                    }]
                },{//915
                    "parent": "91",
                    "descrizione": "Cina. Tibet",
                    "valore": "915.150 460",
                    "children":[]
                },{//916
                    "parent": "91",
                    "descrizione": "Africa",
                    "valore": "916",
                    "children":[]
                },{//917
                },{//918
                },{//919
                    "parent": "91",
                    "descrizione": "Altre parti del mondo e mondi extraterrestri",
                    "valore": "919",
                    "children":[]
                }]
            },{//92
                "parent": "9",
                "descrizione": "Biografia, genealogia, insegne",
                "valore": "920",
                "children":[{//920
                },{//921
                },{//922
                },{//923
                },{//924
                },{//925
                },{//926
                },{//927
                },{//928
                },{//929
                    "parent": "92",
                    "descrizione": "Genealogia, nomi, insegne",
                    "valore": "929",
                    "children":[{//929.0
                    },{//929.1
                    },{//929.2
                    },{//929.3
                    },{//929.4
                        "parent": "929",
                        "descrizione": "Nomi personali",
                        "valore": "929.400",
                        "children":[]
                    },{//929.5
                    },{//929.6
                        "parent": "929",
                        "descrizione": "Araldica",
                        "valore": "929.600",
                        "children":[]
                    },{//929.7
                    },{//929.8
                    },{//929.9
                        "parent": "929",
                        "descrizione": "Forme d'insegna e d'identificazione",
                        "valore": "929.900",
                        "children":[]
                    }]
                }]
            },{//93
                "parent": "9",
                "descrizione": "Storia del mondo antico, fino al 799 a.C.",
                "valore": "930",
                "children":[{
                },{//930.1
                    "parent": "93",
                    "descrizione": "Archelogia",
                    "valore": "930.100",
                    "children":[]
                }]
            },{//94
                "parent": "9",
                "descrizione": "Storia generale dell'Europa",
                "valore": "940",
                "children":[{//940
                    "parent": "94",
                    "descrizione": "Storia generale dell'Europa occidentale",
                    "valore": "940",
                    "children":[{
                    },{
                    },{//940.2
                        "parent": "940",
                        "descrizione": "Storia generale dell'Europa occidentale dal 1453",
                        "valore": "940.200",
                        "children":[]
                    },{//940.3
                    },{//940.4
                    },{//940.5
                        "parent": "940",
                        "descrizione": "Storia generale dell'Europa occidentale dal 1918",
                        "valore": "940.500",
                        "children":[{
                        },{//940.1
                        },{//940.2
                        },{//940.3
                            "parent": "940.5",
                            "descrizione": "Storia generale dell'Europa occidentale. Seconda guerra mondiale in riferimento a categorie di persone",
                            "valore": "940.530 800",
                            "children":[]
                        }]
                    }]
                },{//941
                },{//942
                },{//943
                },{//944
                },{//945
                    "parent": "94",
                    "descrizione": "Storia di Italia",
                    "valore": "945",
                    "children":[{
                        "parent": "945",
                        "descrizione": "Storia della Provincia di Torino. Periodo non specifico",
                        "valore": "945.120 150",
                        "children":[]
                         },{
                        "parent": "945",
                        "descrizione": "Storia di Italia. Dal 1348 al 1494",
                        "valore": "945.050",
                        "children":[]
                    },{
                        "parent": "945",
                        "descrizione": "Storia di Italia. Dal 1494 al 1527",
                        "valore": "945.060",
                        "children":[]
                    },{
                        "parent": "945",
                        "descrizione": "Storia di Italia. Dal 1600 al 1700",
                        "valore": "945.073",
                        "children":[]
                    },{
                        "parent": "945",
                        "descrizione": "Storia di Italia. Dal 1796 al 1900",
                        "valore": "945.080",
                        "children":[]
                    },{
                        "parent": "945",
                        "descrizione": "Storia di Italia. Dal 1900 al 2000",
                        "valore": "945.090 920",
                        "children":[]
                    },{
                        "parent": "945",
                        "descrizione": "Storia di Italia. Dal 1914 al 1918",
                        "valore": "945.091 300",
                        "children":[]
                    },{
                        "parent": "945",
                        "descrizione": "Storia di Italia. Dal 1922 al 1943",
                        "valore": "945.091 500",
                        "children":[]
                     },{
                        "parent": "945",
                        "descrizione": "Storia di Italia. Periodo della resistenza armata e della fine del Regno. Dal 1943 al 1946",
                        "valore": "945.091 600",
                        "children":[]
                    },{
                        "parent": "945",
                        "descrizione": "Storia di Italia. Dal 2000",
                        "valore": "945.093",
                        "children":[]
                    }]
                }]
            }]
        }];
    }
}
