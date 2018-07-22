import { Component, OnInit } from '@angular/core';
import { BookingService } from './shared/booking.service'

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
  providers:[BookingService]
})
export class BookingsComponent implements OnInit {

  constructor(private bookingService : BookingService) { }

  ngOnInit() {
  }

}
