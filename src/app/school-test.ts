import { Subject } from "./subject";

export class SchoolTest {
  constructor(id:number = Math.floor(Math.random() * (Math.floor(10000) - Math.floor(1) + 1)) + Math.floor(1),
  name:string,
  createdBy:string,
  assignedOn:Date,
  subject:Subject)
  {
    this.name=name;
    this.createdBy=createdBy;
    this.assignedOn=assignedOn;
    this.id=id;
    this.subject=subject;
  }
  name:string;
  createdBy:string;
  assignedOn:Date;
  id:number;
  subject:Subject;
  getJson()
  {
    return {"name":this.name, "createdBy": this.createdBy, "assignedOn": this.assignedOn, "id": this.id}
  }
}
