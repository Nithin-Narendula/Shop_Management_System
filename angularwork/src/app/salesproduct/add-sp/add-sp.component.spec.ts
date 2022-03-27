import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpComponent } from './add-sp.component';

describe('AddSpComponent', () => {
  let component: AddSpComponent;
  let fixture: ComponentFixture<AddSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
