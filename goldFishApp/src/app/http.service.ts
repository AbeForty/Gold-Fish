import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { }

//Login
login(loginData){
  return this._http.post('/login', loginData);
}
//Register
createUser(userData){
  return this._http.post('/user', userData);
}
//create contact
createContact(contactData){
  return this._http.post('/contact', contactData);
}
//showContacts
getContacts(){
  return this._http.get('/contacts');
}
getSingleContact(id){
  return this._http.get('/contact/'+id);
}
updateContact(editContact, id){
  return this._http.put('/contact/'+id, editContact)
}
//Puretext
sendText(myText){
  console.log('from service: ', myText)
  return this._http.post('/sendText', myText)
}
//getUser
getUser(){
  return this._http.get('/whoami')
}


// createCall(ContactId, callData){
//   return this._http.post('/call/'+ContactId, callData);
// }

}
