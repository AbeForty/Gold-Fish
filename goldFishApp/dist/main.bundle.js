webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var account_component_1 = __webpack_require__("./src/app/dashboard/account/account.component.ts");
var book_component_1 = __webpack_require__("./src/app/dashboard/book/book.component.ts");
var add_contact_component_1 = __webpack_require__("./src/app/dashboard/book/add-contact/add-contact.component.ts");
var all_contacts_component_1 = __webpack_require__("./src/app/dashboard/book/all-contacts/all-contacts.component.ts");
var schedule_component_1 = __webpack_require__("./src/app/dashboard/book/schedule/schedule.component.ts");
var payment_component_1 = __webpack_require__("./src/app/dashboard/account/payment/payment.component.ts");
var default_component_1 = __webpack_require__("./src/app/dashboard/default/default.component.ts");
var edit_contact_component_1 = __webpack_require__("./src/app/dashboard/book/edit-contact/edit-contact.component.ts");
var texting_component_1 = __webpack_require__("./src/app/dashboard/book/texting/texting.component.ts");
var routes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent,
        children: [{ path: '', component: default_component_1.DefaultComponent },
            { path: 'account', component: account_component_1.AccountComponent,
                children: [{ path: '', redirectTo: 'refill', pathMatch: 'full' },
                    { path: 'refill', component: payment_component_1.PaymentComponent }
                ] },
            { path: 'phonebook', component: book_component_1.BookComponent,
                children: [{ path: '', redirectTo: 'all', pathMatch: 'full' },
                    { path: 'all', component: all_contacts_component_1.AllContactsComponent },
                    { path: 'add', component: add_contact_component_1.AddContactComponent },
                    { path: 'text/:phone', component: texting_component_1.TextingComponent },
                    { path: 'schedule', component: schedule_component_1.ScheduleComponent },
                    { path: 'edit/:id', component: edit_contact_component_1.EditContactComponent }
                ] }
        ] },
    { path: '', pathMatch: 'full', component: login_component_1.LoginComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var book_component_1 = __webpack_require__("./src/app/dashboard/book/book.component.ts");
var account_component_1 = __webpack_require__("./src/app/dashboard/account/account.component.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var default_component_1 = __webpack_require__("./src/app/dashboard/default/default.component.ts");
var add_contact_component_1 = __webpack_require__("./src/app/dashboard/book/add-contact/add-contact.component.ts");
var all_contacts_component_1 = __webpack_require__("./src/app/dashboard/book/all-contacts/all-contacts.component.ts");
var schedule_component_1 = __webpack_require__("./src/app/dashboard/book/schedule/schedule.component.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var payment_component_1 = __webpack_require__("./src/app/dashboard/account/payment/payment.component.ts");
var edit_contact_component_1 = __webpack_require__("./src/app/dashboard/book/edit-contact/edit-contact.component.ts");
var texting_component_1 = __webpack_require__("./src/app/dashboard/book/texting/texting.component.ts");
// import { AlertModule } from 'ngx-bootstrap';
// import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                book_component_1.BookComponent,
                account_component_1.AccountComponent,
                default_component_1.DefaultComponent,
                add_contact_component_1.AddContactComponent,
                all_contacts_component_1.AllContactsComponent,
                schedule_component_1.ScheduleComponent,
                payment_component_1.PaymentComponent,
                edit_contact_component_1.EditContactComponent,
                texting_component_1.TextingComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/dashboard/account/account.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    height: 100%;\n}\n.sidenav {\n    \n    height: 100%; /* Full-height: remove this if you want \"auto\" height */\n    width: 250px; \n    position: fixed; \n    left: 0;\n    top: 50px;\n    background-color: #7c9ccf; /* Black */\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 20px;\n}\n/* The navigation menu links */\n.sidenav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 18px;\n    color: #fefcf7;\n    display: block;\n}\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover {\n    color: #227ebb;\n}\n/* Style page content */\n.main {\n    margin-left: 250px;\n    margin-top: 50px;\n    padding: 20px 20px;\n    /* background-color: #d5d5d3; */\n}\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n}"

/***/ }),

/***/ "./src/app/dashboard/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<p [ngStyle] = \"{'color':'blue'}\">--- dashboard/account component start here! ---</p>\n\n<div class=\"container\">\n \n      <div class=\"sidenav\">\n        <a [routerLink]=\"['refill']\">Balance</a>\n        <a [routerLink]=\"['refill']\">History</a>\n        <a [routerLink]=\"['refill']\">Refill</a>\n      </div>\n    \n \n      <div class=\"main\">\n          <router-outlet></router-outlet>\n        </div>\n    \n \n</div>"

/***/ }),

