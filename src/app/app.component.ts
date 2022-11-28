import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dzialajacy-dziennik';
  private Isloggedin = true;
  isLoggedIn()
  {
    return this.Isloggedin;
  }
  
  gradeBadge=2
  hwBadge=1
  testsBadge=3
  planBadge=7

}

var drawerState="";
var isLoggedIn=true;
function changeDrawerState(state:number)
{
  switch(state){
    case 1: drawerState = "grades";break;
    case 2: drawerState = "tests";break;
    case 3: drawerState = "homework";break;
  }
}
