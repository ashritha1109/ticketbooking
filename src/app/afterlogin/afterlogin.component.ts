import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.css']
})
export class AfterloginComponent implements OnInit {
name:any;
  constructor() { }

  ngOnInit(): void {
    this.name=localStorage.getItem("username");
  }

}
