import { Component, OnInit } from '@angular/core';
import { Api } from '../api';
import { Homework } from '../homework';
import { Subject } from '../subject';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {

  constructor() { }
  api:Api=new Api("","")
  subjects:Array<Subject> = this.api.getSubjects()
  ngOnInit(): void {
  }
  filterBySubject(homework:Array<Homework>, subject:Subject)
  {
    let finalArray:Array<Homework> = [];
    for (let hw of homework)
    {
      if (hw.subject.displayName == subject.displayName)
      {
        finalArray.push(hw)
        // console.log("subject name (iteration): "+hw.subject.displayName+" subject name (target): "+subject.displayName)
      }
    }
    return finalArray;
  }

}
