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

  }
  @Input() mode:string;
  @Input() state:string;
}
