import { Subject } from "./subject";

export class Homework {

  constructor(id:number = Math.floor(Math.random() * (Math.floor(10000) - Math.floor(1) + 1)) + Math.floor(1),
  content:string,
  createdBy:string,
  createdDate:Date,
  completeBy:Date,
  subject:Subject)
  {
    this.content=content;
    this.createdBy=createdBy;
    this.createdDate=createdDate;
    this.completeBy=completeBy;
    this.id=id;
    this.subject=subject;
  }
  id:number
  content:string;
  createdBy:string;
  createdDate:Date;
  completeBy:Date;
  subject:Subject;
  getJson(){
    return {"content":this.content, "createdBy":this.createdBy, "createdDate":this.createdDate, "completeBy": this.completeBy}
  }

}
