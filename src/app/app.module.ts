import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";

import { HomeComponent } from "./home/home.component";
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { CatalogoCompletoComponent } from './catalogo-completo/catalogo-completo.component';
import { CatalogoArgomentoComponent } from './catalogo-argomento/catalogo-argomento.component';
import { CatalogoLuogoComponent } from './catalogo-luogo/catalogo-luogo.component';
import { NomiCognomiPipe } from './nomi-cognomi.pipe';
import { ServiceBindDataRountingService } from './service-bind-data-rounting.service';

@NgModule({
    declarations: [
        AppComponent,
        CatalogoComponent,
        HomeComponent,
        CatalogoCompletoComponent,
        CatalogoArgomentoComponent,
        CatalogoLuogoComponent,
        NomiCognomiPipe
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
