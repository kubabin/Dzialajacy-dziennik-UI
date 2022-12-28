import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Api } from './api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dzialajacy-dziennik';
  mainMode="app"
  drawerState="grades"
  drawerMode="student"
  gradeBadge=null
  hwBadge=null
  testsBadge=null
  planBadge=null
  attendanceBadge=null
  modeBadge=6
  settingsBadge=6
  isLoggedIn()
  {
    return false;
  }


}
