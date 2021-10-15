import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from './../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  // templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss'],
  template: `
    <div>
      <span 
        class="status"
        [class.checked-in]="detail.checkedIn"
        >
      </span>
      <div *ngIf="editing">
        <input 
          type="text" 
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name
          >
      </div>
      <div *ngIf="!editing">
        {{detail.fullname}}
      </div>
      
      <div class="date">
        Check in date: {{detail.checkInDate
          ? (detail.checkInDate | date: 'y, MMMM d' | uppercase) 
          : 'Not checked in'}}
      </div>
      
      <div class="children">
        Children: {{detail.children?.length || 0}}
      </div>

      <button (click)="toggleEdit()">
        {{editing ? 'Done' : 'Edit'}}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>

  `
})
export class PassengerDetailComponent implements OnInit {

  @Input()
  detail!: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleEdit() {
    
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    
    this.editing = !this.editing;
  }
  
  onNameChange(value: string) {
    
    this.detail.fullname = value;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

}
