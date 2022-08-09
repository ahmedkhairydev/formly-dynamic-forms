import { TestBed } from '@angular/core/testing';

import { ControlCascadingService } from './control-cascading.service';

describe('ControlCascadingService', () => {
  let service: ControlCascadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlCascadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
