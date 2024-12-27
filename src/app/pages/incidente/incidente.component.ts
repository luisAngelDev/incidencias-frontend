import { Component, OnInit, ViewChild } from '@angular/core';
import { IncidenteService } from 'src/app/_service/incidente.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Incidente } from 'src/app/_model/incidente';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { switchMap } from 'rxjs';
import { IncidenteDialogoComponent } from './incidente-dialogo/incidente-dialogo.component';

@Component({
  selector: 'app-incidente',
  templateUrl: './incidente.component.html',
  styleUrls: ['./incidente.component.css']
})
export class IncidenteComponent implements OnInit {

  displayedColumns = ['id', 'fecha_reporte','reportado_por', 'tipo_incidente', 'descripcion', 'prioridad', 'estado', 'responsable', 'fecha_solucion', 'acciones_realizadas', 'resultado', 'revisado_por', 'opciones'];
  dataSource: MatTableDataSource<Incidente>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private incidenteService: IncidenteService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {

    this.incidenteService.getIncidenteCambio().subscribe(data => {
      this.crearTabla(data);
    });

    this.incidenteService.getMensajeCambio().subscribe(data => {
      this.snackBar.open(data, 'AVISO', { duration: 3000 });
    });
    
    this.incidenteService.listar().subscribe(data => {
      this.crearTabla(data);
      console.log(data)
    });

  }

  crearTabla(data: Incidente[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  abrirDialogo(incidente?: Incidente) {
    this.dialog.open(IncidenteDialogoComponent, {
      width: '370px',
      data: incidente
    });
  }

  eliminar(incidente: Incidente) {
    this.incidenteService.eliminar(incidente.id).pipe(switchMap( ()=> {
      return this.incidenteService.listar();
    }))      
    .subscribe(data => {
      this.incidenteService.setIncidenteCambio(data);
      this.incidenteService.setMensajeCambio('SE ELIMINO');
    });
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

}
