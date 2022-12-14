import { Component, NgModule } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Api } from './api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dzialajacy-dziennik';
  isLoggedIn()
  {
    return Api.isLoggedIn()
  }
  drawerState="grades"
  drawerMode="student"
  gradeBadge=null
  hwBadge=null
  testsBadge=null
  planBadge=null
  attendanceBadge=null
  
}

var drawerState="";
var isLoggedIn=true;
function changeDrawerState(newstate:number)
{
  switch(newstate){
    case 1: drawerState = "grades";break;
    case 2: drawerState = "tests";break;
    case 3: drawerState = "homework";break;
  }
}
