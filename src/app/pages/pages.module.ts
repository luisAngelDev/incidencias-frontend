import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material/material.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { IncidenteComponent } from './incidente/incidente.component';
import { IncidenteDialogoComponent } from './incidente/incidente-dialogo/incidente-dialogo.component';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutComponent } from './layout/layout.component';
import { Not404Component } from './not404/not404.component';


@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        PagesRoutingModule, //cuando se llame a page.module. este carga a PagesRoutingModule
    ],
    exports: [],
    declarations: [
        InicioComponent,
        LayoutComponent,
        IncidenteComponent,
        IncidenteDialogoComponent,
        Not404Component,
    ],
    providers: [],
})
export class PagesModule { }
