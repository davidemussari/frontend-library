import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { ClarityModule } from "@clr/angular";
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";

import { CatalogoArgomentoComponent } from './catalogo-argomento/catalogo-argomento.component';
import { CatalogoCompletoComponent } from './catalogo-completo/catalogo-completo.component';
import { CatalogoLuogoComponent } from './catalogo-luogo/catalogo-luogo.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { DeweyService } from './dewey.service';
import { GrigliaComponent } from './griglia/griglia.component';
import { HomeComponent } from "./home/home.component";
import { NomiCognomiPipe } from './nomi-cognomi.pipe';
import { ServiceBindDataRountingService } from './service-bind-data-rounting.service';
import { TortaComponent } from './torta/torta.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CatalogoCompletoComponent,
        CatalogoArgomentoComponent,
        CatalogoLuogoComponent,
        NomiCognomiPipe,
        GrigliaComponent,
        DettagliComponent,
        TortaComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
