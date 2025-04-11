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
  users: any = [];
  columnHeaders: any = [];
  masterSelected: boolean = false;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.dashboardService.getUsers().subscribe((data: any) => {
      this.users = data['grid_data'];
      this.columnHeaders = data['grid_columns'];
      this.getUserProfile();
      console.log(this.users[0]);
    });
  }

  getUserProfile() {
    this.users.forEach((user: any) => {
      user['profileUrl'] = 'https://avatar.iran.liara.run/public/' + user.id.replace(/\D/g, '').slice(-2);
      user['selected'] = false;
    });
  }

  checkIfAllSelected() {
    this.masterSelected = this.users.every((user: any) => user.selected);
  }

  selectAllRows() {
    this.users.forEach((user: any) => {
      user.selected = this.masterSelected;
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
