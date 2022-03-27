import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSlComponent } from './show-sl.component';

describe('ShowSlComponent', () => {
  let component: ShowSlComponent;
  let fixture: ComponentFixture<ShowSlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
