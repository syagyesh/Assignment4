import { Component } from '@angular/core';
import dataList from '../../data.json';

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

  dataJson : Data1[] = dataList;
  displayedColumns: string[] = ['id', 'name', 'date'];

}
