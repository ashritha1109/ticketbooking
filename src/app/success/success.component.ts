import { Component, OnInit } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  ticketDetails: any;
  ticketdeets:any;
  
  constructor(private service: MoviedataService) {}

  ngOnInit(): void {
    this.service.getTicketDetails().subscribe((data) => {
      console.log(data);
      this.ticketDetails = data;
    });
    this.ticketdeets= JSON.parse(localStorage.getItem("ticketdeets")+"")
    // localStorage.removeItem("ticketdeets")

  
  }

}
