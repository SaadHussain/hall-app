import { Component, OnInit } from '@angular/core';
import { BookingService } from '../shared/booking.service';
import { Form, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private bookingService : BookingService,private toastr : ToastrService) { }

  ngOnInit() {
    
    this.resetForm()
  }

  onSubmit(bookingForm : NgForm){
    if(bookingForm.value.$key == null)
      this.bookingService.insertBooking(bookingForm.value);
    else
      this.bookingService.updateBooking(bookingForm.value);
    this.resetForm(bookingForm);
    debugger;
    this.toastr.success('Booking','Successfully Added');
    debugger;
  }

  resetForm(bookingForm? : NgForm){
    if(bookingForm != null)
      bookingForm.reset();
    this.bookingService.selectedBooking ={
        $key :null,
        CustomerName : '',
        CustomerPhone1 : '',
        CustomerPhone2 : '',    
        BookingDate : '',
        HeadCount: 0,
        AdvanceAmount: 0,
        TotalBookingAmount: 0,
        Package: '',
        TableServiceFlag: false,
        SoundSystemFlag: false,
        NumberOfCrates: 0, 
        NumberOfWaiters: 0    
    }
  }

 

}
