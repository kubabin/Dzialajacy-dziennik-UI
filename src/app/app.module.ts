import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Design modules
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatList, MatListModule} from '@angular/material/list'
import {MatBadgeModule} from '@angular/material/badge';

// Builtin components
import { SzufladaComponent } from './szuflada/szuflada.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { GradesComponent } from './grades/grades.component';
import { HomeworkComponent } from './homework/homework.component';
import { TestsComponent } from './tests/tests.component';
import { PlanComponent } from './plan/plan.component';
import { StudentDrawerComponent } from './student-drawer/student-drawer.component';
import { TeacherDrawerComponent } from './teacher-drawer/teacher-drawer.component';


@NgModule({
  declarations: [
    AppComponent,
    SzufladaComponent,
    LoginpageComponent,
    GradesComponent,
    HomeworkComponent,
    TestsComponent,
    PlanComponent,
    StudentDrawerComponent,
    TeacherDrawerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
