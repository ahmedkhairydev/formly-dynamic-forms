import { TestBed } from '@angular/core/testing';

import { ConstructSubmissionService } from './construct-submission.service';

describe('ConstructSubmissionService', () => {
  let service: ConstructSubmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstructSubmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
