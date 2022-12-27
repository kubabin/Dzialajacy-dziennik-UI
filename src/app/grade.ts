import { Subject } from "./subject";

export class Grade {
  constructor(value:string, weight:number, id:number, createdDate:Date, subject:Subject, color:string)
  {
    this.value = value;
    this.weight = weight;
    this.id = id;
    this.createdDate = createdDate;
    this.subject=subject;
    this.color=color;
  }
  value:string;
  weight:number;
  id:number;
  createdDate:Date;
  subject:Subject;
  color:string;
  toJson()
  {
    return {"value":this.value, "weight":this.weight, "id":this.id, "dateCreatedInUnix":Math.floor(this.createdDate.getTime()/1000)}
  }
  toStringJson()
  {
    return "{\"value\":"+this.value+", \"weight\":"+this.weight+", \"id\":"+this.id+", \"dateCreatedInUnix\":"+Math.floor(this.createdDate.getTime()/1000).toString()+"}"
  }
}
