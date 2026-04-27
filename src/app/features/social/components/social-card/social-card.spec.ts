import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCard } from './social-card';

describe('SocialCard', () => {
  let component: SocialCard;
  let fixture: ComponentFixture<SocialCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
