import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsSection } from './destinations-section';

describe('DestinationsSection', () => {
  let component: DestinationsSection;
  let fixture: ComponentFixture<DestinationsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
