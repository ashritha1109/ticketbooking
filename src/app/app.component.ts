import { Component } from '@angular/core';
import { MoviedataService } from './moviedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviesystem';
  constructor(public service:MoviedataService){}
  
  
}
