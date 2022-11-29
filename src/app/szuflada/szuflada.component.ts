import { Component, createNgModule, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-szuflada',
  templateUrl: './szuflada.component.html',
  styleUrls: ['./szuflada.component.css']
})
export class SzufladaComponent implements OnInit {


  constructor() {
    this.uistate = "grades"
    // TODO: Implement API
    this.grades = ["6","6-","5+","5","5-","4+","4","4-","3+","3","3-","2+","2","2-","1+","1"]
  }

  ngOnInit(): void {

  }
  @Input() uistate:String;
  grades:Array<String>;
}
