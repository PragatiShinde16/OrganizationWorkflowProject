import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string = "http://localhost:8090/api/";
  constructor(private http:HttpClient) { }

  getAllRecords(){
    return (this.http.get(`${this.baseUrl}allemp`));
  }

  // addRecord(){
  //   return (this.http.post(`${this.baseUrl}addemp`));
  // }
}
