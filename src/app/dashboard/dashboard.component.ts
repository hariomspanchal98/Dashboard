import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showPopup = false;
  selectedRow: any;
  users:any = [];
  columnHeaders: any = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.dashboardService.getUsers().subscribe((data:any)=>{
      this.users = data['grid_data'];
      this.columnHeaders = data['grid_columns'];
      console.log(this.users, this.columnHeaders);
    });
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
