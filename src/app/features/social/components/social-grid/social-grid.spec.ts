import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialGrid } from './social-grid';

describe('SocialGrid', () => {
  let component: SocialGrid;
  let fixture: ComponentFixture<SocialGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
