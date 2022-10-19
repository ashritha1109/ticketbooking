import { Component, OnInit } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { MatTableModule } from '@angular/material/table';
import { tick } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { EditTicketsAdminService } from '../edit-tickets-admin.service';
const COLUMNS_SCHEMA = [
  {
    key: 'username',
    type: 'text',
    label: 'UserName',
  },
  {
    key: 'name',
    type: 'text',
    label: 'Movie',
  },
  {
    key: 'show',
    type: 'text',
    label: 'Show time',
  },

  {
    key: 'tickets_available',
    type: 'text',
    label: 'Number of tickets',
  },

  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  dataSource: any = [];
  oldbookedseats:any;
  newbookedseats:any;
  changeinbookedseats:any;
  //  displayedColumns: string[] = ['username', 'name', 'show','tickets_available'];

  constructor(private service: MoviedataService, private http: HttpClient, private editTickets:EditTicketsAdminService) {}

  ngOnInit(): void {
    this.service.getTicketDetails().subscribe((data) => {
      console.log(data);
      this.dataSource = data;
    });
  }
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  columnsSchema: any = COLUMNS_SCHEMA;
  EditingStarted(element: any) {
    console.log(element);
    this.oldbookedseats=element.tickets_available;
  }
  EditingDone(element: any) {
    console.log("element is:",element);
    let editeduser = {
      username: element.username,
      name: element.name,

      show: element.show,
      tickets_available: element.tickets_available,
    };
    this.http
      .put<any>(
        'https://634c17c3d90b984a1e45bdc5.mockapi.io/users/' + element.id,
        editeduser
      )
      .subscribe(
        (data) => console.log('put success', data),
        (error) => console.log('put oops', error)
      );
      this.newbookedseats=element.tickets_available;
      this.changeinbookedseats=this.newbookedseats-this.oldbookedseats;
      console.log(this.changeinbookedseats,'change in booked seats');
      this.editTickets.editBookedSeatsData(this.changeinbookedseats,element.movieid,element.show,element.lang);
  }
}
