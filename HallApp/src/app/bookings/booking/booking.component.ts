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
    this.bookingService.insertBooking(bookingForm.value);
    this.resetForm(bookingForm);
    debugger;
    this.toastr.success('Success','WApp Works');
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
