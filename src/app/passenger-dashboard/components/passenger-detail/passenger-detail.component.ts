import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
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
      
      <button (click)="toggleEdit()">
        {{editing ? 'Done' : 'Edit'}}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
      <button (click)="goToPassenger()">
        View
      </button>
    </div>

  `
})
export class PassengerDetailComponent implements OnInit, OnChanges {

  @Input()
  detail!: Passenger;

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  editing: boolean = false;
  
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    // console.log('ngOnChanges');
  }
  
  ngOnInit(): void {
    // console.log('ngOnInit');
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

  goToPassenger() {
    this.view.emit(this.detail);
  }

}
