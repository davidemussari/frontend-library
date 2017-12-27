/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoComponent } from './catalogo/catalogo.component';
import { HomeComponent } from './home/home.component';
import { CatalogoCompletoComponent} from './catalogo-completo/catalogo-completo.component';
import { CatalogoArgomentoComponent} from './catalogo-argomento/catalogo-argomento.component';
import { CatalogoLuogoComponent} from './catalogo-luogo/catalogo-luogo.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'catalogoCompleto', pathMatch: 'full'},

    {path: 'catalogoCompleto', component: CatalogoCompletoComponent},
    {path: 'catalogoCompleto/:luogo', component: CatalogoCompletoComponent},
    {path: 'catalogoCompleto/:codArgomento/:descrizioneArgomento', component: CatalogoCompletoComponent},
    {path: 'catalogoArgomento/:id', component: CatalogoArgomentoComponent},
    {path: 'catalogoArgomento', component: CatalogoArgomentoComponent},
    {path: 'catalogoLuogo', component: CatalogoLuogoComponent}
//    {path: 'home', component: HomeComponent}
//{path: '', redirectTo: 'home', pathMatch: 'full'},
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
