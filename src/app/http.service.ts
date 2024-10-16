import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string = "http://localhost:8090/api/";

  // HttpClient :- this dependency injection used for using http method like post, get, put, delete...
              // - we want to use this dependency injection then import the HttpClientModule in app.module.ts file under import section.
              // - And then explicitly import that module because by default this module is not present.
              // - import {HttpClientModule} from '@angular/common/http';
  constructor(private http:HttpClient) { }

  getAllRecords(){
    // `${}` :this syntax used for take url
    return (this.http.get(`${this.baseUrl}allemp`));
  }

  getParticularRecordById(id:any){
    return (this.http.get(`${this.baseUrl}perticularRecordemp/${id}`));
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}allcountry`));
  }

  addEmployee(obj:any){
    // here backend data is in string format but that is not understand to angular for that use third argument of post method i.e fat arrow function in that give {responseType:'text'}
    return (this.http.post(`${this.baseUrl}addemp`, obj, {
      responseType:'text'
    }));
  }

  updateEmp(obj:any){
    return (this.http.put(`${this.baseUrl}updateemp/${obj.id}`, obj, {
      responseType:'text'
    }));
  }

  deleteEmp(id:any){
    return (this.http.delete(`${this.baseUrl}deleteemp/${id}`, {
      responseType:'text'
    }));
  }

  changeStatus(id:any){
    return (this.http.get(`${this.baseUrl}updateempstatus/${id}`, {
      responseType:'text'
    }));
  }
}
