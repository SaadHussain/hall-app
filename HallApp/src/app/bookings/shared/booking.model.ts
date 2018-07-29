import { NgbDate } from "../../../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date";

export class Booking {
    $key : string;
    CustomerName : string;
    CustomerPhone1 : string;
    CustomerPhone2 : string;    
    BookingDate : NgbDate;
    BookingDateString : string;
    HeadCount: number;
    AdvanceAmount: number;
    TotalBookingAmount:number;
    Package: string;
    TableServiceFlag: boolean;
    SoundSystemFlag: boolean;
    NumberOfCrates: number; 
    NumberOfWaiters: number;    
}
