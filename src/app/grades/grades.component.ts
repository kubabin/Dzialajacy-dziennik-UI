import { Component, OnInit } from '@angular/core';
import { Api } from '../api';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  api:Api
  grades:Array<string>
  constructor() {
    this.api = new Api("","");
    this.grades = ["6","6-","5+","5","5-","4+","4","4-","3+","3","3-","2+","2","2-","1+","1"]
  }
  testApi(){
    this.api.login()
  }
  ngOnInit(): void {
  }

}
