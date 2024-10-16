export interface Employee{
    id:number,
    name:string,
    mob_no:string,
    email_id:string,
    dept:string,
    salary:number,
    status:string,
    createdBy:string,
    createDate:number,
    updatedBy:string,
    updatedDate:number,

    country:{
        cid:number,
        cname:string
    }
}