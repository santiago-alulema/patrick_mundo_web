import { TestBed } from '@angular/core/testing';

import { BlogAdminService } from './blog-admin.service';

describe('BlogAdminService', () => {
  let service: BlogAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
