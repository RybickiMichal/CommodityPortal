import { TestBed } from '@angular/core/testing';

import { JsonHelperServiceService } from './commodities-json-helper.service';

describe('JsonHelperServiceService', () => {
  let service: JsonHelperServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonHelperServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
