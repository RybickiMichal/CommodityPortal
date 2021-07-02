import { TestBed } from '@angular/core/testing';

import { CommodityDataService } from './commodity-data.service';

describe('CommodityDataService', () => {
  let service: CommodityDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommodityDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
