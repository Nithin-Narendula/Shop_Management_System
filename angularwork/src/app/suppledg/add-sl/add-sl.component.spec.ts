import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSlComponent } from './add-sl.component';

describe('AddSlComponent', () => {
  let component: AddSlComponent;
  let fixture: ComponentFixture<AddSlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
