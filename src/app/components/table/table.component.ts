import { Component } from '@angular/core';
import dataList from '../../data.json';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  constructor(public dialog: MatDialog) {}


  dataJson : any = dataList;
  displayedColumns: string[] = ['id', 'name', 'date', 'cards'];

  openDialog(cards: any, name: string) {
    this.dialog.open(DialogComponent, {
      data: {cardsData: cards,
             nameData: name}
    });
  }

}