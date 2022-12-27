import { Component, OnInit } from '@angular/core';
import { Api } from '../api';
import { Grade } from '../grade';
import { Subject } from '../subject';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  private api:Api
  grades:Array<Grade> // Its stored in array for test purposes, and will remain till the api gets developed
  subjects:Array<Subject>
  constructor() {
    this.api = new Api("","");
    this.grades = this.api.getGrades()
    this.subjects=this.api.getSubjects()
  }
  testApi(){
    this.api.login()
  }
  ngOnInit(): void {

  }
  shuffled()
  {
    return this.grades.sort(() => Math.random() - 0.5);
  }
  sortBySubject(grades:Array<Grade>, subject:Subject):Array<Grade> {
    let sortedArray:Array<Grade> = [];
    for (let grade of grades)
    {
      if (grade.subject == subject)
      {
        sortedArray.push(grade)
      }
    }
    return sortedArray;
  }
  sortByValue(grades:Array<Grade>, value:string)
  {
    let sortedArray:Array<Grade> = [];
    for (let grade of grades)
    {
      if (grade.value == value)
      {
        sortedArray.push(grade);
      }
    }
    return sortedArray;
  }
  sortByWeight(grades:Array<Grade>, weight:number)
  {
    let sortedArray:Array<Grade> = [];
    for (let grade of grades)
    {
      if (grade.weight == weight)
      {
        sortedArray.push(grade);
      }
    }
    return sortedArray;
  }

}