/***/ "./src/app/dashboard/account/account.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        core_1.Component({
            selector: 'app-account',
            template: __webpack_require__("./src/app/dashboard/account/account.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;


/***/ }),

/***/ "./src/app/dashboard/account/payment/payment.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/account/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  payment works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/account/payment/payment.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = __decorate([
        core_1.Component({
            selector: 'app-payment',
            template: __webpack_require__("./src/app/dashboard/account/payment/payment.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/account/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;


/***/ }),

/***/ "./src/app/dashboard/book/add-contact/add-contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/book/add-contact/add-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<h5>Create New Contact</h5>\n<br>\n<div class=\"container \">\n  <form (submit)=\"createContact()\">\n    <div class=\"form-row \">\n      <div class=\"form-group col-md-6\">\n        <label>Firstname</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Firstname\" name=\"fname\" [(ngModel)]=\"contact.fname\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label>Lastname</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Lastname\" name=\"lname\" [(ngModel)]=\"contact.lname\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label>Phone Number</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"(xxx)-xxx-xxxx\" name=\"phone\" [(ngModel)]=\"contact.phone\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label>Status</label>\n        <select id=\"inputState\" class=\"form-control\" name=\"status\" [(ngModel)]=\"contact.status\">\n          <option selected>New</option>\n          <option>Subscribed</option>\n          <option>Unsubscribed</option>\n          <option>Interested</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-8\">\n        <label>Email</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"contact.email\">\n      </div>\n      <div class=\"form-group col-md-4\"></div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Note</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Note...\" name=\"note\" [(ngModel)]=\"contact.note\">\n    </div>\n    <div>\n      <button type=\"submit\" class=\"btn btn-primary\">Cancel</button>\n      <button type=\"submit\" class=\"btn btn-primary\">Create</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/book/add-contact/add-contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var AddContactComponent = /** @class */ (function () {
    function AddContactComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    AddContactComponent.prototype.ngOnInit = function () {
        this.contact = {
            fname: '',
            lname: '',
            phone: '',
            status: '',
            email: '',
            note: ''
        };
    };
    // service
    // createContact(contactData){
    //   return this._http.post('/contact/'+userId, contactData);
    // }
    AddContactComponent.prototype.createContact = function () {
        var _this = this;
        console.log("controller..", this.contact);
        this._httpService.createContact(this.contact).subscribe(function (res) {
            if (res.errors) {
                console.log('Error: ', res.errors);
            }
            else {
                console.log('Nice!! Created Contact!');
                _this._router.navigate(['/dashboard/phonebook/all']);
            }
        });
    };
    AddContactComponent = __decorate([
        core_1.Component({
            selector: 'app-add-contact',
            template: __webpack_require__("./src/app/dashboard/book/add-contact/add-contact.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/book/add-contact/add-contact.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router])
    ], AddContactComponent);
    return AddContactComponent;
}());
exports.AddContactComponent = AddContactComponent;


/***/ }),

