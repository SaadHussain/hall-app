import { Component, OnInit } from '@angular/core';
import { BookingService } from '../shared/booking.service';
import { Form, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// import {NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  // providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class BookingComponent implements OnInit {

  constructor(private bookingService : BookingService,private toastr : ToastrService) { }

  ngOnInit() {
    
    this.resetForm()
  }

  onSubmit(bookingForm : NgForm){
    if(bookingForm.value.CustomerPhone2 == null)
      bookingForm.value.CustomerPhone2 = '';
    if(bookingForm.value.Package == null)
      bookingForm.value.Package = '';  
    if(bookingForm.value.TableServiceFlag == null)
      bookingForm.value.TableServiceFlag = false;
    if(bookingForm.value.SoundSystemFlag == null)
      bookingForm.value.SoundSystemFlag = false;
    if(bookingForm.value.NumberOfCrates == null)
    bookingForm.value.NumberOfCrates= 0;
    if(bookingForm.value.NumberOfWaiters == null)
      bookingForm.value.NumberOfWaiters = 0;

    if(bookingForm.value.$key == null)
      {
        this.bookingService.insertBooking(bookingForm.value);
        this.toastr.success('Booking','Successfully Added');
      }
    else
      {
        this.bookingService.updateBooking(bookingForm.value);
        this.toastr.success('Booking','Successfully Updated');
      }
    this.resetForm(bookingForm);
  }

  resetForm(bookingForm? : NgForm){
    if(bookingForm != null)
      bookingForm.reset();
    this.bookingService.selectedBooking ={
        $key :null,
        CustomerName : '',
        CustomerPhone1 : '',
        CustomerPhone2 : '',    
        BookingDate : null,
        BookingDateString: '',
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
