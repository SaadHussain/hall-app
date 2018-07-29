import { Component, OnInit } from '@angular/core';
import { BookingService } from '../shared/booking.service';
import { Booking } from '../shared/booking.model';
import { elementEnd } from '../../../../node_modules/@angular/core/src/render3/instructions';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookingList : Booking[];
  constructor(private bookingService: BookingService,private toastr : ToastrService) { }

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
    this.bookingService.selectedBooking = Object.assign({},editBooking);    
  }

  onDelete(key : string)
  {
    if(confirm("Are you sure you want to delete ?"))
    {
      this.bookingService.deleteBooking(key);
      this.toastr.warning('Deleted Successfully')
    }
  }

}
