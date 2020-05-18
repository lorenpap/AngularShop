import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModalComponent} from './cart-button/cart/modal/modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    this.dialog.open(ModalComponent, {
      width: '80%',
    }); }

  ngOnInit() {}
}

