import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from '../model/Employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit{

  allCountry:any[]=[];
  addData:Employee=<Employee>{};
  isUpdate:boolean=false;

  constructor(private service:HttpService,
              private router:Router,
              private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getAllCountryFromBackend();
    this.getDataFromUrl();
  }

  getDataFromUrl(){
    this.route.paramMap.subscribe((param)=>{
      console.log(param.get("id"));
      this.service.getParticularRecordById(param.get("id")).subscribe((response:any)=>{
        // console.log(response);
        this.addData = response;
        this.isUpdate = true;
      })
    })
  }

  getAllCountryFromBackend(){
    this.service.getAllCountry().subscribe((response:any)=>{
      // console.log(response);
      this.allCountry=response;
    })
  }

  onSubmit(){

    if(this.isUpdate){
      // Update existing record
      this.addData.updatedBy="admin";
      this.addData.updatedDate=Date.now();

      // here we call the service class method i.e updateEmp
      this.service.updateEmp(this.addData).subscribe((response)=>{
        // console.log(response);
        this.router.navigate([""]);
      })
    }else{
      // Add new record
      this.addData.createdBy="admin";    
      this.addData.createDate=Date.now();
      this.addData.updatedBy="admin";
      this.addData.updatedDate=Date.now();
      this.service.addEmployee(this.addData)
      .subscribe((response)=>{
        // console.log(response);
        this.router.navigate(['']);
    })
    }
  }
}
