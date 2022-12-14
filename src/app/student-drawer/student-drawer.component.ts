import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-drawer',
  templateUrl: './student-drawer.component.html',
  styleUrls: ['./student-drawer.component.css']
})
export class StudentDrawerComponent implements OnInit {

  constructor() {
    this.uistate="grades"
  }
  @Input('uistate') uistate:string;
  ngOnInit(): void {
    if (this.uistate == null)
    {
      throw new Error("uistate is null")
    }
  }

}
