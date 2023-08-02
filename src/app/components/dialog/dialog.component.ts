import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import dataList from '../../data.json';

import { MatDialogRef } from '@angular/material/dialog';

interface Data1 {
  id: string;
  name: string;
  date: string;
}

interface Data {
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
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  dataC : any;
  constructor(@Inject(MAT_DIALOG_DATA) public cardsData: any) {
    this.dataC = cardsData;
  }
  
  displayedColumns : string[] = ['id', 'name', 'gender', 'class', 'seat', 'club', 'persona', 'crush', 'strength', 'hairstyle', 'color', 'eyes', 'info']
}
