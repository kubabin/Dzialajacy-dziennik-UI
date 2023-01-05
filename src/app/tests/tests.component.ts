import { Component, OnInit } from '@angular/core';
import { Api } from '../api';
import { SchoolTest } from '../school-test';
import { Subject } from '../subject';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor() { }
  api=new Api("","");
  subjects=this.api.getSubjects();
  tests=this.api.getTests();
  ngOnInit(): void {
  }
  filterBySubject(tests:Array<SchoolTest>, subject:Subject)
  {
    let finalArray:Array<SchoolTest> = [];
    for (let test of tests)
    {
      if (test.subject.displayName == subject.displayName)
      {
        finalArray.push(test)
        // console.log("subject name (iteration): "+hw.subject.displayName+" subject name (target): "+subject.displayName)
      }
    }
    return finalArray;
  }

}
