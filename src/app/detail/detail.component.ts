import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit{

  // data:any=[];
  empObj=<Employee>{};

  constructor(private route:ActivatedRoute,
              private service:HttpService
  ){}

  ngOnInit(): void {
    this.getDataFromUrl();
  }

  getDataFromUrl(){
    this.route.paramMap.subscribe((param) => {
      // console.log(response.get("id"));
      this.service.getParticularRecordById(param.get("id")).subscribe((response:any) =>{
        // console.log(response);
        // this.data = response;
        this.empObj=response;
      })
    })
  }
}
