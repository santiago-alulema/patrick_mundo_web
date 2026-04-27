import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDetailPage } from './gallery-detail-page';

describe('GalleryDetailPage', () => {
  let component: GalleryDetailPage;
  let fixture: ComponentFixture<GalleryDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryDetailPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
