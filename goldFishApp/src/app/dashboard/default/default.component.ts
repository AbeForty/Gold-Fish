import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from './../../http.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  user:any;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this._httpService.getUser().subscribe((res:any) => {
      console.log ('controller res:', res)
      if (res.errors) {
        console.log('Error: ', res.errors)
      } else {
        this.user = res;
      }
    })
  }

}
