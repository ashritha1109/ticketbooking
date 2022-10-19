import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviedataService } from '../moviedata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDetails=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })
  constructor(private service:MoviedataService,private router:Router) { }

  ngOnInit(): void {
    //this.loginDetails.controls.username
  }
  onLogin(){
    console.log(this.loginDetails.value)
    this.service.getLoginData().subscribe((data)=>{console.log(data)
      if(this.loginDetails.value.username=="admin")
      {
        if(this.loginDetails.value.password=="admin")
        {
          alert("admin!")
          this.router.navigate(['admin'])
        }
      }
    for(const i of (data as any)){

      if(i.username===this.loginDetails.value.username){
        //console.log("correct user")
        if(i.password===this.loginDetails.value.password){
          alert("login success")
        //  console.log("right user")
        localStorage.setItem("username",i.username)
          this.router.navigate(['afterlogin'])
        }
      }
      //console.log(i.username)
      //console.log(this.loginDetails.value.username)
    }
    })
  }
}