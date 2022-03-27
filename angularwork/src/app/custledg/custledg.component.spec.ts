import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustledgComponent } from './custledg.component';

describe('CustledgComponent', () => {
  let component: CustledgComponent;
  let fixture: ComponentFixture<CustledgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustledgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustledgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