/***/ "./src/app/dashboard/book/all-contacts/all-contacts.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/book/all-contacts/all-contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p [ngStyle]=\"{'color':'blue'}\">--- dashboard / book / all-contacts Component start here! ---</p> -->\n<div>\n  <h5>Phonebook</h5>\n  <br>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Phone No.</th>\n        <th scope=\"col\">Status</th>\n        <th scope=\"col\">Schedule</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let contact of contacts\">\n        <th scope=\"row\">\n          <a [routerLink]=\"['/dashboard/phonebook/edit/', contact._id]\">{{contact.fname}} {{contact.lname}}</a>\n        </th>\n        <td>\n          <a [routerLink]=\"['/dashboard/phonebook/text/', contact.phone]\">{{contact.phone}}</a>\n        </td>\n        <td>{{contact.status}}</td>\n        <td>{{contact.schedule.date}} - {{contact.schedule.time}} - {{contact.schedule.topic}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/book/all-contacts/all-contacts.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var AllContactsComponent = /** @class */ (function () {
    function AllContactsComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.contacts = [];
    }
    AllContactsComponent.prototype.ngOnInit = function () {
        this.showContacts();
    };
    AllContactsComponent.prototype.showContacts = function () {
        var _this = this;
        console.log("Hello");
        this._httpService.getContacts().subscribe(function (res) {
            if (res.errors) {
                console.log('Error: ', res.errors);
            }
            else {
                console.log('Got our contacts');
                console.log(res);
                _this.contacts = res['data']['contact'];
                console.log('this.contacts: ', _this.contacts);
            }
        });
    };
    AllContactsComponent = __decorate([
        core_1.Component({
            selector: 'app-all-contacts',
            template: __webpack_require__("./src/app/dashboard/book/all-contacts/all-contacts.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/book/all-contacts/all-contacts.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router])
    ], AllContactsComponent);
    return AllContactsComponent;
}());
exports.AllContactsComponent = AllContactsComponent;


/***/ }),

/***/ "./src/app/dashboard/book/book.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    height: 100%;\n}\n.sidenav {\n    \n    height: 100%; /* Full-height: remove this if you want \"auto\" height */\n    width: 250px; \n    position: fixed; \n    left: 0;\n    top: 50px;\n    background-color: #7c9ccf; \n    -webkit-transition: background-color 2s ease 0s; \n    transition: background-color 2s ease 0s;\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 20px;\n}\n/* The navigation menu links */\n.sidenav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 18px;\n    color: #fefcf7;\n    display: block;\n}\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover {\n    color: #227ebb;\n}\n/* Style page content */\n.main {\n    margin-left: 250px;\n    margin-top: 80px;\n    padding: 20px 20px;\n    /* background-color: #d5d5d3; */\n}\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n}"

/***/ }),

