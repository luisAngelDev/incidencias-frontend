import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Incidente } from '../_model/incidente';

@Injectable({
  providedIn: 'root'
})
export class IncidenteService extends GenericService<Incidente>{

  private incidenteCambio: Subject<Incidente[]> = new Subject<Incidente[]>();
  private mensajeCambio: Subject<string> = new Subject<string>();

  constructor(http: HttpClient) { 
    super(
      http,
     `${environment.HOST}/incidents/api/incidents/`);
  }

  getIncidenteCambio(){
    return this.incidenteCambio.asObservable();
  }

  setIncidenteCambio(incidentes: Incidente[]){
    return this.incidenteCambio.next(incidentes);
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable();
  }

  setMensajeCambio(mensaje: string){
    return this.mensajeCambio.next(mensaje);
  }



}
