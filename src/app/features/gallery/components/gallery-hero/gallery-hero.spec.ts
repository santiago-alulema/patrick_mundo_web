import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryHero } from './gallery-hero';

describe('GalleryHero', () => {
  let component: GalleryHero;
  let fixture: ComponentFixture<GalleryHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