/***/ "./src/app/dashboard/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <div class=\"sidenav\">\n        <a [routerLink]=\"['all']\">All Contacts</a>\n        <a [routerLink]=\"['add']\">Add Contacts</a>\n        <a [routerLink]=\"['schedule']\">Schedule</a>\n      </div>\n    </div>\n    <div class=\"main col-8\">\n        <router-outlet></router-outlet>\n    </div>\n  </div>\n \n    \n \n</div>\n\n\n<!-- <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-2\">\n      <ul class=\"nav nav-pills nav-stacked\">\n          <li class=\"active\"><a [routerLink]=\"['all']\">All Contacts</a></li>\n          <li><a [routerLink]=\"['add']\">Add Contacts</a></li>\n          <li><a [routerLink]=\"['schedule']\">Schedule</a></li>\n      </ul>\n    </div>\n    <div class=\"col\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/dashboard/book/book.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BookComponent = /** @class */ (function () {
    function BookComponent() {
    }
    BookComponent.prototype.ngOnInit = function () {
    };
    BookComponent = __decorate([
        core_1.Component({
            selector: 'app-book',
            template: __webpack_require__("./src/app/dashboard/book/book.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;


/***/ }),

/***/ "./src/app/dashboard/book/edit-contact/edit-contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/book/edit-contact/edit-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit) = \"submitContact()\"> \n    <div class=\"form-group\">\n      <label for=\"fname\">Firstname</label>\n      <input type=\"text\" class=\"form-control\" id=\"fname\" readonly = \"true\" placeholder=\"First name\" name = \"fname\" [(ngModel)] =\"editContact.fname\">\n      <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lname\">Lastname</label>\n        <input type=\"text\" class=\"form-control\" id=\"lname\" readonly = \"true\"  placeholder=\"Last name\" name = \"lname\" [(ngModel)] =\"editContact.lname\">\n        <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n    </div>\n    <div class=\"form-group\">\n        <label for=\"phone\">Phone Number</label>\n        <input type=\"text\" class=\"form-control\" id=\"phone\" readonly = \"true\"  placeholder=\"+1-xxx-xxx-xxxx\" name = \"phone\" [(ngModel)] =\"editContact.phone\">\n        <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n    </div>\n    <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" readonly = \"true\"  placeholder=\"example@mail.com\" name = \"email\" [(ngModel)] =\"editContact.email\">\n        <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n    </div>\n    <div class=\"form-group\">\n        <label for=\"note\">Note</label>\n        <textarea class=\"form-control\" id=\"note\" name = \"note\" readonly = \"true\" placeholder=\"Note\" [(ngModel)] =\"editContact.note\"></textarea>\n        <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n    </div>\n\n    <button type=\"submit\" id = \"edit\" class=\"btn btn-primary\" (click) = \"contactEdit()\">Edit</button>\n    <button type=\"submit\" id = \"submit\" class=\"btn btn-primary\" disabled = \"disabled\">Submit</button>\n</form>  "

/***/ }),

/***/ "./src/app/dashboard/book/edit-contact/edit-contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var EditContactComponent = /** @class */ (function () {
    function EditContactComponent(_httpService, _router, route) {
        var _this = this;
        this._httpService = _httpService;
        this._router = _router;
        this.route = route;
        this.editContact = {
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
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
        });
    }
    EditContactComponent.prototype.ngOnInit = function () {
        this.getContact();
    };
    EditContactComponent.prototype.contactEdit = function () {
        document.getElementById("submit").removeAttribute("disabled");
        document.getElementById("fname").removeAttribute("readonly");
        document.getElementById("lname").removeAttribute("readonly");
        document.getElementById("email").removeAttribute("readonly");
        document.getElementById("phone").removeAttribute("readonly");
        document.getElementById("note").removeAttribute("readonly");
        document.getElementById("submit").removeAttribute("disabled");
        document.getElementById("edit").setAttribute("disabled", "disabled");
    };
    EditContactComponent.prototype.contactSubmit = function () {
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("fname").setAttribute("readonly", "true");
        document.getElementById("lname").setAttribute("readonly", "true");
        document.getElementById("email").setAttribute("readonly", "true");
        document.getElementById("phone").setAttribute("readonly", "true");
        document.getElementById("note").setAttribute("readonly", "true");
        document.getElementById("submit").removeAttribute("disabled");
        document.getElementById("edit").removeAttribute("disabled");
    };
    EditContactComponent.prototype.submitContact = function () {
        var _this = this;
        this._httpService.updateContact(this.editContact, this.id).subscribe(function (res) {
            if (res.errors) {
                console.log('Error: ', res.errors);
            }
            else {
                console.log('Nice!! Updated Contact!');
                // this._router.navigate(['/dashboard/phonebook/all']);
                _this.getContact();
                _this.contactSubmit();
            }
        });
    };
    EditContactComponent.prototype.getContact = function () {
        var _this = this;
        this._httpService.getSingleContact(this.id).subscribe(function (res) {
            if (res.errors) {
                console.log('Error: ', res.errors);
            }
            else {
                console.log('Got our contacts');
                console.log(res);
                _this.editContact = res['data'];
                console.log('this.editContact: ', _this.editContact);
            }
        });
    };
    EditContactComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-contact',
            template: __webpack_require__("./src/app/dashboard/book/edit-contact/edit-contact.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/book/edit-contact/edit-contact.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], EditContactComponent);
    return EditContactComponent;
}());
exports.EditContactComponent = EditContactComponent;


/***/ }),

