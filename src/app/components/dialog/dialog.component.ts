import { Component } from '@angular/core';
import dataList from '../../data.json';

interface Data {
  id: string;
  name: string;
  date: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  dataJson : Data[] = dataList;
  displayedColumns: string[] = ['id', 'name', 'date'];

}
