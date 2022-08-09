import { TestBed } from '@angular/core/testing';

import { ControlExpressionService } from './control-expression.service';

describe('ControlExpressionService', () => {
  let service: ControlExpressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlExpressionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
