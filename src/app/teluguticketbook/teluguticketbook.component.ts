import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviedataService } from '../moviedata.service';
@Component({
  selector: 'app-teluguticketbook',
  templateUrl: './teluguticketbook.component.html',
  styleUrls: ['./teluguticketbook.component.css']
})
export class TeluguticketbookComponent implements OnInit {
  
  ticketDetails = new FormGroup({
    name: new FormControl(''),
    genre: new FormControl(''),
    imgUrl: new FormControl(''),
    morning_show: new FormControl(''),
    matnee_show: new FormControl(''),
    first_show: new FormControl(''),
    second_show: new FormControl(''),
    description: new FormControl(''),
    director: new FormControl(''),
    duration: new FormControl(''),
    cast: new FormControl(''),
    rating: new FormControl(''),
    id: new FormControl(''),
    tickets_available: new FormControl(''),
    show: new FormControl(''),
    username:new FormControl(''),
    city:new FormControl(''),
    lang: new FormControl(''),
    movieid:new FormControl('')
  });
  id: any;
  movieDetails: any;
  showdets = '';
  tickets: any;
  constructor(
    private service: MoviedataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    


    this.service.getSingleTeluguMovieData(this.id).subscribe((data) => {
      console.log(data);
      this.ticketDetails.controls.name.setValue(data.name);
      this.ticketDetails.controls.lang.setValue('Telugu');
      this.ticketDetails.controls.movieid.setValue(this.id)
      this.movieDetails = data;
      // this.ticketDetails.controls.show.setValue(data.show)
    });

    // console.log(this.movieDetails)
  }
  // selectShow(e:any){
  //   this.ticketDetails.get('show')?.setValue(e.target.value)
  // }
  onSubmit() {
    // number of tickets selected in the form
    console.log("tickets selected",this.ticketDetails.value.tickets_available);
    // show selected in the form
    console.log("show selected",this.ticketDetails.value.show);
    this.ticketDetails.get('username')?.setValue(localStorage.getItem("username"))
    console.log("username is:",this.ticketDetails.value.username)
    // if show is morning
    if (this.ticketDetails.value.show == 'morning') {
      console.log('hey morning');
      this.ticketDetails.get('username')?.setValue(localStorage.getItem("username"))
      let tickets = this.ticketDetails.value.tickets_available;

      if (tickets != null) {
        if (this.movieDetails.morning_show < tickets) {
          console.log('sorry not availble');
          this.router.navigate(['failure']);
        } else {
          if (tickets != null) {
            let remainingTickets =
              Number(this.movieDetails.morning_show) - Number(tickets);
            console.log('remaining tickers left', remainingTickets);
            this.movieDetails.morning_show = remainingTickets;
             // to store ticket dets into local storage
             localStorage.setItem("ticketdeets",JSON.stringify(this.ticketDetails.value))
            this.service
              .editTeluguTicketsData({ ...this.movieDetails, id: this.id })
              .subscribe((data) => {
                alert('edited');
                this.router.navigate(['success']);
              })

              // sending form details
            this.service.postTicketDetails(this.ticketDetails.value).subscribe((data)=>{console.log(data)
            console.log("sent data to api")})
          }
        }
      }
    }

    // if show == matnee

    if (this.ticketDetails.value.show == 'matnee') {
      this.ticketDetails.get('username')?.setValue(localStorage.getItem("username"))
      console.log('hey matnee');

      let tickets = this.ticketDetails.value.tickets_available;

      if (tickets != null) {
        if (this.movieDetails.matnee_show < tickets) {
          console.log('sorry not availble');
          this.router.navigate(['failure']);
        } else {
          if (tickets != null) {
            let remainingTickets =
              Number(this.movieDetails.matnee_show) - Number(tickets);
            console.log('remaining tickers left', remainingTickets);
            this.movieDetails.matnee_show = remainingTickets;
             // to store ticket dets into local storage
             localStorage.setItem("ticketdeets",JSON.stringify(this.ticketDetails.value))
            this.service
              .editTeluguTicketsData({ ...this.movieDetails, id: this.id })
              .subscribe((data) => {
                alert('edited');
                this.router.navigate(['success']);
              });
              this.service.postTicketDetails(this.ticketDetails.value).subscribe((data)=>{console.log(data)
                console.log("sent data to api")})
          }
        }
      }
    }

    // if show==first
    if (this.ticketDetails.value.show == 'first') {
      this.ticketDetails.get('username')?.setValue(localStorage.getItem("username"))
      console.log('hey first');

      let tickets = this.ticketDetails.value.tickets_available;

      if (tickets != null) {
        if (this.movieDetails.first_show < tickets) {
          console.log('sorry not availble');
          this.router.navigate(['failure']);
        } else {
          if (tickets != null) {
            let remainingTickets =
              Number(this.movieDetails.first_show) - Number(tickets);
            console.log('remaining tickers left', remainingTickets);
            this.movieDetails.first_show = remainingTickets;
             // to store ticket dets into local storage
             localStorage.setItem("ticketdeets",JSON.stringify(this.ticketDetails.value))
            this.service
              .editTeluguTicketsData({ ...this.movieDetails, id: this.id })
              .subscribe((data) => {
                alert('edited');
                this.router.navigate(['success']);
              });
              this.service.postTicketDetails(this.ticketDetails.value).subscribe((data)=>{console.log(data)
                console.log("sent data to api")})
          }
        }
      }
    }

    // if show == second

    if (this.ticketDetails.value.show == 'second') {
      this.ticketDetails.get('username')?.setValue(localStorage.getItem("username"))
      console.log('hey second');

      let tickets = this.ticketDetails.value.tickets_available;

      if (tickets != null) {
        if (this.movieDetails.second_show < tickets) {
          console.log('sorry not availble');
          this.router.navigate(['failure']);
        } else {
          if (tickets != null) {
            let remainingTickets =
              Number(this.movieDetails.second_show) - Number(tickets);
            console.log('remaining tickers left', remainingTickets);
            this.movieDetails.second_show = remainingTickets;
             // to store ticket dets into local storage
             localStorage.setItem("ticketdeets",JSON.stringify(this.ticketDetails.value))
            this.service
              .editTeluguTicketsData({ ...this.movieDetails, id: this.id })
              .subscribe((data) => {
                alert('edited');
                this.router.navigate(['success']);
              });
              this.service.postTicketDetails(this.ticketDetails.value).subscribe((data)=>{console.log(data)
                console.log("sent data to api")})
          }
        }
      }
    }
    // this.showdets=this.ticketDetails.get('show')?.value;
    // console.log(this.showdets)
  }

}
