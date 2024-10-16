import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  empData:any[]=[];
  isSelect:boolean=false;
  id!:any;

  // HttpService :- this dependency injection used for using http method like post, get, put, delete
  constructor(private service:HttpService,
              private router:Router
  ){}
  
  ngOnInit(): void {
    this.getDataFromBackend();
  }

  getDataFromBackend(){
    this.service.getAllRecords().subscribe((response:any)=>{
      // console.log(response);
      this.empData = response;
    })
  }

  onUpdate(){
    if(this.isSelect){
      // Update the record
      this.router.navigate(['updateemp', this.id])
    }else{
      alert("Please select record for update........");
    }
  }

  onEdit(id:any){
    this.isSelect=true;
    this.id = id;
  }

  onDelete(){
    if(this.isSelect){
      // Delete the record
      if(confirm("Do you want to delete record")){
        this.service.deleteEmp(this.id).subscribe((response)=>{
          alert("Delete record successfully........");
          this.getDataFromBackend();
        })
      }
      
    }else{
      alert("Please select record for delete........");
    }
  }

  onChange(){
    if(this.isSelect){
      this.service.changeStatus(this.id).subscribe((response)=>{
        alert("Status change successfully.......");
        this.getDataFromBackend();
      })
    }else{
      alert("Please select record for change status........");
    }
  }
}
