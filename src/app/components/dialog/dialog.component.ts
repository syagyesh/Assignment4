import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public fullData: any) {}
  
  displayedColumns : string[] = ['id', 'name', 'gender', 'class', 'seat', 'club', 'persona', 'crush', 'strength', 'hairstyle', 'color', 'eyes', 'info']
}
