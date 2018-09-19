import { Component, OnInit } from '@angular/core';
import { Signin } from './signin';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
	signin: Signin = null;
  router: Router;

  constructor(_router: Router, private signinService: SigninService) {
	  this.signin = new Signin(); 
    this.router = _router;
   }

  ngOnInit() {

  }

  submit(){

    if(this.signin.username && this.signin.password){

    this.signinService.auth(this.signin.username, this.signin.password).subscribe(
      data => {
        if(data["status"]){
          this.router.navigateByUrl('/dashboard');
        }else{
          alert("Invalid credentials")
        }
      },
      error => {
        console.log("Error", error);
      }
    );
    }else {
      alert("Username & password required");
    }
  }

}
