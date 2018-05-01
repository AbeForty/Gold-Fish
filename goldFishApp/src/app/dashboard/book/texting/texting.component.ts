import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from './../../../http.service';

@Component({
  selector: 'app-texting',
  templateUrl: './texting.component.html',
  styleUrls: ['./texting.component.css']
})
export class TextingComponent implements OnInit {
  
  info = {
    toNumber:'',
    fromNumber:'',
    smsBody: '',
    apiToken:'777777'
  };

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private route: ActivatedRoute) { 
      this.route.params.subscribe(params => {
        this.info.toNumber = params.phone;
      })
    }

  ngOnInit() {
    
  }

  sendText(){
    console.log('from controller: ',this.info)
    this._httpService.sendText(this.info).subscribe((res:any) => {
      if (res.errors){
        console.log('Error: ', res.errors)
      }else{
        console.log('Nice!! Text sent!');
        this._router.navigate(["/dashboard/phonebook/all"])
      }
    })
  }

}
