import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';

import { InicioComponent } from './inicio/inicio.component';
import { GuardService } from '../_service/guard.service';
import { IncidenteComponent } from './incidente/incidente.component';


export const routes: Routes = [

    { path: 'inicio', component: InicioComponent},
    { path: 'incidente', component: IncidenteComponent },
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}