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
  private easterEggValue=0;
  easterEgg()
  {
    if (this.easterEggValue==0)
    {
      this.easterEggValue=1;
    }
    else if (this.easterEggValue==1)
    {
      this.easterEggValue=2;
    }
    else if (this.easterEggValue==2)
    {
      this.easterEggValue=3;
    }
    else if (this.easterEggValue==3)
    {
      let grades:HTMLCollectionOf<Element> = document.getElementsByClassName("gradeBadge")
      for (let i:number = 0; i != grades.length; i++)
      {

      }
    }
  }
  shuffled()
  {
    return this.grades.sort(() => Math.random() - 0.5);
  }
  sortBySubject(grades:Array<Grade>, subject:Subject):Array<Grade> {
    let sortedArray:Array<Grade> = [];
    let i:number=0;
    for (let grade of grades)
    {
      if (grade.subject.displayName == subject.displayName)
      {
        sortedArray.push(grade)
      }
      i++
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
