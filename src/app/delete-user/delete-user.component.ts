import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent {
  @Input() selectedUser: any;
  @Output() closePopup = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  cancel() {
    this.closePopup.emit();
  }

  deleteUser() {
    this.delete.emit();
  }

}
