import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppledgComponent } from './suppledg.component';

describe('SuppledgComponent', () => {
  let component: SuppledgComponent;
  let fixture: ComponentFixture<SuppledgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppledgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppledgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
