import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviedataService } from '../moviedata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginDetails = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private service: MoviedataService, private router: Router) {}

  ngOnInit(): void {
  }
  onLogin() {
    console.log(this.loginDetails.value);
    this.service.getLoginData().subscribe((data) => {
      console.log(data);
      if (this.loginDetails.value.username == 'admin') {
        if (this.loginDetails.value.password == 'admin') {
          alert('admin!');
          this.router.navigate(['admin']);
        }
      }
      let flag = 0;
      for (const i of data as any) {
        if (i.username === this.loginDetails.value.username) {
          //console.log("correct user")
          if (i.password === this.loginDetails.value.password) {
            alert('login success');
            localStorage.setItem('username', i.username);
            this.router.navigate(['afterlogin']);
            flag = 1;
            break;
          }
        } else {
          flag = 0;
        }
      }
      if (flag === 0) {
        alert('invalid credentials');
      }
    });
  }
}