/***/ "./src/app/dashboard/book/schedule/schedule.component.css":
/***/ (function(module, exports) {

module.exports = "/* table {\n    table-layout: fixed;\n    width: 100%;\n    border: 1px solid lightgray;\n    text-align: center;\n  }\n  th{\n    font-family: Lato-Bold;\nfont-size: 18px;\ncolor: #fff;\nline-height: 1.4;\nbackground-color: #6c7ae0;\n}\n    thead th:nth-child(1) {width: 35%;}\n    thead th:nth-child(2) {width: 20%;}\n    thead th:nth-child(3) {width: 20%;}\n    thead th:nth-child(4) {width: 25%;}\n    \n\n    th{\n        padding: 5px;\n    }\n    td {\n        padding: 5px 0;     /* 10px top & bottom padding, 0px left & right */\n        /* border-width: 1px 0; /*  1px top & bottom border,  0px left & right */\n        /* border-color: #ecfdff;\n        border-style: solid; */\n        /* } */\n        table {\n        table-layout: fixed;\n        width: 100%;\n        text-align: center;\n      }\n        thead {background-color: #444444}\n        thead th:nth-child(1) {width: 35%;}\n        thead th:nth-child(2) {width: 20%;}\n        thead th:nth-child(3) {width: 20%;}\n        thead th:nth-child(4) {width: 25%;}\n        th{\n            padding: 5px;\n            color: aliceblue;\n        }\n        td {\n            padding: 5px 0;     /* 10px top & bottom padding, 0px left & right */\n            border-width: 1px 0; /*  1px top & bottom border,  0px left & right */\n            border-color: #ecfdff;\n            border-style: solid;\n        }"

/***/ }),

