import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingListComponent } from './bookings/booking-list/booking-list.component';
import { BookingComponent } from './bookings/booking/booking.component';
import { ToastrModule } from 'ngx-toastr';
import { 
  MatCardModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSortModule,MatTableModule, MatPaginatorModule } from '@angular/material';

  const appRoutes: Routes = [    
    { path: 'bookings/booking', component: BookingComponent },
    { path: 'bookings/booking-list', component: BookingListComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    BookingsComponent,
    BookingListComponent,
    BookingComponent
    
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,    
    FormsModule,    
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
