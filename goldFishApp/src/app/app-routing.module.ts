import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './dashboard/account/account.component';
import { BookComponent } from './dashboard/book/book.component';
import { AddContactComponent } from './dashboard/book/add-contact/add-contact.component';
import { AllContactsComponent } from './dashboard/book/all-contacts/all-contacts.component';
import { ScheduleComponent } from './dashboard/book/schedule/schedule.component';
import { PaymentComponent } from './dashboard/account/payment/payment.component';
import { DefaultComponent } from './dashboard/default/default.component';
import { EditContactComponent } from './dashboard/book/edit-contact/edit-contact.component';
import { TextingComponent } from './dashboard/book/texting/texting.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent,
    children: [{ path: '', component: DefaultComponent},
              { path: 'account', component: AccountComponent,
                children: [{ path: '', redirectTo: 'refill' ,pathMatch: 'full'},
                            { path: 'refill', component: PaymentComponent}
                          ]},
               { path: 'phonebook', component: BookComponent,
                children: [{ path: '', redirectTo: 'all' ,pathMatch: 'full'},
                           { path: 'all', component: AllContactsComponent},
                           { path: 'add', component: AddContactComponent},
                           { path: 'text/:phone', component: TextingComponent},
                           { path: 'schedule', component: ScheduleComponent},
                           { path: 'edit/:id', component: EditContactComponent}
                          ]}
              ]},
  { path: '', pathMatch: 'full', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
