import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import { Booking } from './booking.model';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookingList: AngularFireList<any>;
  selectedBooking: Booking = new Booking();
  constructor(private firebase: AngularFireDatabase) { }
  
  getData(){
    this.bookingList = this.firebase.list('bookings');
    return this.bookingList;
  }

  insertBooking(booking : Booking)
  {
    this.bookingList.push({
      CustomerName : booking.CustomerName,
      CustomerPhone1 : booking.CustomerPhone1,
      CustomerPhone2 : booking.CustomerPhone2,    
      BookingDate : booking.BookingDate,
      BookingDateString : new Date(booking.BookingDate.year,booking.BookingDate.month-1, booking.BookingDate.day).toLocaleDateString('en-GB'),
      HeadCount: booking.HeadCount,
      AdvanceAmount: booking.AdvanceAmount,
      TotalBookingAmount: booking.TotalBookingAmount,
      Package: booking.Package,
      TableServiceFlag: booking.TableServiceFlag,
      SoundSystemFlag: booking.SoundSystemFlag,
      NumberOfCrates: booking.NumberOfCrates, 
      NumberOfWaiters: booking.NumberOfWaiters ,
      CreatedBy: 'admin',
      CreatedDate: new Date().toLocaleDateString('en-GB'),
      LastUpdatedBy:'admin',
      LastUpdatedDate: new Date().toLocaleDateString('en-GB'),      

    });
  }

  updateBooking(booking : Booking)
  {
    this.bookingList.update(booking.$key,{
      CustomerName : booking.CustomerName,
      CustomerPhone1 : booking.CustomerPhone1,
      CustomerPhone2 : booking.CustomerPhone2,    
      BookingDate : booking.BookingDate,
      BookingDateString : new Date(booking.BookingDate.year,booking.BookingDate.month-1, booking.BookingDate.day).toLocaleDateString('en-GB'),
      HeadCount: booking.HeadCount,
      AdvanceAmount: booking.AdvanceAmount,
      TotalBookingAmount: booking.TotalBookingAmount,
      Package: booking.Package,
      TableServiceFlag: booking.TableServiceFlag,
      SoundSystemFlag: booking.SoundSystemFlag,
      NumberOfCrates: booking.NumberOfCrates, 
      NumberOfWaiters: booking.NumberOfWaiters,
      CreatedBy: 'admin',
      CreatedDate: new Date().toLocaleDateString('en-GB'),
      LastUpdatedBy:'admin',
      LastUpdatedDate: new Date().toLocaleDateString('en-GB')  

    });
  }

  deleteBooking($key : string){
      this.bookingList.remove($key);
  }
}
