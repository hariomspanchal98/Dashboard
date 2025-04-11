import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  @Input() selectedUser: any;
  @Output() close = new EventEmitter<void>();


  cancel() {
    console.log(this.close);
    this.close.emit();
  }
}
