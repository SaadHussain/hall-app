import { Component, OnInit } from '@angular/core';
import { BookingService } from '../shared/booking.service';
import { Booking } from '../shared/booking.model';
import { elementEnd } from '../../../../node_modules/@angular/core/src/render3/instructions';
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookingList : Booking[];
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    var bkngList = this.bookingService.getData();
    bkngList.snapshotChanges().subscribe(item => {
          this.bookingList = [];
          item.forEach(element=>{ var y = element.payload.toJSON();
            y["$key"] = element.key;
            this.bookingList.push(y as Booking);
          }) 
    });
  }

  onEdit(editBooking : Booking)
  {
    debugger;
    this.bookingService.selectedBooking = Object.assign({},editBooking);
  }

}
