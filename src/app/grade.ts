export class Grade {
  constructor(value:string, weight:number, id:number, createdDate:Date)
  {
    this.value = value;
    this.weight = weight;
    this.id = id;
    this.createdDate = createdDate;
  }
  value:string;
  weight:number;
  id:number;
  createdDate:Date;
  toJson()
  {
    return {"value":this.value, "weight":this.weight, "id":this.id, "dateCreatedInUnix":Math.floor(this.createdDate.getTime()/1000)}
  }
  toStringJson()
  {
    return {"value":this.value, "weight":this.weight, "id":this.id, "dateCreatedInUnix":Math.floor(this.createdDate.getTime()/1000)}
  }
}
