import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './dashboard/book/book.component';
import { AccountComponent } from './dashboard/account/account.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { DefaultComponent } from './dashboard/default/default.component';
import { AddContactComponent } from './dashboard/book/add-contact/add-contact.component';
import { AllContactsComponent } from './dashboard/book/all-contacts/all-contacts.component';
import { ScheduleComponent } from './dashboard/book/schedule/schedule.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PaymentComponent } from './dashboard/account/payment/payment.component';
import { EditContactComponent } from './dashboard/book/edit-contact/edit-contact.component';
import { TextingComponent } from './dashboard/book/texting/texting.component';

// import { AlertModule } from 'ngx-bootstrap';
// import { NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BookComponent,
    AccountComponent,
    DefaultComponent,
    AddContactComponent,
    AllContactsComponent,
    ScheduleComponent,
    PaymentComponent,
    EditContactComponent,
    TextingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
