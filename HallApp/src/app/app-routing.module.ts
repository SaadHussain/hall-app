import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingListComponent } from './bookings/booking-list/booking-list.component';
import { BookingComponent } from './bookings/booking/booking.component';

const appRoutes: Routes = [    
  { path: 'bookings/booking', component: BookingComponent },
  { path: 'bookings/booking-list', component: BookingListComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
