import { TestBed } from '@angular/core/testing';

import { BasictodoService } from './basictodo.service';

describe('BasictodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasictodoService = TestBed.get(BasictodoService);
    expect(service).toBeTruthy();
  });
});
