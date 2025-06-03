import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { TableColumn } from '../user-data';
import { USERDATA } from './user-table.constant';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  showUser = false;
  deleteUserPopup = false;
  selectedUser!: any;
  users: any = [];
  columnHeaders: TableColumn[] = [];
  masterSelected = false;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.dashboardService.getUsers().subscribe((data: any) => {
      if (!data) {
        data = USERDATA;
      }
      this.users = data['grid_data'];
      this.columnHeaders = data['grid_columns'];
      this.getUserProfile();
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

  openUserPopup(user: any) {
    this.selectedUser = user;
    this.showUser = true;
  }

  closeUserPopup() {
    this.showUser = false;
    this.selectedUser = null;
  }

  openDeletePopup(user: any) {
    this.selectedUser = user;
    this.deleteUserPopup = true;
  }

  closeDeletePopup() {
    this.deleteUserPopup = false;
    this.selectedUser = null;
  }

  deleteUser() {
    this.users = this.users.filter((user: any) => user.id !== this.selectedUser?.id);
    this.closeDeletePopup();
  }
}
