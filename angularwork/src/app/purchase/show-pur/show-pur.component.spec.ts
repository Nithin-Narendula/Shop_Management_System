import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPurComponent } from './show-pur.component';

describe('ShowPurComponent', () => {
  let component: ShowPurComponent;
  let fixture: ComponentFixture<ShowPurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
