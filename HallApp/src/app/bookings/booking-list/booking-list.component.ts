import { Component, OnInit } from '@angular/core';
import { BookingService } from '../shared/booking.service'
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
  }

}
