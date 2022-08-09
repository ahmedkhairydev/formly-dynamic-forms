import { TestBed } from '@angular/core/testing';

import { ConstructFormlyFieldsService } from './construct-formly-fields.service';

describe('ConstructFormlyFieldsService', () => {
  let service: ConstructFormlyFieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstructFormlyFieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
