import { Component } from '@angular/core';
import dataList from '../../data.json';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

interface Data {
  id: string;
  name: string;
  date: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  constructor(public dialog: MatDialog) {}

  dataJson : Data[] = dataList;
  displayedColumns: string[] = ['id', 'name', 'date', 'cards'];

  openDialog() {
    this.dialog.open(DialogComponent);
  }

}