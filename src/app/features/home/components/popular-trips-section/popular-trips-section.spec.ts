import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTripsSection } from './popular-trips-section';

describe('PopularTripsSection', () => {
  let component: PopularTripsSection;
  let fixture: ComponentFixture<PopularTripsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularTripsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularTripsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
