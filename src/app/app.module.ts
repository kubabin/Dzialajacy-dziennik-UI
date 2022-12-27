// Internals
import { NgModule, isDevMode, enableProdMode } from '@angular/core';
import { BrowserModule, enableDebugTools } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from'@angular/service-worker'

// Material Design modules
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatTabsModule} from '@angular/material/tabs'

// Builtin components
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { GradesComponent } from './grades/grades.component';
import { HomeworkComponent } from './homework/homework.component';
import { TestsComponent } from './tests/tests.component';
import { PlanComponent } from './plan/plan.component';
import { StudentDrawerComponent } from './student-drawer/student-drawer.component';
import { TeacherDrawerComponent } from './teacher-drawer/teacher-drawer.component';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

if (environment.production)
{
  enableProdMode();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    GradesComponent,
    HomeworkComponent,
    TestsComponent,
    PlanComponent,
    StudentDrawerComponent,
    TeacherDrawerComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    RouterModule,
    ServiceWorkerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
