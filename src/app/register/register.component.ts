import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { MoviedataService } from '../moviedata.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerData = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
  });
  constructor(private service: MoviedataService,private router:Router) {}

  ngOnInit(): void {}
  isTrue:Boolean=true;
  onSubmit() {
    var name=this.registerData.value.username
    var pwd=this.registerData.value.password;
    var email=this.registerData.value.email
    var contact=this.registerData.value.contact;

    console.log(this.registerData.value);
    if(name==""||pwd===""||email===""||contact===""){
      this.isTrue=false;
    }
    else{
      this.service
      .postRegisteredData(this.registerData.value)
      .subscribe((data) => {
        console.log(data);
        alert("user registered successfully")
        this.router.navigate(['login'])        
      });
    }

  }
}
