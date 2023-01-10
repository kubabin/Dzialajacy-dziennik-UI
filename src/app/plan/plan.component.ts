import { Component, OnInit } from '@angular/core';
import { Api } from '../api';
import { Subject } from '../subject';
import { PlanLesson } from '../plan-lesson';
import { DayOfWeek } from '../day-of-week';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})

export class PlanComponent implements OnInit {

  constructor() {


  }
  api:Api=new Api("","")
  daysOfWeek:string[] = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"]
  ngOnInit(): void {
  }
  filterByWeekDay(day:DayOfWeek, lessons:PlanLesson[])
  {
    let finalArray:Array<PlanLesson> = [];
    for (let lesson of lessons)
    {
      if (lesson.dayOfWeek = day)
      {
        finalArray.push(lesson);
      }
      console.log("weekDay (iteration): "+lesson.dayOfWeek+" weekDay(target): "+day);
    }
    return finalArray;
  }
  filterByLessonNo(lessonNo:number, lessons:PlanLesson[], dayofWeek:DayOfWeek)
  {
    let finalArray:PlanLesson[] = [];
    let weekday:DayOfWeek = DayOfWeek.Monday;
    let i = 0;
    for (let lesson of lessons)
    {
      if (i==6)
      {
        break;
      }
      if (lesson.lessonNo == lessonNo && dayofWeek)
      {
        // This means that lesson number matches
        finalArray.push(lesson);
      }
      else if (lesson.lessonNo != lessonNo && lesson.dayOfWeek != weekday)
      {
        // This means that lesson number doesnt match, and its in other day of week.
        finalArray.push(new PlanLesson(lessonNo, new Subject("-", 0, "-"), weekday))
      }
      i++;

    }
    return finalArray;
  }
  getActiveLessonNumbers(lessons:PlanLesson[])
  {
    let i:number=0;
    let finalArray:number[]=[];
    for (let lesson of lessons)
    {
      if (i==lesson.lessonNo && finalArray.includes(lesson.lessonNo) == false)
      {
        finalArray.push(lesson.lessonNo);
        console.log(lesson.lessonNo);
      }
      i = i + 1;
    }

    return finalArray;
  }

}
