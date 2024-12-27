import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Incidente } from 'src/app/_model/incidente';
import { IncidenteService } from 'src/app/_service/incidente.service';
import * as moment from 'moment';
import { switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-incidente-dialogo',
  templateUrl: './incidente-dialogo.component.html',
  styleUrls: ['./incidente-dialogo.component.css']
})
export class IncidenteDialogoComponent implements OnInit {

  incidente: Incidente;
  incidenteCrear: Incidente;

  reportado_porSeleccionado: string;
  tipo_incidenteSeleccionado: string;
  descripcionSeleccionado: string;
  prioridadSeleccionado: string;
  estadoSeleccionado: string;
  responsableSeleccionado: string;
  acciones_realizadasSeleccionado: string;
  resultadoSeleccionado: string; 

  fecha_reporte: Date = new Date();
  maxFecha: Date = new Date();

  completado: boolean = false;
  fecha_solucion: Date;

  usuario: string;
 



  constructor(
    private dialogRef: MatDialogRef<IncidenteDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Incidente,
    private incidenteService: IncidenteService,
    
  ){}

  ngOnInit(): void {
    this.incidente = { ...this.data };

    this.usuario = sessionStorage.getItem(environment.USER_NAME);
    

    if (this.incidente != null && this.incidente.id > 0) {
      console.log("OBJETO VIENE CON DATA")

      this.reportado_porSeleccionado = this.incidente.reportado_por;
      this.tipo_incidenteSeleccionado = this.incidente.tipo_incidente;
      this.descripcionSeleccionado = this.incidente.descripcion;
      this.prioridadSeleccionado = this.incidente.prioridad;
      this.estadoSeleccionado = this.incidente.estado;
      this.responsableSeleccionado = this.incidente.responsable;
      this.acciones_realizadasSeleccionado = this.incidente.acciones_realizadas;
      this.resultadoSeleccionado = this.incidente.resultado; 

    } else {
      console.log("OBJETO VIENE SIN DATA")
    }
    
  }


  
  operar(){

    let incidente2 = new Incidente;
    
    if(this.incidente != null && this.incidente.id > 0){

      console.log("ENTRE A INCIDENTE MODIFICAR")
      this.incidente.fecha_reporte = moment(this.fecha_reporte).format('YYYY-MM-DDTHH:mm:ss');
      this.incidente.reportado_por = this.reportado_porSeleccionado;
      this.incidente.tipo_incidente = this.tipo_incidenteSeleccionado;
      this.incidente.descripcion = this.descripcionSeleccionado;
      this.incidente.prioridad = this.prioridadSeleccionado;
      this.incidente.estado = this.estadoSeleccionado;
      this.incidente.responsable = this.responsableSeleccionado;
      this.incidente.acciones_realizadas = this.acciones_realizadasSeleccionado;
      this.incidente.resultado = this.resultadoSeleccionado;

      //TODO modificar este codigo para que compare estado si es solucionado, pone fecha y si no hay nada no pone fecha.
      // if (this.isChecked == true){
      //   this.fecha_solucion = new Date();
      //   this.incidente.fecha_solucion = moment(this.fecha_solucion).format('YYYY-MM-DDTHH:mm:ss');
      //   //this.completado = false;
      //   this.isChecked = false;
      // }

      if (this.incidente.resultado.toLowerCase() == "solucionado"){
        this.fecha_solucion = new Date();
        this.incidente.revisado_por =  this.usuario;
        this.incidente.fecha_solucion = moment(this.fecha_solucion).format('YYYY-MM-DDTHH:mm:ss');
        
      }

      //si no se va a permitir editar fecha se debe inabilitar datepiket en modificacion

      console.log(this.incidente);

      //MODIFICAR
      this.incidenteService.modificar(this.incidente.id, this.incidente).pipe(switchMap( () => {
        return this.incidenteService.listar();
      }))
      .subscribe(data =>{
        this.incidenteService.setIncidenteCambio(data);
        this.incidenteService.setMensajeCambio('SE MODIFICO');
      });
    }
    else{//   REGISTRAR

      incidente2.fecha_reporte = moment(this.fecha_reporte).format('YYYY-MM-DDTHH:mm:ss');
      incidente2.reportado_por = this.reportado_porSeleccionado;
      incidente2.tipo_incidente = this.tipo_incidenteSeleccionado;
      incidente2.descripcion = this.descripcionSeleccionado;
      incidente2.prioridad = this.prioridadSeleccionado;
      incidente2.estado = this.estadoSeleccionado;
      incidente2.responsable = this.responsableSeleccionado;
      incidente2.acciones_realizadas = this.acciones_realizadasSeleccionado;
      incidente2.resultado = this.resultadoSeleccionado;

      console.log(this.incidente);

      this.incidenteService.registrar(incidente2).pipe(switchMap( () => {
        return this.incidenteService.listar();
      }))
      .subscribe(data => {
        this.incidenteService.setIncidenteCambio(data);
        this.incidenteService.setMensajeCambio('SE REGISTRO');
      });
    }
    this.cerrar();
  }


  cerrar(){
    this.dialogRef.close();
  }

  /* isChecked: boolean = false; // Estado inicial

  onToggleChange(event: any): void {
    this.isChecked = event.checked; // Captura el estado del slide toggle
    console.log('Estado del slide toggle:', this.isChecked);
  } */


}
