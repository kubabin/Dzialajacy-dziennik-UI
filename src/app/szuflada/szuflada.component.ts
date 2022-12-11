import { Component, createNgModule, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-szuflada',
  templateUrl: './szuflada.component.html',
  styleUrls: ['./szuflada.component.css']
})
export class SzufladaComponent implements OnInit {


  constructor() {
    this.mode = "student";
    this.state = "gradesp";
  }

  ngOnInit(): void {
    if (this.mode=="teacher")
    {
      console.log("logged in as teacher")
    }
  }
  @Input() mode:string;
  @Input() state:string;
}
