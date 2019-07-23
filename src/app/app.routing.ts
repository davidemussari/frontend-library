import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CatalogoCompletoComponent} from './catalogo-completo/catalogo-completo.component';
import { CatalogoArgomentoComponent} from './catalogo-argomento/catalogo-argomento.component';
import { CatalogoLuogoComponent} from './catalogo-luogo/catalogo-luogo.component';


export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'catalogoLuogo', component: CatalogoLuogoComponent},
    {path: 'catalogoCompleto/:codArgomento/:descrizioneArgomento', component: CatalogoCompletoComponent},
    {path: 'catalogoCompleto/:luogo', component: CatalogoCompletoComponent},
    {path: 'catalogoCompleto', component: CatalogoCompletoComponent},
    {path: 'catalogoArgomento/:id', component: CatalogoArgomentoComponent},
    {path: 'catalogoArgomento', component: CatalogoArgomentoComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
//     {path: '', redirectTo: 'catalogoCompleto', pathMatch: 'full'},
    {path: '**', redirectTo: ''},
    //{path: '', redirectTo: 'catalogoCompleto/'},

];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
