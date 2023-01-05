import { WeekDay } from "@angular/common";
import { DayOfWeek } from "./day-of-week";
import { Subject } from "./subject";

export class PlanLesson {
  constructor(lessonNo:number, subject:Subject, dayOfWeek:DayOfWeek, id:number = Math.floor(Math.random() * (Math.floor(10000) - Math.floor(1) + 1)) + Math.floor(1))
  {
    this.lessonNo=lessonNo;
    this.subject=subject;
    this.dayOfWeek=dayOfWeek;
    this.id=id;
  }
  lessonNo:number;
  subject:Subject;
  dayOfWeek:DayOfWeek;
  id:number;
  getJson()
  {
    return {"lessonNo":this.lessonNo, "subject": this.subject, "dayofweek":this.dayOfWeek.toLocaleString()}
  }
  static empty(lessonNo:number, dayOfWeek:DayOfWeek)
  {
    return (new PlanLesson(lessonNo, new Subject("-", 0, "-"), dayOfWeek))
  }
}

