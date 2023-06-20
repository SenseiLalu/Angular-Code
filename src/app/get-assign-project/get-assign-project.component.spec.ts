import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAssignProjectComponent } from './get-assign-project.component';

describe('GetAssignProjectComponent', () => {
  let component: GetAssignProjectComponent;
  let fixture: ComponentFixture<GetAssignProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAssignProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAssignProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
