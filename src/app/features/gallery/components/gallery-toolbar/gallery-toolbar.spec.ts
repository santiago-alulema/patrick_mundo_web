import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryToolbar } from './gallery-toolbar';

describe('GalleryToolbar', () => {
  let component: GalleryToolbar;
  let fixture: ComponentFixture<GalleryToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
