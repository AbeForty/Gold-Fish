import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from './../../../http.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  editContact = {
    fname: '',
    lname: '',
    phone: '',
    email: '',
    note: '',
    status: '',
    schedule: {
      date: '',
      time: '',
      topic: ''
    }
  };
  id: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
  }

  ngOnInit() {   
    this.getContact();
  }
  contactEdit(){
    document.getElementById("submit").removeAttribute("disabled")
    document.getElementById("fname").removeAttribute("readonly")
    document.getElementById("lname").removeAttribute("readonly")
    document.getElementById("email").removeAttribute("readonly")
    document.getElementById("phone").removeAttribute("readonly")
    document.getElementById("note").removeAttribute("readonly")
    document.getElementById("submit").removeAttribute("disabled")
    document.getElementById("edit").setAttribute("disabled", "disabled")

  }
  contactSubmit(){
    document.getElementById("submit").setAttribute("disabled", "disabled")
    document.getElementById("fname").setAttribute("readonly", "true")
    document.getElementById("lname").setAttribute("readonly", "true")
    document.getElementById("email").setAttribute("readonly", "true")
    document.getElementById("phone").setAttribute("readonly", "true")
    document.getElementById("note").setAttribute("readonly", "true")
    document.getElementById("submit").removeAttribute("disabled")
    document.getElementById("edit").removeAttribute("disabled")

  }
  submitContact(){
    this._httpService.updateContact(this.editContact, this.id).subscribe((res:any) => {
      if (res.errors){
        console.log('Error: ', res.errors)
      }else{
        console.log('Nice!! Updated Contact!');
        // this._router.navigate(['/dashboard/phonebook/all']);
        this.getContact()
        this.contactSubmit()
      }
    })
  }
  getContact() {
    this._httpService.getSingleContact(this.id).subscribe((res: any) => {
      if (res.errors) {
        console.log('Error: ', res.errors)
      } else {
        console.log('Got our contacts');
        console.log(res);
        this.editContact = res['data'];
        console.log('this.editContact: ', this.editContact);
      }
    })
  }
}
