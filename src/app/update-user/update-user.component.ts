import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  @Input() rowData: any;
  @Output() close = new EventEmitter<void>();

  ngOnInit(): void {
    this.rowData = { age: 10, name: 'adf' }
  }
  saveChanges() {
    console.log(this.close);
    this.close.emit();
  }

  cancel() {
    console.log(this.close);
    this.close.emit();
  }

}
