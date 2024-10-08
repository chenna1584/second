import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatInputModule
  ],
  declarations: [
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }


