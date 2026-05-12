import { TestBed } from '@angular/core/testing';

import { GalleryAdminService } from './gallery-admin.service';

describe('GalleryAdminService', () => {
  let service: GalleryAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
