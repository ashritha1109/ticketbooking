import { Component, OnInit } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {
isRated=false;
  movies: {
    name: any;
    tickets_available: Number;
    show: any;
    imgUrl: String;
    genre:String,
    id:Number,
    duration:Number,
    interested:Boolean
  }[] = [];
  // movies: any = [];
  constructor(private movieService: MoviedataService,private router:Router) {}

  ngOnInit(): void {
    // this.movies=this.movieService.movieData;
    // console.log(this.movies)
    this.movieService.getEnglishMovieData().subscribe((data) => {
      console.log(data);
      this.movies = data;
    });
  }
  book(id:Number){
    console.log(id)
     this.router.navigate(['/ticketbook/'+id])
  }
  changeButton(movie:any){
    this.isRated=!this.isRated
    movie.interested=this.isRated
  }
}
