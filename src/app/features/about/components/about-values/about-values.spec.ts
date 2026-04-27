import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutValues } from './about-values';

describe('AboutValues', () => {
  let component: AboutValues;
  let fixture: ComponentFixture<AboutValues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutValues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutValues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
