import { Component, OnInit } from '@angular/core';
import { BookingService } from './shared/booking.service';
// import {NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
  // providers:[BookingService,{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class BookingsComponent implements OnInit {

  constructor(private bookingService : BookingService) { }

  ngOnInit() {
  }

}
