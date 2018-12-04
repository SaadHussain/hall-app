import { Component, OnInit,ViewChild } from '@angular/core';
import { BookingService } from '../shared/booking.service';
import { Booking } from '../shared/booking.model';
import { elementEnd } from '../../../../node_modules/@angular/core/src/render3/instructions';
import { ToastrService } from 'ngx-toastr';
import {MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColumns = [];
  // displayedColumns=  ['Name', 'BookingDateString', 'TotalBookingAmount', 'AdvanceAmount','HeadCount','select'];     
  bookingList : Booking[];
  columnNames = [{
    id: "CustomerName",
    value: "Name"

  }, {
    id: "BookingDateString",
    value: "Date"
  },
  {
    id: "TotalBookingAmount",
    value: "Total Amount"
  },
  {
    id: "AdvanceAmount",
    value: "Advance Amount"
  },
  {
    id: "HeadCount",
    value: "Head Count"
  },
  {
    id:"Edit",
    value:"Edit"
  },
  {
    id:"Delete",
    value:"Delete"
  },
];
  constructor(private bookingService: BookingService,private toastr : ToastrService) { }

  ngOnInit() {
    
    var bkngList = this.bookingService.getData();
    bkngList.snapshotChanges().subscribe(item => {
          this.bookingList = [];
          item.forEach(element=>{ var y = element.payload.toJSON();
            y["$key"] = element.key;            
            this.bookingList.push(y as Booking);
          }) 
          this.dataSource = new MatTableDataSource(this.bookingList);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
    });
    
    this.displayedColumns = this.columnNames.map(x => x.id);
    // this.displayedColumns.concat('select');
  }
  
  
  
  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
