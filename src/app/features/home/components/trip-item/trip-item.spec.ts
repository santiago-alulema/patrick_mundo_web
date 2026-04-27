import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripItem } from './trip-item';

describe('TripItem', () => {
  let component: TripItem;
  let fixture: ComponentFixture<TripItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
