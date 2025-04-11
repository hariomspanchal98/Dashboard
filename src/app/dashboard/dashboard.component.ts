import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showPopup = false;
  selectedRow: any;

  constructor() { }

  ngOnInit(): void {
  }


  openPopup(row: any) {
    this.selectedRow = row;
    this.showPopup = true;
    console.log('open');
  }

  closePopup() {
    this.showPopup = false;
    this.selectedRow = null;
    console.log('close');
  }
}
