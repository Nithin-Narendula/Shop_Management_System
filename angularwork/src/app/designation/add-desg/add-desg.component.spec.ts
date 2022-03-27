import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesgComponent } from './add-desg.component';

describe('AddDesgComponent', () => {
  let component: AddDesgComponent;
  let fixture: ComponentFixture<AddDesgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDesgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDesgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
