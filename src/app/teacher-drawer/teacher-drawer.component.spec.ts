import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDrawerComponent } from './teacher-drawer.component';

describe('TeacherDrawerComponent', () => {
  let component: TeacherDrawerComponent;
  let fixture: ComponentFixture<TeacherDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