/***/ "./src/app/dashboard/book/schedule/schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\n  <h5>Schedules</h5>\n  <table>\n    <thead>\n      <th>NAME</th>\n      <th>STATUS</th>\n      <th>ACTIONS</th>\n    </thead>\n    <tr>\n      <td>Parichart</td>\n      <td>interested</td>\n      <td>Details</td>\n    </tr>\n    <tr>\n      <td>Pari</td>\n      <td>new</td>\n      <td>Details</td>\n    </tr>\n    <tr>\n        <td>Parichart</td>\n        <td>interested</td>\n        <td>Details</td>\n      </tr>\n      <tr>\n        <td>Pari</td>\n        <td>new</td>\n        <td>Details</td>\n      </tr>\n      <tr>\n          <td>Parichart</td>\n          <td>interested</td>\n          <td>Details</td>\n        </tr>\n        <tr>\n          <td>Pari</td>\n          <td>new</td>\n          <td>Details</td>\n        </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/book/schedule/schedule.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent() {
    }
    ScheduleComponent.prototype.ngOnInit = function () {
    };
    ScheduleComponent = __decorate([
        core_1.Component({
            selector: 'app-schedule',
            template: __webpack_require__("./src/app/dashboard/book/schedule/schedule.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/book/schedule/schedule.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
exports.ScheduleComponent = ScheduleComponent;


/***/ }),

/***/ "./src/app/dashboard/book/texting/texting.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/book/texting/texting.component.html":
/***/ (function(module, exports) {

module.exports = "<h5>Send Message</h5>\n\n<div class=\"container\">\n    <form (submit) = \"sendText()\">\n        <div class=\"form-row\">\n            <label>To:</label>\n            <input type=\"text\" class=\"form-control\" readonly = \"true\" name='phone' value=\"{{info.toNumber}}\">\n     \n        </div>\n        <br>\n        <div class=\"form-row\">\n          <label>Message:</label>\n          <textarea class=\"form-control\" name = 'sms' placeholder=\"Your message here..\" [(ngModel)] = \"info.smsBody\"></textarea>\n\n        </div>\n        <br>\n        <div>\n\n        <button type=\"submit\" class=\"btn btn-primary\">Cancel</button>\n        <button type=\"submit\" class=\"btn btn-primary\">Send</button>\n      </div>\n      </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/book/texting/texting.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var TextingComponent = /** @class */ (function () {
    function TextingComponent(_httpService, _router, route) {
        var _this = this;
        this._httpService = _httpService;
        this._router = _router;
        this.route = route;
        this.info = {
            toNumber: '',
            fromNumber: '+1-716-265-4051',
            smsBody: '',
            apiToken: 'x968cq'
        };
        this.route.params.subscribe(function (params) {
            _this.info.toNumber = params.phone;
        });
    }
    TextingComponent.prototype.ngOnInit = function () {
    };
    TextingComponent.prototype.sendText = function () {
        var _this = this;
        console.log('from controller: ', this.info);
        this._httpService.sendText(this.info).subscribe(function (res) {
            if (res.errors) {
                console.log('Error: ', res.errors);
            }
            else {
                console.log('Nice!! Text sent!');
                _this._router.navigate(["/dashboard/phonebook/all"]);
            }
        });
    };
    TextingComponent = __decorate([
        core_1.Component({
            selector: 'app-texting',
            template: __webpack_require__("./src/app/dashboard/book/texting/texting.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/book/texting/texting.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], TextingComponent);
    return TextingComponent;
}());
exports.TextingComponent = TextingComponent;


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar{\n    background: #252525;\n    height: 60px;\n}\n.navbar-brand{\n    color: #a77415;\n}\n.nav>li {\n    margin: 10px;\n  }\n.navbar-nav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 18px;\n    color: #64778d;\n    display: block;\n  }\n.navbar-nav a:hover {\n    color: #729799;\n}\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  \n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top \">\n    <a class=\"navbar-brand\" href=\"#\">GOLD FISH</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['phonebook']\">Phonebook</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['account']\">Account</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link  disabled\" href=\"/dashboard\">About</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"/\">Log out</a>\n        </li>\n      </ul>\n      <form class=\"form-inline mt-2 mt-md-0\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>\n\n  <main class=\"container-fluid\">\n      <router-outlet></router-outlet>\n  </main>\n  <footer class=\"fixed-bottom footer my-5 pt-5 text-muted text-center text-small\">\n      <p class=\"mb-1\">© 2017-2018 CZ Consultants Inc.</p>\n      <ul class=\"list-inline\">\n        <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\n        <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n        <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\n      </ul>\n    </footer>\n  </div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/dashboard/default/default.component.css":
/***/ (function(module, exports) {

module.exports = ".main {\n    margin-top: 80px;\n    padding: 20px 20px;\n    /* background-color: #d5d5d3; */\n}"

/***/ }),

/***/ "./src/app/dashboard/default/default.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" main container\">\n  <div class=\"row\">\n      <h1>Hello, {{user.fname}}</h1>\n  </div>\n  <br>\n  <br>\n  <div class=\"row\">\n    <div class=\"col\">\n        <app-all-contacts></app-all-contacts>\n    </div>\n    <div class=\"col-2\"></div>\n    <div class=\"col\">\n        <app-schedule></app-schedule>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/default/default.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var DefaultComponent = /** @class */ (function () {
    function DefaultComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    DefaultComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    DefaultComponent.prototype.getUser = function () {
        var _this = this;
        this._httpService.getUser().subscribe(function (res) {
            console.log('controller res:', res);
            if (res.errors) {
                console.log('Error: ', res.errors);
            }
            else {
                _this.user = res;
            }
        });
    };
    DefaultComponent = __decorate([
        core_1.Component({
            selector: 'app-default',
            template: __webpack_require__("./src/app/dashboard/default/default.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/default/default.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router])
    ], DefaultComponent);
    return DefaultComponent;
}());
exports.DefaultComponent = DefaultComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    //Login
    HttpService.prototype.login = function (loginData) {
        return this._http.post('/login', loginData);
    };
    //Register
    HttpService.prototype.createUser = function (userData) {
        return this._http.post('/user', userData);
    };
    //create contact
    HttpService.prototype.createContact = function (contactData) {
        return this._http.post('/contact', contactData);
    };
    //showContacts
    HttpService.prototype.getContacts = function () {
        return this._http.get('/contacts');
    };
    HttpService.prototype.getSingleContact = function (id) {
        return this._http.get('/contact/' + id);
    };
    HttpService.prototype.updateContact = function (editContact, id) {
        return this._http.put('/contact/' + id, editContact);
    };
    //Puretext
    HttpService.prototype.sendText = function (myText) {
        console.log('from service: ', myText);
        return this._http.post('/sendText', myText);
    };
    //getUser
    HttpService.prototype.getUser = function () {
        return this._http.get('/whoami');
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login{\n    margin-top:  0px;\n    padding-top: 350px;\n    height:100vh;\n}\nbody, html {\n    height: 100%;\n}\n.bg { \n    background-image: url(\"https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350\");\n    height: 100%;  \n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n} \n\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n  <div class=\"container login  \">\n    <div class=\"row align-items-center \">\n      <div class=\"col  \">\n\n        <div class=\"modal-content \">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Member Login</h4>\n          </div>\n          <div class=\"modal-body\">\n\n            <form (submit)='login()'>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\" required=\"required\" autocomplete=\"off\" [(ngModel)]=\"logs.email\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" name=\"pwd\" placeholder=\"Password\" required=\"required\" autocomplete=\"off\" [(ngModel)]=\"logs.pwd\">\n              </div>\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block login-btn\">Login</button>\n              </div>\n            </form>\n\n          </div>\n          <div class=\"modal-footer\">\n            <a href=\"#\">Forgot Password?</a>\n          </div>\n        </div>\n\n\n      </div>\n      <div class=\"col-2 r\">\n      </div>\n\n      <!-- register -->\n\n      <div class=\"col-6\">\n        <form #registerForm=\"ngForm\" (submit)='createUser()'>\n          <h2>Register</h2>\n          <p class=\"hint-text\">Create your account. It's free and only takes a minute.</p>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <input type=\"text\" class=\"form-control\" name=\"fname\" minlength=\"3\" placeholder=\"First Name\" required=\"required\" [(ngModel)]=\"user.fname\"\n                  #fname=\"ngModel\">\n                <p *ngIf=\"!fname.valid && fname.touched\" [ngStyle]=\"{'color':'red'}\">* required 3 or more characters</p>\n              </div>\n\n              <div class=\"col-6\">\n                <input type=\"text\" class=\"form-control\" name=\"lname\" placeholder=\"Last Name\" required=\"required\" [(ngModel)]=\"user.lname\"\n                  #lname=\"ngModel\">\n                <p *ngIf=\"!lname.valid && lname.touched\" [ngStyle]=\"{'color':'red'}\">* required 3 or more characters</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" \n            pattern=\"[^@]+@[^@]+\\.[a-zA-Z]{2,6}\" required=\"required\" [(ngModel)]=\"user.email\" #email=\"ngModel\">\n            <p *ngIf=\"!email.valid && email.touched\" [ngStyle]=\"{'color':'red'}\">* invalid email</p>\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"required\" [(ngModel)]=\"user.pwd\"\n              #pwd=\"ngModel\">\n            <p *ngIf=\"!pwd.valid && pwd.touched\" [ngStyle]=\"{'color':'red'}\">* invalid password</p>\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" name=\"confirm_password\" placeholder=\"Confirm Password\" required=\"required\">\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"checkbox-inline\">\n              <input type=\"checkbox\" required=\"required\"> I accept the\n              <a href=\"#\">Terms of Use</a> &amp;\n              <a href=\"#\">Privacy Policy</a>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <input class=\"btn btn-success btn-lg btn-block\" type=\"submit\" [disabled]=\"registerForm.form.invalid\" value=\"Register Now\">\n\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = {
            fname: '',
            lname: '',
            email: '',
            pwd: ''
        },
            this.logs = {
                email: '',
                pwd: ''
            };
    };
    LoginComponent.prototype.createUser = function () {
        var _this = this;
        console.log('com.ts');
        this._httpService.createUser(this.user).subscribe(function (res) {
            if (res.errors) {
                console.log('Error: ', res.errors);
            }
            else {
                console.log('Nice!! Created user!');
                _this._router.navigate(['/dashboard']);
            }
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('login.ts');
        this._httpService.login(this.logs).subscribe(function (res) {
            if (res.errors) {
                console.log('Error: ', res.errors);
            }
            else {
                console.log('Logged In');
                _this._router.navigate(['/dashboard']);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map