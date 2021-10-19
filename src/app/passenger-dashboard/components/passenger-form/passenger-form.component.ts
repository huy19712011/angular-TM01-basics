import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from './../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  // templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss'],
  template: `
    <form>
      Form!
      <div>
        {{detail | json}}
      </div>
    </form>
  `
})
export class PassengerFormComponent implements OnInit {

  @Input()
  detail!: Passenger;
  
  constructor() { }

  ngOnInit(): void {
  }

}
