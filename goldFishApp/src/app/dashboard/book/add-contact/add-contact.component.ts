import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './../../../http.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact : any;

  constructor(
    private _httpService:HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.contact = {
      fname:'',
      lname:'',
      phone:'',
      status:'',
      email:'',
      note:''
    }
  }

  // service
  // createContact(contactData){
  //   return this._http.post('/contact/'+userId, contactData);
  // }

  createContact(){
    console.log("controller..", this.contact)
    this._httpService.createContact(this.contact).subscribe((res:any) => {
      if (res.errors){
        console.log('Error: ', res.errors)
      }else{
        console.log('Nice!! Created Contact!');
        this._router.navigate(['/dashboard/phonebook/all']);
      }
    })
  }

}
