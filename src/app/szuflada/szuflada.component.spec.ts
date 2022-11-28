import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzufladaComponent } from './szuflada.component';

describe('SzufladaComponent', () => {
  let component: SzufladaComponent;
  let fixture: ComponentFixture<SzufladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzufladaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzufladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
