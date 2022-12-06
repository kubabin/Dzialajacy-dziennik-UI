import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-drawer',
  templateUrl: './student-drawer.component.html',
  styleUrls: ['./student-drawer.component.css']
})
export class StudentDrawerComponent implements OnInit {
  uistate:string;
  constructor() {
    this.uistate = "grades"
  }

  ngOnInit(): void {
  }

}
