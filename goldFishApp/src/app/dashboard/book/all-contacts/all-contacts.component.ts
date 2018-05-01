import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './../../../http.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
  contacts= [];

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.showContacts();
  }

  showContacts() {
    console.log("Hello")
    this._httpService.getContacts().subscribe((res:any) => {
      if (res.errors) {
        console.log('Error: ', res.errors)
      } else {
        console.log('Got our contacts');
        console.log(res);
        this.contacts = res['data']['contact'];
        console.log('this.contacts: ',this.contacts);       
      }
    })
  }
}
