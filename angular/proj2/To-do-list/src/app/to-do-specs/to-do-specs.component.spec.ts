import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoSpecsComponent } from './to-do-specs.component';

describe('ToDoSpecsComponent', () => {
  let component: ToDoSpecsComponent;
  let fixture: ComponentFixture<ToDoSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
