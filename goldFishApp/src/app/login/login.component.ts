import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;
  logs:any;
  

  constructor(
    private _httpService:HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.user = {
      fname:'',
      lname:'',
      email:'',
      pwd:''
    },
    this.logs = {
      email:'',
      pwd:''
    }
  }

  createUser(){
    console.log('com.ts')
    this._httpService.createUser(this.user).subscribe((res:any) => {
      if (res.errors){
        console.log('Error: ', res.errors)
      }else{
        console.log('Nice!! Created user!');
        this._router.navigate(['/dashboard']);
      }
    })
  }

  login(){
    console.log('login.ts');
    this._httpService.login(this.logs).subscribe((res:any) => {
      if (res.errors){
        console.log('Error: ', res.errors)
      }else{
        console.log('Logged In');
        this._router.navigate(['/dashboard']);
      }
    })
  }

}
