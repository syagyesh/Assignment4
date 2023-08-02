import { Component, OnInit } from '@angular/core';
import dataList from '../../data.json';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

interface Data {
  id: string;
  name: string;
  date: string;
}

interface Data1 {
  id: string;
  name: string;
  gender: string;
  class: string;
  seat: string;
  club: string;
  persona: string;
  crush: string;
  strength: string;
  hairstyle: string;
  color: string;
  eyes: string;
  info: string;
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
  displayedColoums1: string[] = ['id', 'name', 'gender','class','seat','club','persona','crush','strength','hairstyle','color','eyes','info'];

  openDialog(cards: Data1[]) {
    this.dialog.open(DialogComponent, {
      data: cards
    });
  }

}