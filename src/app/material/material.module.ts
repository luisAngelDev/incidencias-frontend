import { NgModule } from '@angular/core';

import {Component} from '@angular/core';

import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatMenuModule } from '@angular/material/menu';
import {MatDividerModule } from '@angular/material/divider';


import {MatTableModule } from '@angular/material/table';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatExpansionModule } from '@angular/material/expansion';
import {MatListModule } from '@angular/material/list';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatStepperModule } from '@angular/material/stepper';
import {MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule } from '@angular/material/card';
import {MatGridListModule } from '@angular/material/grid-list';
import {MatTabsModule } from '@angular/material/tabs';
import { CustomDateAdapter } from './custom-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatListModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatSlideToggleModule,    // Importa el módulo del slide toggle
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: DateAdapter, useClass: CustomDateAdapter }
  ]
})
export class MaterialModule { }
